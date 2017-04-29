//0:4serv,1:3serv,2:4craft,3:3craft
var pickUpServ5 = ["106"];
var serv5=["002","008","037","052","059","060","062","065","075","076","084","085","097"];
var pickUpServ4 = [];
var serv4=["006","010","011","014","018","029","030","041","046","047","048","058","066","074","082","087","089","094","100","101"];
var pickUpServ3 = [];
var serv3=["007","009","013","015","017","020","022","023","026","027","028","031","035","042","049","055","056","063","064","071","072","079","080","081","095","104","105"];

var pickUpCft5=[];
var craft5=["031","032","033","034","035","040","048","057","058","067","075","097","175"];    //加入宇宙棱镜
var pickUpCft4=["182","183","184"];
var craft4=["021","022","023","024","025","026","027","028","029","030","038","039","047","056","066","073","074","098","176"];
var pickUpCft3=[];
var craft3=["037","042","046","055","065","072","089","090","091","092","093","094","095","096","177"];

var upRate = 0.66;  //pick up rate : 66%
// drop rate:
var svt5Rate = 100; //1%
var svt4Rate = 300; //3%
var svt3Rate = 4000;//40%
var cft5Rate = 400; //4%
var cft4Rate = 1200;//12%
var cft3Rate = 4000;//40%

var cards = Object.freeze({"pickUpServ5": 0, "Serv5": 0,
    "pickUpServ4": 2, "Serv4": 2,
    "pickUpServ3": 4, "Serv3": 4,
    "pickUpCft5": 1, "Craft5": 1,
    "pickUpCft4": 3, "Craft4": 3,
    "pickUpCft3": 5, "Craft3": 5,
    isServant : function(n){return n % 2 == 0;},
    isGold : function(n){return n < 4;}});

var pool = new DrawPool();
var svtPool = new DrawPool();
var goldPool = new DrawPool();


//pool.dist = distMethod.UNIFORM;
//svtPool.dist = distMethod.UNIFORM;
//goldPool.dist = distMethod.UNIFORM;

pool.gaussianStdev = 1/3;
svtPool.gaussianStdev = 1/3;
goldPool.gaussianStdev = 1/3;

initialiseDrawPools();