//0:4serv,1:3serv,2:4craft,3:3craft
var pickUpServ5 = ["086"];

var serv5 = ["002", "008", "076"];

var pickUpServ4 = [];

var serv4 = ["003", "005", "006", "010", "101", "121", "123", "165", "187"];

var pickUpServ3 = [];

var serv3 = ["007", "009", "072", "126"];


var pickUpCft5 = ["086"];

var craft5 = ["031", "032", "033", "034", "035", "040", "048", "057", "058", "067", "075", "097", "175", "185", "188", "263", "400"];

var pickUpCft4 = ["085"];

var craft4 = ["021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "038", "039", "047", "056", "066", "073", "074", "098", "176", "182", "183", "184", "186", "264", "401"];

var pickUpCft3 = ["084"];

var craft3 = ["089", "091", "243", "244", "245", "246", "247", "265", "331", "332", "333", "402", "418", "419", "420", "545", "580", "581", "582", "585", "674", "691"];




var pool = new DrawPool();
var svtPool = new DrawPool();
var goldPool = new DrawPool();

pool.gaussianStdev = 1/3;
svtPool.gaussianStdev = 1/3;
goldPool.gaussianStdev = 1/3;

// remove this line if not using the default pick-up rates
setDefaultUpRates({ "pickUpServ5" : pickUpServ5,
                      "pickUpServ4" : pickUpServ4,
                      "pickUpServ3" : pickUpServ3,
                      "pickUpCft5" : pickUpCft5,
                      "pickUpCft4" : pickUpCft4,
                      "pickUpCft3" : pickUpCft3 });

// Note, for later pools with 2.8% single SSR craft drop rate, use
// 后期日服池单up五星礼装掉率调整为2.8%，应改用
//
//setDefaultUpRates({ "pickUpServ5" : pickUpServ5,
//                    "pickUpServ4" : pickUpServ4,
//                    "pickUpServ3" : pickUpServ3,
//                    "pickUpCft5" : pickUpCft5,
//                    "pickUpCft4" : pickUpCft4,
//                    "pickUpCft3" : pickUpCft3 },
//                    true);


resetUpRate();
resetDropRate();
// populate pools
resetPools();
