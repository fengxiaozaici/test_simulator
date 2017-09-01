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
    ]
}

for (i in myObj.sites) {
    x += "<a href=" + myObj.sites[i].info + ">" + myObj.sites[i].name + "</a>";

}

document.getElementById("index").innerHTML = x;
 