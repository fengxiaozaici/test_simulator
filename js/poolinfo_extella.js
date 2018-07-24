//0:4serv,1:3serv,2:4craft,3:3craft
var pickUpServ5 = ["002", "008", "059", "062", "065", "085"];
var serv5 = ["037", "052", "060", "075", "076", "084", "097", "113", "118"];
var pickUpServ4 = ["005", "011", "018", "074", "102", "123", "140"];
var serv4 = ["006", "010", "014", "029", "030", "041", "046", "047", "048", "058", "066", "082", "087", "089", "094", "100", "101", "109", "116", "120", "121"];
var pickUpServ3 = ["023", "017", "013", "049"];
var serv3 = ["007", "009", "015", "020", "022",  "026", "027", "028", "031", "035", "042", "055", "056", "063", "064", "071", "072", "079", "080", "081", "095", "104", "105", "110", "117", "124", "125"];

var pickUpCft5 = ["057", "058", "067", "175"];
var craft5 = ["031", "032", "033", "034", "035", "040", "048", "075", "097", "185", "188", "263"];
var pickUpCft4 = ["056", "066", "176"];
var craft4 = ["021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "038", "039", "047", "073", "074", "098", "182", "183", "184", "186", "264"];
var pickUpCft3 = [];
var craft3 = ["089", "090", "091", "092", "093", "094", "095", "096", "243", "244", "245", "246", "247", "265", "331", "332", "333"];



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

resetUpRate();
resetDropRate();
// populate pools
resetPools();
