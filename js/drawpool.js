// effectively an enum for pool configuration.
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
// Modified from: http://eloquentjavascript.net/1st_edition/appendix2.html

function heapify(content, comparator) {
    // make a heap within amortised linear time
    for(var i = ((content.length) >> 1) - 1; i >= 0; i--) {
        sinkDown(content, comparator, i);
    }
}

function heapPush(content, comparator, element) {
    // Add the new element to the end of the array.
    content.push(element);
    // Allow it to bubble up.
    bubbleUp(content, comparator, content.length - 1);
  }

function extractMin(content, comparator) {
    // Store the first element so we can return it later.
    var result = content[0];
    // Get the element at the end of the array.
    var end = content.pop();
    // If there are any elements left, put the end element at the
    // start, and let it sink down.
    if (content.length > 0) {
      content[0] = end;
      sinkDown(content, comparator, 0);
    }
    return result;
}

function bubbleUp(content, comparator, n) {
    // Fetch the element that has to be moved.
    var element = content[n];
    // When at 0, an element can not go up any further.
    while (n > 0) {
      // Compute the parent element's index, and fetch it.
      var parentN = ((n + 1) >> 1) - 1,
      parent = content[parentN];
      // If the parent has a lesser score, things are in order and we
      // are done.
      if (comparator(element, parent) >= 0)
        break;

      // Otherwise, swap the parent with the current element and
      // continue.
      content[parentN] = element;
      content[n] = parent;
      n = parentN;
    }
}

function sinkDown(content, comparator, n) {
    // Look up the target element and its score.
    var length = content.length,
    element = content[n];

    while(true) {
      // Compute the indices of the child elements.
      var child2N = (n + 1) * 2, child1N = child2N - 1;
      // This is used to store the new position of the element,
      // if any.
      var swap = null;
      // If the first child exists (is inside the array)...
      if (child1N < length) {
        // Look it up and compute its score.
        var child1 = content[child1N];
        // If the score is less than our element's, we need to swap.
        if (comparator(child1, element) < 0)
          swap = child1N;
      }
      // Do the same checks for the other child.
      if (child2N < length) {
        var child2 = content[child2N];
        if (comparator(child2, (swap == null ? element : child1)) < 0)
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

function binarySearch(array, e, scoreFunc) {
    
    var minIndex = 0;
    var maxIndex = array.length - 1;
    var currentIndex = 0;
    var currentElement;
    
    while(minIndex <= maxIndex) {
        currentIndex = (minIndex + maxIndex) >> 1;
        currentElement = array[currentIndex];
        if (scoreFunc(currentElement) < e) {
            minIndex = currentIndex + 1;
        } else if (scoreFunc(currentElement) > e) {
            if (currentIndex == 0) { break; }
            else if (scoreFunc(array[currentIndex - 1]) < e) { break; }
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

///

function isInt(value) {
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}

///
function egcd(a, b) {
    if (a == 0)
        return b;
    while (b != 0) {
        if (a > b)
            a -= b;
        else
            b -= a;
    }
    return a;
}

/**
 * A naive gacha pool implementation.
 *
 * Usage:
 *
 * // construct a new pool
 * var myPool = new DrawPool();
 *
 * // fill the pool with putItem, putMultiItems, putSharedItems, removeItem, removeItems
 * //
 * // putItem(item, weight)
 * // weight MUST be an integer.
 * //
 * // putMultiItems(items, weight), effectively calling putItem
 * // for each element in items with weight
 * //
 * // putSharedItems(items, totalWeight), effectively calling putItem
 * // for each element in items with weight/items.length
 *
 * // removeItem(item) and removeItems(items)
 * // remove an item/multiple items from the pool
 *
 * myPool.putItem({item : "Altria Pendragon", rarity : "SSR"}, 5);
 * myPool.putSharedItems([{item : "Emiya", rarity : "SR"},{item : "Lancelot", rarity : "SR"}], 10);
 * myPool.putSharedItems([{item : "Kiyohime", rarity : "R"},{item : "Darius III", rarity : "R"}], 85);
 *
 * // finalise the pool to get it ready for use
 * // if you later modify items in the pool, finalisePool()
 * // needs to be called for changes to take effect
 * myPool.finalisePool();
 *
 * // switch to uniform distribution
 * myPool.dist = distMethod.UNIFORM; // or distMethod.GAUSSIAN, which is default
 * 
 * // if using Gaussian pool, it is recommended to make some trial draws before usage.
 * // myPool.dist = distMethod.GAUSSIAN;
 * // myPool.draw(10000);
 *
 * // draw items from the pool
 * var gachaResult = myPool.draw(10); // do a ten-roll!
 * console.log(gachaResult.map(function(r){return r.item}));
 * // ["Kiyohime", "Darius III", "Darius III", "Kiyohime",
 * // "Kiyohime", "Darius III", "Darius III", "Darius III",
 * // "Kiyohime", "Darius III"]
 *
 * myPool.resetPool(); // empty the pool, this only takes effect after another call of 'finalisePool()'.
 *
 */

DrawPool = function() {
    this.item_dict = {};
    this.weight_sum = 0;
    this.scaleFactor = 1;
    this.items = [];
    this.gaussianHeap = [];
    this.dist = distMethod.GAUSSIAN;
    this.gaussianStdev = 1/3;
    this.heapComparator = function(a,b){
        if (a.gaussianWeight < b.gaussianWeight) {
            return -1;
        } else if (a.gaussianWeight > b.gaussianWeight) {
            return 1;
        } else {
            return 0;
        }
    };
}

DrawPool.prototype = {
    putItem : function(_value, _weight) {
        if (isInt(this.scaleFactor * _weight)) {
            this.item_dict[JSON.stringify(_value)] = this.scaleFactor * _weight;
        } else {
            throw 'weight must be integer';
        }
    },
    
    putItemWithoutScaling : function(_value, _weight) {
        this.item_dict[JSON.stringify(_value)] = _weight;
    },
    
    putMultiItems : function(_valueArray, _weight) {
        if (_valueArray && _valueArray.length > 0) {
            for (var v of _valueArray) {
                this.putItem(v, _weight);
            }
        }
    },
    
    putSharedItems : function(_valueArray, _sharedWeight) {
        if (_valueArray && _valueArray.length > 0 && isInt(_sharedWeight)) {
            if (((_sharedWeight * this.scaleFactor) % _valueArray.length) != 0) {
                // update scale factor
                var gcd = egcd(_sharedWeight * this.scaleFactor, _valueArray.length);
                this.updateScaleFactor(Math.floor(_valueArray.length / gcd));
            }
            for (var v of _valueArray) {
                this.putItemWithoutScaling(v, Math.round(this.scaleFactor * _sharedWeight / _valueArray.length));
            }
        }
    },
    
    removeItem : function(_value) {
        delete this.item_dict[JSON.stringify(_value)];
    },
    
    removeItems : function(_values) {
        for (var v of _values) { this.removeItem(v); }
    },
    
    updateScaleFactor :function(_newFactor) {
        if (isInt(_newFactor)) {
            // update scaleFactor to scaleFactor * _newFactor
            this.scaleFactor *= _newFactor;
            for (var key in this.item_dict) {
                this.item_dict[key] *= _newFactor;
            }
        } else {
            throw "invalid scale factor";
        }
    },
    
    resetPool : function() { this.item_dict = {}; this.scaleFactor = 1; },
    
    finalisePool : function() {
        // finalise the draw pool by reassigning items and gaussianHeap
        this.weight_sum = 0.0;
        this.items = [];
        this.gaussianHeap = [];
        
        for (var item in this.item_dict) {
            if (this.item_dict.hasOwnProperty(item)) {
                var obj = JSON.parse(item);
                this.items.push({ item: obj, weight: this.item_dict[item]});
                this.weight_sum += this.item_dict[item];
            }
        }
        // put in normalised weights and initialise weights for gaussian pool
        var cul = 0.0;
        for (var i of this.items) {
            var w = i.weight;
            var n_w = w / this.weight_sum;
            cul += w;
            i.cumulativeWeight = cul;
            this.gaussianHeap.push({item : i.item, normalisedWeight : n_w, invNormWeight : 1.0/n_w, gaussianWeight : gaussian(1.0/n_w, this.gaussianStdev/n_w)});
        }
        // keep gaussianHeap as a min heap
        heapify(this.gaussianHeap, this.heapComparator);
    },
    
    compactGaussianPool : function() {
        var min = this.gaussianHeap[0].gaussianWeight;
        for (var v of this.gaussianHeap) {
            v.gaussianWeight -= min;
        }
    },
    
    draw : function(n) {
        var gaussianCompactThreshold = 1.0e9;
        
        //draw n items from pool
        var result = [];
        if (distMethod.UNIFORM == this.dist) {
            for (var i = 0; i < n; i++) {
                var r = Math.floor(Math.random() * this.weight_sum);
                result.push(this.items[binarySearch(this.items, r, function(itm){return itm.cumulativeWeight;})].item);
            }
        } else if (distMethod.GAUSSIAN == this.dist) {
            // method adopted from http://huangwei.pro/2015-07/game-random/
            // test if need to compact the weights
            if (this.gaussianHeap[0].gaussianWeight > gaussianCompactThreshold) {
                this.compactGaussianPool();
            }
            for (var i = 0; i < n; i++) {
                var r = extractMin(this.gaussianHeap, this.heapComparator);
                result.push(r.item);
                heapPush(this.gaussianHeap,this.heapComparator,{item: r.item, normalisedWeight : r.n_w, invNormWeight : r.invNormWeight, gaussianWeight: gaussian(r.invNormWeight, this.gaussianStdev * r.invNormWeight) + r.gaussianWeight});
            }
        } else {
            throw 'Unsupported distribution method';
        }
        return result;
    }
}