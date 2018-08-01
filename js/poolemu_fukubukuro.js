var times=0;
var quartz=30;

var purchase = 86;
var money=0;
var log = [];

$("#quartz").text(quartz);

// tagging for cards
var cards = Object.freeze({"pickUpServ5": 0, "Serv5": 0,
    "pickUpServ4": 2, "Serv4": 2,
    "pickUpServ3": 4, "Serv3": 4,
    "pickUpCft5": 1, "Craft5": 1,
    "pickUpCft4": 3, "Craft4": 3,
    "pickUpCft3": 5, "Craft3": 5,
    isServant : function(n){return n % 2 == 0;},
    isGold : function(n){return n < 4;}});

    
// drop rate:
var svt5Rate = 100; //1%
var svt4Rate = 300; //3%
var svt3Rate = 4000;//40%
var cft5Rate = 400; //4%
var cft4Rate = 1200;//12%
var cft3Rate = 4000;//40%    
 
// pick-up rate:
var svt5UpRate = 0.7;
var svt4UpRate = 0.5;
var svt3UpRate = 0.1;
var cft5UpRate = 0.375;
var cft4UpRate = 1/3;
var cft3UpRate = 0.2;

var minUpRate = 0;
var maxUpRate = 100;

function sanityCheck(input) {
    var val = parseInt(input.value);
    if (val < minUpRate) {
        input.value = minUpRate;
    }
    if (val > maxUpRate) {
        input.value = maxUpRate;
    }
}

function setDropRate() {
    svt5Rate = Math.round(parseFloat($("#serv5Rate").val()) * 100);
    svt4Rate = Math.round(parseFloat($("#serv4Rate").val()) * 100);
    svt3Rate = Math.round(parseFloat($("#serv3Rate").val()) * 100);
    cft5Rate = Math.round(parseFloat($("#cft5Rate").val()) * 100);
    cft4Rate = Math.round(parseFloat($("#cft4Rate").val()) * 100);
    cft3Rate = Math.round(parseFloat($("#cft3Rate").val()) * 100);
    resetDropRate();
    resetPools();
}
 
function resetDropRate() {
    $("#serv5Rate").val((svt5Rate/100).toString());
    $("#serv4Rate").val((svt4Rate/100).toString());
    $("#serv3Rate").val((svt3Rate/100).toString());
    $("#cft5Rate").val((cft5Rate/100).toString());
    $("#cft4Rate").val((cft4Rate/100).toString());
    $("#cft3Rate").val((cft3Rate/100).toString());
}

function resetPools() {
    initialiseDrawPools({ 
                      "Serv5" : serv5,
                      "Serv4" : serv4,
                      "Serv3" : serv3,
                      "Craft5" : craft5,
                      "Craft4" : craft4,
                      "Craft3" : craft3});
}
    
function initialiseDrawPools(cardPool) {
    
    var cardArr = tagCards(cardPool);
    
    pool.resetPool();
    svtPool.resetPool();
    goldPool.resetPool();
    ssrPool.resetPool();
    
        pool.putSharedItems(cardArr.Serv5, svt5Rate);
        svtPool.putSharedItems(cardArr.Serv5, svt5Rate);
        goldPool.putSharedItems(cardArr.Serv5, svt5Rate);
        ssrPool.putSharedItems(cardArr.Serv5, 10000);
    
        pool.putSharedItems(cardArr.Serv4, svt4Rate);
        svtPool.putSharedItems(cardArr.Serv4, svt4Rate);
        goldPool.putSharedItems(cardArr.Serv4, svt4Rate);

        pool.putSharedItems(cardArr.Serv3, svt3Rate);
        svtPool.putSharedItems(cardArr.Serv3, svt3Rate);
    
    
        pool.putSharedItems(cardArr.Craft5, cft5Rate);
        goldPool.putSharedItems(cardArr.Craft5, cft5Rate);
    
        pool.putSharedItems(cardArr.Craft4, cft4Rate);
        goldPool.putSharedItems(cardArr.Craft4, cft4Rate);
    
        pool.putSharedItems(cardArr.Craft3, cft3Rate);
    
    pool.finalisePool();
    svtPool.finalisePool();
    goldPool.finalisePool();
    ssrPool.finalisePool();
    
    pool.dist = distMethod.GAUSSIAN;
    svtPool.dist = distMethod.GAUSSIAN;
    goldPool.dist = distMethod.GAUSSIAN;
    ssrPool.dist = distMethod.UNIFORM;
    
    // do some rolls for gaussian distributed pool.
    pool.draw(10000);
    svtPool.draw(10000);
    goldPool.draw(10000);

    // switch back to user-specified configuration
    updatePoolConfig();
}

function updatePoolConfig() {
    if(!($("#gaussian").is(':checked'))){
        pool.dist = distMethod.UNIFORM;
        svtPool.dist = distMethod.UNIFORM;
        goldPool.dist = distMethod.UNIFORM;
    } else {
        pool.dist = distMethod.GAUSSIAN;
        svtPool.dist = distMethod.GAUSSIAN;
        goldPool.dist = distMethod.GAUSSIAN;
    }
}

function tagCards(cardArr) {
    var cardArr = { "Serv5" : serv5, "Serv4" : serv4, "Serv3" : serv3, "Craft5" : craft5, "Craft4" : craft4, "Craft3" : craft3};
    for (var i in cardArr) {
        if (cardArr.hasOwnProperty(i)) {
            cardArr[i] = cardArr[i].map(function (e) {
                return { item: e, tag: cards[i] };
            });
        }
    }
    return cardArr;
}

function showResult(resultArray) {
    
    for (var i = 1; i <= resultArray.length; i++) {
        var r = resultArray[i-1];
        var imgurl;
        switch(r.tag)
        {
            case cards.pickUpServ5:
            case cards.Serv5:
            case cards.pickUpServ4:
            case cards.Serv4:
            case cards.pickUpServ3:
            case cards.Serv3:
                imgurl = "https://fgowiki.com/fgo/head/"+r.item+".jpg";
                break;
            case cards.pickUpCft5:
            case cards.Craft5:
            case cards.pickUpCft4:
            case cards.Craft4:
            case cards.pickUpCft3:
            case cards.Craft3:
                imgurl = "https://fgowiki.com/fgo/equip/"+ r.item +".jpg";
                break;
        };
        switch(r.tag)
        {
            
            case cards.pickUpServ5:
            case cards.Serv5:
                $("#serv5").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                break;
            case cards.pickUpServ4:
            case cards.Serv4:
                $("#serv4").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                break;
            case cards.pickUpCft5:
            case cards.Craft5:
                $("#craft5").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                break;
            case cards.pickUpCft4:
            case cards.Craft4:
                $("#craft4").append("<img class=\"img-thumbnail\" src=\""+imgurl+"\"></img> ");
                break;
        };
        $("#r_"+i).attr("src",imgurl);
    }
}

function getTen(){
    if (quartz < 30) {
        if (!buyQuartz()) return;
    }
    quartz -= 30;
    $("#quartz").text(quartz);
    times += 10;
    $("#times").text(times);
    
    results = pool.draw(9);
    var hasGold = false, hasServant = false, pass = false;
    while(!pass) {
        pass = true;
        for (var r of results) {
            hasGold |= cards.isGold(r.tag);
        }
        if (!hasGold) {
            // randomly pick a silver card and draw a replacement from gold-only pool.
            var silvers = results.filter(function(c){return !cards.isGold(c.tag);});
            var replacement = results.indexOf(silvers[Math.floor(Math.random()*silvers.length)]);
            results[replacement] = goldPool.draw(1)[0];
        }
        for (var r of results) {
            hasServant |= cards.isServant(r.tag);
        }
        if (!hasServant) {
            // since we might have replaced our only gold craft essence by a Rare servant, need to double check.
            // it is possible, though extremely unlikely, that this process might never terminate.
            pass = false;
            // randomly pick a craft essence and draw a replacement from servant-only pool.
            var crafts = results.filter(function(c){return !cards.isServant(c.tag);});
            var replacement = results.indexOf(crafts[Math.floor(Math.random()*crafts.length)]);
            results[replacement] = svtPool.draw(1)[0];
        }
    }
    results.push(ssrPool.draw(1)[0]);
    shuffle(results);
    //results = pool.draw(8);
    //results.push(goldPool.draw(1)[0]);
    //results.push(svtPool.draw(1)[0]);
    //shuffle(results);
    log = results;
    showResult(log);
}
function clearResult(){
    for(var i=1;i<=10;i++){
        $("#r_"+i).attr("src","");
    }
}

// shuffle an array
// source: http://stackoverflow.com/a/6274381
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function buyQuartz(){
    if($("#auto_buy").is(':checked')){
        quartz+=purchase;
        money+=518;
        $("#money").text(money);
        return true;
    }
    var buy=confirm("您的付费圣晶石不足，是否花费518元购买86颗付费圣晶石？");
    if(buy){
        quartz+=purchase;
        money+=518;
        alert("购买圣晶石成功。您目前持有付费圣晶石："+quartz);
        $("#quartz").text(quartz);
        $("#money").text(money);
        return true;
    }
    else{
        alert("取消购买圣晶石。");
        return false;
    }
}
