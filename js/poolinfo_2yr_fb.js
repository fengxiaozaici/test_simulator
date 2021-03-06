//0:4serv,1:3serv,2:4craft,3:3craft
var serv5 = ["002", "008", "012", "037", "051", "052", "059", "060", "062", "065", "068", "070", "075", "076", "077", "084", "085", "086", "088", "090", "091", "093", "096", "097", "098", "099", "106", "108", "112", "113", "114", "118", "119", "127", "128", "129", "136", "139", "142", "143", "144", "150", "153", "154", "155", "156", "160", "161", "163", "167", "169"];
var serv4 = ["006", "010", "011", "014", "018", "029", "030", "041", "046", "047", "048", "058", "066", "074", "082", "087", "089", "094", "100", "101", "109", "116", "120", "121", "140", "145", "146", "158", "159", "165", "170", "171"];
var serv3 = ["007", "009", "013", "015", "017", "020", "022", "023", "026", "027", "028", "031","035", "042", "049", "055", "056", "063", "064", "071", "072", "079", "080", "081", "095", "104", "105", "110", "117", "124", "125"];

var craft5 = ["031", "032", "033", "034", "035", "040", "048", "057", "058", "067", "075", "097", "175", "185", "188", "263", "400"];
var craft4 = ["021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "038", "039", "047", "056", "066", "073", "074", "098", "176", "182", "183", "184", "186", "264", "401"];
var craft3 = ["089", "091", "243", "244", "245", "246", "247", "265", "331", "332", "333", "402", "418", "419", "420", "545", "580", "581", "582", "585"];


var pool = new DrawPool();
var svtPool = new DrawPool();
var goldPool = new DrawPool();
var ssrPool = new DrawPool();

pool.gaussianStdev = 1/3;
svtPool.gaussianStdev = 1/3;
goldPool.gaussianStdev = 1/3;
ssrPool.gaussianStdev = 1/3;

resetDropRate();
// populate pools
resetPools();
