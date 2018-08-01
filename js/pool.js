// polyfill Array.prototype.find if not exist
// https://tc39.github.io/ecma262/#sec-array.prototype.find
if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function(predicate) {
     // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this);

      // 2. Let len be ? ToLength(? Get(O, "length")).
      var len = o.length >>> 0;

      // 3. If IsCallable(predicate) is false, throw a TypeError exception.
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }

      // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
      var thisArg = arguments[1];

      // 5. Let k be 0.
      var k = 0;

      // 6. Repeat, while k < len
      while (k < len) {
        // a. Let Pk be ! ToString(k).        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];
        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        }
        // e. Increase k by 1.
        k++;
      }

      // 7. Return undefined.
      return undefined;
    },
    configurable: true,
    writable: true
  });
}


var defaultPoolName = "garden";
var sStr = document.location.search;
var result = undefined;

if (sStr.substr(0,1) === "?") {
    var n = sStr.substr(1);
    result = myObj.sites.find(function (p) { return p.info === n; });
}
if (result === undefined) {
        result = myObj.sites.find(function (p) { return p.info === defaultPoolName; });
}
var poolName = result.info;
var poolTitle = result.name;
var poolImage = result.img; 
document.title = "Fate/Grand Order：" + poolTitle;
document.getElementById("titleText").innerHTML = "<a href=\".\" target=\"_blank\">[Fate/Grand Order]</a>：" + poolTitle;
document.getElementById("bannerContainer").innerHTML = "<img src=\"" + poolImage + "\" class=\"img-thumbnail\" height=\"232\" width=\"640\" align=\"center\">";

var poolInfoScript = document.createElement('script');
poolInfoScript.src = "js/poolinfo_" + poolName + ".js";
document.body.appendChild(poolInfoScript);
