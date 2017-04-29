var distMethod = Object.freeze({UNIFORM: 1, GAUSSIAN: 2});

// normally distributed RNG
// source: http://stackoverflow.com/a/35599181

var gaussian = function() {
    var y2;
    var use_last = false;
    return function(mean, stdev) {
        var y1;
        if(use_last) {
           y1 = y2;
           use_last = false;
        }
        else {
            var x1, x2, w;
            do {
                 x1 = 2.0 * Math.random() - 1.0;
                 x2 = 2.0 * Math.random() - 1.0;
                 w  = x1 * x1 + x2 * x2;               
            } while( w >= 1.0);
            w = Math.sqrt((-2.0 * Math.log(w))/w);
            y1 = x1 * w;
            y2 = x2 * w;
            use_last = true;
        }
        return mean + stdev * y1;
   }
}();

// min heap implementation
// Source: http://eloquentjavascript.net/1st_edition/appendix2.html

function heapify(content, scoreFunction) {
    // make a heap within amortised linear time
    for(var i = ((content.length) >> 1) - 1; i >= 0; i--) {
        sinkDown(content, scoreFunction, i);
    }
}

function heapPush(content, scoreFunction, element) {
    // Add the new element to the end of the array.
    content.push(element);
    // Allow it to bubble up.
    bubbleUp(content, scoreFunction, content.length - 1);
  }

function extractMin(content, scoreFunction) {
    // Store the first element so we can return it later.
    var result = content[0];
    // Get the element at the end of the array.
    var end = content.pop();
    // If there are any elements left, put the end element at the
    // start, and let it sink down.
    if (content.length > 0) {
      content[0] = end;
      sinkDown(content, scoreFunction, 0);
    }
    return result;
}

function bubbleUp(content, scoreFunction, n) {
    // Fetch the element that has to be moved.
    var element = content[n], score = scoreFunction(element);
    // When at 0, an element can not go up any further.
    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      var parentN = ((n + 1) >> 1) - 1,
      parent = content[parentN];
      // If the parent has a lesser score, things are in order and we
      // are done.
      if (score >= scoreFunction(parent))
        break;

      // Otherwise, swap the parent with the current element and
      // continue.
      content[parentN] = element;
      content[n] = parent;
      n = parentN;
    }
}

function sinkDown(content, scoreFunction, n) {
    // Look up the target element and its score.
    var length = content.length,
    element = content[n],
    elemScore = scoreFunction(element);

    while(true) {
      // Compute the indices of the child elements.
      var child2N = (n + 1) * 2, child1N = child2N - 1;
      // This is used to store the new position of the element,
      // if any.
      var swap = null;
      // If the first child exists (is inside the array)...
      if (child1N < length) {
        // Look it up and compute its score.
        var child1 = content[child1N],
        child1Score = scoreFunction(child1);
        // If the score is less than our element's, we need to swap.
        if (child1Score < elemScore)
          swap = child1N;
      }
      // Do the same checks for the other child.
      if (child2N < length) {
        var child2 = content[child2N],
        child2Score = scoreFunction(child2);
        if (child2Score < (swap == null ? elemScore : child1Score))
          swap = child2N;
      }

      // No need to swap further, we are done.
      if (swap == null) break;

      // Otherwise, swap and continue.
      content[n] = content[swap];
      content[swap] = element;
      n = swap;
    }
}
////
// binary search in a sorted array
// modified from https://oli.me.uk/2013/06/08/searching-javascript-arrays-with-a-binary-search/

function binarySearch(array, e) {
    
    var minIndex = 0;
    var maxIndex = array.length - 1;
    var currentIndex = 0;
    var currentElement;
    
    while(minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) >> 1;
        currentElement = array[currentIndex];
        if (currentElement < e) {
            minIndex = currentIndex + 1;
        } else if (currentElement > e) {
            if (currentIndex == 0) { break; }
            else if (array[currentIndex - 1] < e) { break; }
            else { maxIndex = currentIndex - 1; }
        } else {
            if (currentIndex < array.length - 1){
                currentIndex++;
            }
            break;
        }
    }
    return currentIndex;
}

DrawPool = function() {
    this.item_dict = {};
    this.weight_sum = 0.0;
    this.weights = [];
    this.cumulative_weights = [];
    this.n_weights = [];
    this.p_weights = [];
    this.items = [];
    this.dist = distMethod.GAUSSIAN;
    this.gaussianStdev = 1/3;
    this.heapScoreFunction = function(pair){return pair.item;};
}

DrawPool.prototype = {
    putItem : function(_value, _weight, _tag) {
        this.item_dict[JSON.stringify({item : _value, tag : _tag})] = _weight;
    },
    
    putMultiItems : function(_valueArray, _weight, _tag) {
        if (_valueArray && _valueArray.length > 0) {
            for (var v of _valueArray) {
                this.putItem(v, _weight, _tag);
            }
        }
    },
    
    putSharedItems : function(_valueArray, _sharedWeight, _tag) {
        if (_valueArray && _valueArray.length > 0) {
            var weight = _sharedWeight / _valueArray.length;
            for (var v of _valueArray) {
                this.putItem(v, weight, _tag);
            }
        }
    },
    
    resetPool : function() { this.item_dict = {}; },
    
    finalisePool : function() {
        // finalise the draw pool by reassigning weights, 
        // cumulative_weights, items and p_weights
        this.weight_sum = 0.0;
        this.weights = [];
        this.cumulative_weights = [];
        this.n_weights = [];
        this.p_weights = [];
        this.items = [];
        
        for (var item in this.item_dict) {
            if (this.item_dict.hasOwnProperty(item)) {
                this.items.push(JSON.parse(item));
                this.weight_sum += this.item_dict[item];
                this.weights.push(this.item_dict[item]);
            }
        }
        // put in normalised weights
        var cul = 0.0;
        var i = 0;
        for (var w of this.weights) {
            var n_w = w / this.weight_sum;
            cul += w;
            this.cumulative_weights.push(cul);
            this.n_weights.push(n_w);
            this.p_weights.push({item: gaussian(1.0/n_w, this.gaussianStdev/n_w), index: i});
            i++;
        }
        // keep p_weights as a min heap
        heapify(this.p_weights, this.heapScoreFunction);
    },
    
    draw : function(n) {
        //draw n items from pool
        var result = [];
        if (distMethod.UNIFORM == this.dist) {
            for (var i = 0; i < n; i++) {
                var r = Math.random() * this.weight_sum;
                result.push(this.items[binarySearch(this.cumulative_weights, r)]);
            }
        } else if (distMethod.GAUSSIAN == this.dist) {
            // method adopted from http://huangwei.pro/2015-07/game-random/
            for (var i = 0; i < n; i++) {
                var r = extractMin(this.p_weights, this.heapScoreFunction);
                var itemWeight = r.item, itemIndex = r.index;
                result.push(this.items[itemIndex]);
                heapPush(this.p_weights,this.heapScoreFunction,{item: gaussian(1.0/this.n_weights[itemIndex], this.gaussianStdev/this.n_weights[itemIndex]) + itemWeight, index: itemIndex});
            }
        } else {
            throw 'Unsupported distribution method';
        }
        return result;
    }
}