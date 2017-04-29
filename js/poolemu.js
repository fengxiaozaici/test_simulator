var times=0;
var quartz=140;
var money=0;
var log = [];

function initialiseDrawPools() {
    updatePoolConfig();
    
    if(pickUpServ5 && pickUpServ5.length > 0) {
        pool.putSharedItems(pickUpServ5, upRate*svt5Rate, cards.pickUpServ5);
        pool.putSharedItems(serv5, (1-upRate)*svt5Rate, cards.Serv5);
        svtPool.putSharedItems(pickUpServ5, upRate*svt5Rate, cards.pickUpServ5);
        svtPool.putSharedItems(serv5, (1-upRate)*svt5Rate, cards.Serv5);
        goldPool.putSharedItems(pickUpServ5, upRate*svt5Rate, cards.pickUpServ5);
        goldPool.putSharedItems(serv5, (1-upRate)*svt5Rate, cards.Serv5);
    } else {
        pool.putSharedItems(serv5, svt5Rate, cards.Serv5);
        svtPool.putSharedItems(serv5, svt5Rate, cards.Serv5);
        goldPool.putSharedItems(serv5, svt5Rate, cards.Serv5);
    }
    if(pickUpServ4 && pickUpServ4.length > 0) {
        pool.putSharedItems(pickUpServ4, upRate*svt4Rate, cards.pickUpServ4);
        pool.putSharedItems(serv4, (1-upRate)*svt4Rate, cards.Serv4);
        svtPool.putSharedItems(pickUpServ4, upRate*svt4Rate, cards.pickUpServ4);
        svtPool.putSharedItems(serv4, (1-upRate)*svt4Rate, cards.Serv4);
        goldPool.putSharedItems(pickUpServ4, upRate*svt4Rate, cards.pickUpServ4);
        goldPool.putSharedItems(serv4, (1-upRate)*svt4Rate, cards.Serv4);
    } else {
        pool.putSharedItems(serv4, svt4Rate, cards.Serv4);
        svtPool.putSharedItems(serv4, svt4Rate, cards.Serv4);
        goldPool.putSharedItems(serv4, svt4Rate, cards.Serv4);
    }
    if(pickUpServ3 && pickUpServ3.length > 0) {
        pool.putSharedItems(pickUpServ3, upRate*svt3Rate, cards.pickUpServ3);
        pool.putSharedItems(serv3, (1-upRate)*svt3Rate, cards.Serv3);
        svtPool.putSharedItems(pickUpServ3, upRate*svt3Rate, cards.pickUpServ3);
        svtPool.putSharedItems(serv3, (1-upRate)*svt3Rate, cards.Serv3);
    } else {
        pool.putSharedItems(serv3, svt3Rate, cards.Serv3);
        svtPool.putSharedItems(serv3, svt3Rate, cards.Serv3);
    }
    
    if(pickUpCft5 && pickUpCft5.length > 0) {
        pool.putSharedItems(pickUpCft5, upRate*cft5Rate, cards.pickUpCft5);
        pool.putSharedItems(craft5, (1-upRate)*cft5Rate, cards.Craft5);
        goldPool.putSharedItems(pickUpCft5, upRate*cft5Rate, cards.pickUpCft5);
        goldPool.putSharedItems(craft5, (1-upRate)*cft5Rate, cards.Craft5);
    } else {
        pool.putSharedItems(craft5, cft5Rate, cards.Craft5);
        goldPool.putSharedItems(craft5, cft5Rate, cards.Craft5);
    }
    if(pickUpCft4 && pickUpCft4.length > 0) {
        pool.putSharedItems(pickUpCft4, upRate*cft4Rate, cards.pickUpCft4);
        pool.putSharedItems(craft4, (1-upRate)*cft4Rate, cards.Craft4);
        goldPool.putSharedItems(pickUpCft4, upRate*cft4Rate, cards.pickUpCft4);
        goldPool.putSharedItems(craft4, (1-upRate)*cft4Rate, cards.Craft4);
    } else {
        pool.putSharedItems(craft4, cft4Rate, cards.Craft4);
        goldPool.putSharedItems(craft4, cft4Rate, cards.Craft4);
    }
    if(pickUpCft3 && pickUpCft3.length > 0) {
        pool.putSharedItems(pickUpCft3, upRate*cft3Rate, cards.pickUpCft3);
        pool.putSharedItems(craft3, (1-upRate)*cft3Rate, cards.Craft3);
    } else {
        pool.putSharedItems(craft3, cft3Rate, cards.Craft3);
    }
    
    pool.finalisePool();
    svtPool.finalisePool();
    goldPool.finalisePool();
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
                imgurl = "http://file.fgowiki.591mogu.com/fgo/head/"+r.item+".jpg";
                break;
            case cards.pickUpCft5:
            case cards.Craft5:
            case cards.pickUpCft4:
            case cards.Craft4:
            case cards.pickUpCft3:
            case cards.Craft3:
                imgurl = "http://fgowiki.com/fgo/equip/"+ r.item +".jpg";
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

function getOne(){
    if (quartz < 3) {
        if (!buyQuartz()) return;
    }
    quartz -= 3;
    $("#quartz").text(quartz);
    times += 1;
    $("#times").text(times);
    
    clearResult();
    log = pool.draw(1);
    showResult(log);
}
function getTen(){
    if (quartz < 30) {
        if (!buyQuartz()) return;
    }
    quartz -= 30;
    $("#quartz").text(quartz);
    times += 10;
    $("#times").text(times);
    
    results = pool.draw(10);
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
        quartz+=140;
        money+=518;
        $("#money").text(money);
        return true;
    }
        
    var buy=confirm("您的圣晶石不足，是否花费518元购买140颗圣晶石？");
    if(buy){
        quartz+=140;
        money+=518;
        alert("购买圣晶石成功。您目前持有圣晶石："+quartz);
        $("#quartz").text(quartz);
        $("#money").text(money);
        return true;
    }
    else{
        alert("取消购买圣晶石。");
        return false;
    }
}
