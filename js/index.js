var myObj, i, j, x = "";
myObj = {
    "name": "index",
    "num": 17,
    "sites": [
        { "name": "[600wDL·斯卡哈]", "info": "600w", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/06/banner_100615495.png" },
        { "name": "[鬼岛·源赖光]", "info": "onigashima", "img":"https://kazemai.github.io/fgo-vz/common/images/2016/07/summon_20160725_mcuyf.jpg"  },
        { "name": "[第六章1·拉二]", "info": "sixth", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/07/summon_20160729_f3kcj.jpg" },
        { "name": "[夏日祭·达芬奇]", "info": "1st", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/07/summon_20160807_jauei.jpg" },
        { "name": "[泳装1·枪玉]", "info": "summer1", "img": "http://pic3.178.com/3958/39582737/month_1611/542142794f15cffa41200db382e95d32.jpg" },
        { "name": "[泳装2·弓呆]", "info": "summer2", "img": "http://img.nga.178.com/attachments/mon_201704/09/f0Q2g-fgebZhT3cSm8-82.jpg" },
        { "name": "[第六章2·白枪呆]", "info": "sixth2", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/08/banner_100756825.png" },
        { "name": "[魔法少女·伊莉雅]", "info": "prisma", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/09/summon_20160921_c68fa.jpg" },
        { "name": "[职阶日替·术]", "info": "caster", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/09/banner_100806735.png" },
        { "name": "[尼禄祭再临·花嫁尼禄]", "info": "nero2", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/09/summon_20161010_w2rbia.jpg" },
        { "name": "[700wDL·黑贞]", "info": "700w", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/10/summon_20161012_nbu57.jpg" },
        { "name": "[万圣节复刻·玉藻前]", "info": "halloween1", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/10/summon_20161026_k32sp.jpg" },
        { "name": "[新万圣节·艳后]", "info": "halloween2", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/10/summon_20161102_rxa27.jpg" },
        { "name": "[Fate/EXTELLA]", "info": "extella", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/11/summon_20161109_xgytk.jpg" },
        { "name": "[圆桌骑士]", "info": "knights", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/11/banner_100932865.png" },
        { "name": "[圣诞节复刻·杰克]", "info": "xmas1", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/11/summon_20161122_we84k.jpg" },
        { "name": "[天草四郎]", "info": "shiro", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/11/banner_101014285.png" },
        { "name": "[新圣诞节·弓凛]", "info": "xmas2", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/11/summon_20161207_zdfwc.jpg" },
        { "name": "[阿蒂拉]", "info": "altila", "img": "http://fatemaster.net/wp-content/uploads/2016/11/summon_20161207_x5kp4-768x278.jpg" },
        { "name": "[第七章1·恩奇都]", "info": "seventh", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/12/summon_20161221_yurww1.jpg" },
        { "name": "[第七章2·羽蛇神]", "info": "seventh2", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/12/banner_101066923.png" },
        { "name": "[终章·梅林]", "info": "final", "img": "https://kazemai.github.io/fgo-vz/common/images/2016/12/summon_20161231_fmbfg.jpg" },
        { "name": "[新年·武藏]", "info": "newyear", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/01/banner_101139578.png" },
        { "name": "[王哈桑]", "info": "yama", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/01/summon_20170125_d4g9s.jpg" },
        { "name": "[月神复刻·俄里翁]", "info": "tsukimil", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/01/summon_20170201_i9bep.jpg" },
        { "name": "[监狱塔复刻·伯爵]", "info": "gankutsuou", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/01/summon_20170208_sjwsn.jpg" },
        { "name": "[800wDL·达芬奇]", "info": "800w", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/01/summon_20170208_ta7db.jpg" },
        { "name": "[情人节·BX]", "info": "valentine", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/02/banner_101217458.png" },
        { "name": "[新宿1·新宿Archer]", "info": "shinjuku", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/02/summon_20170308_gf83k.jpg" },
        { "name": "[新宿2·黑A]", "info": "shinjuku2", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/03/summon_20170308_ycsxa.jpg" },
        { "name": "[白情复刻·天草四郎]", "info": "white1", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/03/summon_20170322_jtu2w.jpg" },
        { "name": "[新白情·旧剑]", "info": "white2", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/03/banner_101275201.png" },
        { "name": "[本能寺复刻·冲田总司]", "info": "honnouji", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/03/summon_20170331_a93l2.jpg" },
        { "name": "[明治维新·土方岁三]", "info": "meiji", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/maiji_r7c6d/summon_20170419_fd7j8.jpg" },        
        { "name": "[CCC预热·CCC众]", "info": "ccc0", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/ccccampaign_7pv5wl/summon_20170503_83k3t.jpg" },
        { "name": "[CCC·Meltlilith]", "info": "ccc1", "img": "http://view.fate-go.jp/wp-content/uploads/2017/extraccc_full_d59ql/summon_banner.png" },
        { "name": "[CCC2·杀生院祈荒]", "info": "ccc2", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/extraccc2_swtzb/summon_banner.png" },
        { "name": "[900wDL·弓凛]", "info": "900w", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/900man_def5s/summon_banner.png" },
        { "name": "[雅戈泰1·不夜城的Caster]", "info": "agarta1", "img": "http://view.fate-go.jp/wp-content/uploads/2017/agarta_bp2kl/summon_banner.png" },
        { "name": "[雅戈泰2·德雷克]", "info": "agarta2", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/agarta2_xtuzw/summon_banner.png" },
        { "name": "[二周年·福尔摩斯]", "info": "2nd", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/2nd_pickup_36io0/top_banner.png" },
        { "name": "[新泳装1·尼禄]", "info": "2017summer1", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/2017summer_b0p2k/summon_banner.png" },
        { "name": "[新泳装2·黑王]", "info": "2017summer2", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/2017summer02_npl3q/summon_banner.png" },
        { "name": "[新泳装3·梅芙三藏]", "info": "2017summer3", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/2017summer03_e56jd/summon_banner.png" },
        { "name": "[尼禄祭2017·布姐]", "info": "nero3", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/nerosai3_x7dz5/summon_banner.png" },
        { "name": "[1000wDL·梅林]", "info": "1000w", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/1000man_mikwy/summon_banner.png" },
        { "name": "[Fate/HF·樱]", "info": "fatehf", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/qhf-wc_jg24ej/summon_banner.png" },
        { "name": "[下总国1·武藏]", "info": "7kengou", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/7kengou_full_n2we1/summon_banner.png" },
        { "name": "[下总国2·源赖光酒吞]", "info": "7kengou2", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/7kengou2_7wx21/summon_banner.png" },
        { "name": "[万圣节2017·刑部姬]", "info": "halloween3", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/halloween2017_full_ip57m/summon_banner.png" },
        { "name": "[FA·天草四郎]", "info": "apocrypha", "img": "https://kazemai.github.io/fgo-vz/common/images/2017/apocrypha_ca_jn8ix/summon_banner.png" },
        { "name": "[塞勒姆·喀耳刻哪吒]", "info": "salem", "img": "http://view.fate-go.jp/wp-content/uploads/2017/salem_full_py2eb/summon_banner.png" },
        { "name": "[塞勒姆2·阿比盖尔]", "info": "salem2", "img": "http://view.fate-go.jp/wp-content/uploads/2017/salem2_qwik5/top_banner.png" },
        { "name": "[圣诞2017·艾蕾]", "info": "xmas3", "img": "http://view.fate-go.jp/wp-content/uploads/2017/christmas2017_full_turjd/summon_banner.png" },
        { "name": "[新年·葛饰北斋]", "info": "newyear18", "img": "http://view.fate-go.jp/wp-content/uploads/2018/newyear2018_lwkdv/top_banner.png" },
        { "name": "[赝作复刻·黑贞]", "info": "re_counterfeit", "img": "http://view.fate-go.jp/wp-content/uploads/2018/re_counterfeit_jdri8/summon_banner.png" },
        { "name": "[百层塔·金时奶光酒吞]", "info": "setsubun", "img": "http://view.fate-go.jp/wp-content/uploads/2018/setsubun_gfrjd/summon_banner.png" },
        { "name": "[情人节2018·女帝]", "info": "valentine2018", "img": "https://fgowiki.com/wp-content/uploads/2018/01/top_banner-1-1.png" },
        { "name": "[空境复刻·两仪式]", "info": "garden", "img": "http://view.fate-go.jp/wp-content/uploads/2018/karanokyoukai_full_las1p/summon_banner.png" }
    ]
}

/*
for (i in myObj.sites) {
    x += "<a href=" + myObj.sites[i].info + ">" + myObj.sites[i].name + "</a>";

}
*/
for (i of myObj.sites) {
    x += "<a href=pool.html?" + i.info + ">" + i.name + "</a>";

}


document.getElementById("index").innerHTML = x;
 
