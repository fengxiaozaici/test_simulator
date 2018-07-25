var defaultPoolName = "garden";
var sStr = document.location.search;
var result = undefined;

if (sStr.startsWith("?")) {
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
