// ==UserScript==
// @name        无止境VIP解析，x浏览器，苹果Alook浏览器通用型。
// @namespace  无止境 - wuzhij.com
// @version      1.1
// @description  安卓X浏览器直接安装使用。苹果Alook浏览器使用此脚本方法:点击安装此脚本后可见完整代码，全选复制备用，之后进设置/自定义设置/JavaScript扩展/添加/被动扩展，名称随意填写，将匹配类型修改为_链接网址，匹配值_*，运行时间不动。最后将代码完整的粘贴到JavaScript代码框内，保存后生效。解析接口失效后请自行到其他脚本内提取替换更新，遇到页面无法启动脚本时请自行增减域名。更新代码时切记:字符均为半角，编码格式为utf-8 切记!!!
// @include *
// @author       无止境 - wuzhij.com
// ==/UserScript==

//正文开始
var o =
    '<span style="display:block;float:left;width:5vw;height:5vw;font-size:2.5vw;color:#fff;line-height:5vw;text-align:center;border-radius:100%;box-shadow:0px 0px 3px #a9a9a9;background:transparent;margin:3.78vw 2.1vw;">&#9660</span>'


//综合解析下面的链接就是接口，替换时注意不要将""删掉

var apis = [{
        name: o + "综合解析",
        url: "https://vip.parwix.com:4433/player/?url=",
        title: "综合接口"
    }, {
        name: o + "解析二",
        url: "https://okjx.cc/?url=",
        title: "综合接口"
    }, {
        name: o + "解析三",        
        url: "https://jxjx1920.jushiys.co/?url=",
        title: "综合接口"
    }, {
        name: o + "解析四",
        url: "https://www.1717yun.com/jiexi/?url=",
        title: "综合接口"
    }, {
        name: o + "解析五",
        url: "https://api.duzheba.cn/?url=",
        title: "综合接口"
    }, {
    }, {
        name: o + "解析六",
        url: "https://m2090.com/?url=",
        title: "综合接口"
    }, {
    }, {
        name: o + "解析七",
        url: "https://api.okjx.cc:3389/jx.php?url=",
        title: "综合接口"
    }, {
    }, {
        name: o + "解析八",
        url: "https://v.superchen.top:3389/index1.php?url=",
        title: "综合接口"
    }, {
    }, {
        name: o + "解析九",
        url: "https://jiexi.xmflv.com:4399/?time=1637066951&url=",
        title: "综合接口"
    }, {
    }, {
        name: o + "解析十",
        url: "https://m3u8.tv.8old.cn/jx.php?url=",
        title: "综合接口"
    }, {
       name: o + "备用一",
        url: "https://www.cuan.la/m3u8.php?url=",
        title: "备用"
    }, {
       name: o + "备用二",
        url: "https://www.kpezp.cn/jlexi.php?url=",
        title: "备用"
    }, {   
       name: o + "备用三",
        url: "https://api.jhdyw.vip/?url=",
        title: "备用"
    }, {
       name: o + "备用四",
        url: "https://17kyun.com/jx.php?url=",
        title: "备用"
    }, {          
       name: o + "备用五",
        url: "https://sw.sxdykj.top/ad9.php/?from=https://jx.m3u8.tv/jiexi/?url=",
        title: "备用"
    }, {         
       name: o + "备用六",
        url: "https://jx.yemu.xyz/tj.php?referer=",
        title: "备用"
    }, {               
    }, {          
       name: o + "备用七",
        url: "https://jx.renrenmi.cc/?url=",
        title: "备用"
    }, {               
    }];

//添加链接

function createSelect(apis) {
    var myul = document.createElement("ul");
    myul.id = "myul";
    myul.setAttribute("style",
        "display:none;background:#fff;box-shadow:0px 1px 10px rgba(0,0,0,0.3);margin:0;padding:0 4.2vw;position:fixed;bottom:17vh;right:6vw;z-index:99999;height:70vh;overflow:scroll;border-radius:1.26vw;");
    for (var i = 0; i < apis.length; i++) {
        var myli = document.createElement("li");
        var that = this;
        myli.setAttribute("style",
            "margin:0;padding:0;display:block;list-style:none;font-size:4.2vw;width:30.6vw;text-align:left;line-height:12.6vw;letter-spacing:0;border-bottom:1px solid #f0f0f0;position:relative;overflow:hidden;text-overflow:hidden;white-space:nowrap;");
        (function (num) {
            myli.onclick = function () {
                window.open(apis[num].url + location.href, '_blank');
            };
            myli.ontouchstart = function () {
                this.style.cssText += "color:yellow;background:#373737;border-radius:1.26vw;";
            }
            myli.ontouchend = function () {
                this.style.cssText += "color:black;background:transparent;border-radius:0;";
            }
        })(i);
        myli.innerHTML = apis[i].name;
        myul.appendChild(myli);
    }
    document.body.appendChild(myul);
}

//唤出菜单

function createMenu() {
    var myBtn = document.createElement("div");
    myBtn.id = "myBtn";
    myBtn.innerHTML = "&#9855";
    myBtn.setAttribute("style",
     "width:10vw;height:10vw;position:fixed;bottom:10vh;right:6vw;z-index:100000;border-radius:100%;text-align:center;line-height:10vw;box-shadow:0px 1px 10px rgba(0,0,0,0.3);font-size:6vw;background:#fff;");
    myBtn.onclick = function () {
        var myul = document.getElementById("myul");
        if (myul.style.display == "none") {
            myul.style.display = "block";
            this.style.transform = "rotateZ(45deg)";
        } else {
            myul.style.display = "none";
            this.style.transform = "rotateZ(0deg)";
        }
    }
    document.body.appendChild(myBtn);
}
/*document.addEventListener("DOMContentLoaded",function () {
	createMenu();
	createSelect(apis);
});*/
//解析域名，填减时注意格式
if (location.href.match(".iqiyi.com") || location.href.match(".youku.com") || location.href.match(".le.com") ||
    location.href.match(".letv.com") || location.href.match("v.qq.com") || location.href.match("film.qq.com") || location.href.match(".tudou.com") ||
    location.href.match(".mgtv.com") || location.href.match("film.sohu.com") || location.href.match("tv.sohu.com") ||
    location.href.match(".acfun.cn") || location.href.match(".bilibili.com") || location.href.match(".pptv.com") ||
    location.href.match("vip.1905.com") || location.href.match(".yinyuetai.com") || location.href.match(".fun.tv") ||
    location.href.match("twitter.com") || location.href.match("facebook.com") || location.href.match("instagram.com") ||
    location.href.match(".56.com") || location.href.match("youtube.com") || location.href.match(".wasu.cn")) {
    createMenu();
    createSelect(apis);
}