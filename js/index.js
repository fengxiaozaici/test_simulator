var myObj, i, j, x = "";
myObj = {
    "name": "index",
    "num": 17,
    "sites": [
        { "name": "[600wDL·斯卡哈]", "info": "600w.html" },
        { "name": "[鬼岛·源赖光]", "info": "onigashima.html" },
        { "name": "[第六章1·拉二]", "info": "sixth.html" },
        { "name": "[夏日祭·达芬奇]", "info": "1st.html" },
        { "name": "[泳装1·枪玉]", "info": "summer1.html" },
        { "name": "[泳装2·弓呆]", "info": "summer2.html" },
        { "name": "[第六章2·白枪呆]", "info": "sixth2.html" },
        { "name": "[魔法少女·伊莉雅]", "info": "prisma.html" },
        { "name": "[职阶日替·术]", "info": "caster.html" },
        { "name": "[尼禄祭再临·花嫁尼禄]", "info": "nero2.html" },
        { "name": "[700wDL·黑贞]", "info": "700w.html" },
        { "name": "[万圣节复刻·玉藻前]", "info": "halloween1.html" },
        { "name": "[新万圣节·艳后]", "info": "halloween2.html" },
        { "name": "[Fate/EXTELLA]", "info": "extella.html" },
        { "name": "[圆桌骑士]", "info": "knights.html" },
        { "name": "[圣诞节复刻·杰克]", "info": "xmas1.html" },
        { "name": "[天草四郎]", "info": "shiro.html" },
        { "name": "[新圣诞节·弓凛]", "info": "xmas2.html" },
        { "name": "[阿蒂拉]", "info": "altila.html" },
        { "name": "[第七章1·恩奇都]", "info": "seventh.html" },
        { "name": "[第七章2·羽蛇神]", "info": "seventh2.html" },
        { "name": "[终章·梅林]", "info": "final.html" },
        { "name": "[新年·武藏]", "info": "newyear.html" },
        { "name": "[王哈桑]", "info": "yama.html" },
        { "name": "[月神复刻·俄里翁]", "info": "tsukimil.html" },
        { "name": "[监狱塔复刻·伯爵]", "info": "gankutsuou.html" },
        { "name": "[800wDL·达芬奇]", "info": "800w.html" },
        { "name": "[情人节·BX]", "info": "valentine.html" },
        { "name": "[新宿1·新宿Archer]", "info": "shinjuku.html" },
        { "name": "[新宿2·黑A]", "info": "shinjuku2.html" },
        { "name": "[白情复刻·天草四郎]", "info": "white1.html" },
        { "name": "[新白情·旧剑]", "info": "white2.html" },
        { "name": "[本能寺复刻·冲田总司]", "info": "honnouji.html" },
        { "name": "[明治维新·土方岁三]", "info": "meiji.html" },        
        { "name": "[CCC预热·CCC众]", "info": "ccc0.html" },
        { "name": "[CCC·Meltlilith]", "info": "ccc1.html" },
        { "name": "[CCC2·杀生院祈荒]", "info": "ccc2.html" },
        { "name": "[900wDL·弓凛]", "info": "900w.html" },
        { "name": "[雅戈泰1·不夜城的Caster]", "info": "agarta1.html" },
        { "name": "[雅戈泰2·德雷克]", "info": "agarta2.html" },
        { "name": "[二周年·福尔摩斯]", "info": "2nd.html" },
        { "name": "[新泳装1·尼禄]", "info": "2017summer1.html" },
        { "name": "[新泳装2·黑王]", "info": "2017summer2.html" },
        { "name": "[新泳装3·梅芙三藏]", "info": "2017summer3.html" },
        { "name": "[尼禄祭2017·布姐]", "info": "nero3.html" },
        { "name": "[1000wDL·梅林]", "info": "1000w.html" },
        { "name": "[Fate/HF·樱]", "info": "fatehf.html" },
        { "name": "[下总国1·武藏]", "info": "7kengou.html" },
        { "name": "[下总国2·源赖光酒吞]", "info": "7kengou2.html" },
        { "name": "[万圣节2017·刑部姬]", "info": "halloween3.html" },
        { "name": "[FA·天草四郎]", "info": "apocrypha.html" },
        { "name": "[塞勒姆·喀耳刻哪吒]", "info": "salem.html" },
        { "name": "[塞勒姆2·阿比盖尔]", "info": "salem2.html" },
        { "name": "[圣诞2017·艾蕾]", "info": "xmas3.html" }
    ]
}

for (i in myObj.sites) {
    x += "<a href=" + myObj.sites[i].info + ">" + myObj.sites[i].name + "</a>";

}

document.getElementById("index").innerHTML = x;
 