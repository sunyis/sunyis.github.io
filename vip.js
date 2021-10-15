// ==UserScript==
// @name              视频助手：哔哩哔哩解锁大会员、B站视频解析下载；A站视频解析下载；爱奇艺、腾讯、优酷、芒果等全网VIP视频免费看破解去广告(免跳直接看)；Youtube、Facebook等视频解析下载
// @namespace         super_video_helper_cat
// @version           3.0.2
// @description       B站番剧解锁、视频解析下载；A站视频解析下载；爱奇艺、腾讯、优酷等全网VIP视频免费、破解去广告(免跳出观影特方便，支持【PC端+移动端，可自定义接口】)；支持高清普清电视频道观看(CCTV、湖南卫视等100多个台)；Youtube油管、Facebook视频解析下载【👊👊脚本长期维护更新，完全免费，无广告，大家可放心使用！！】
// @author            wuzhij
// @icon              data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACS0lEQVRYR8WXz2oTURTGv3MnpqhNKy1UWmxRTGdaiLSQRKkKIoK4FVrRPoHu7BMYn0B3+gQquuiuiC6kaFVsAhGEZkKqG/+Vrtp0YWsyR27KlEwz0xnnT3LgwjB37vl+97tzz9whdDiow/pwBCjofN0AJohwKQgkMxYF8Dmt0bxdnhaAQoWTXMczENJBhFvGMgqk4GY6SZXmPgvAmy/cnYijGqrwvmTVHSQup2jLvG0ByJf5EYDbUQIAeJxR6U4LQHGV1VodesTijfQxBdrkaSrL6z0Hlst8i4An7QBgYDar0lMrgM45ItxrCwDjflajnC+AtR8Gvn8zGpz9xwVOjor/Zma/ANt/GIsLNWxt8p7o4IiAmlLQP+C9pvkG+FoyUPxYs52xhFDPKIh3uRviG2ClWIdsTpHoJYymFNdliQzABBsaEZg4p+DwUftliRxAggwOC0xdidma1RaAI92Ea9OHOgcwPqlANruI1AElhsa2dBKXQJEBnDglGlvxWN/BNcE3gKyCS69b64AUlMISwEv4BpDJ3778i/Xfu5XQtFtaLq+9RiCA6gZj/dcuQN8Audod6kvodYZuz9k7UOK7JPDAbXAY/WxgLjtGDy2f408VPi8MLIUh4JbDELhwNknvLQDyQNoTh87AkFuCIP0E/NzcgWYeTC0bdrkNp6Lm9bc4YM4qr/NzEGaCzNJxLONFRqMbzf22JSu/wlcphhwzpsIAIcIHriGXGadX+/MdWDPflTjRxcH+kLYJhYtj5Piz4/0gF4YVNjk6DvAPDb0aMEr8/nEAAAAASUVORK5CYII=
//---------------------------------------------------
// @include           *://xbeibeix.com/api/bilibili/biliplayer/*
// @include           *://xbeibeix.com/api/bilibili/*
//---------------------------------------------------
// @include           *://*.youku.com/v_*
// @include           *://*.iqiyi.com/v_*
// @include           *://*.iqiyi.com/w_*
// @include           *://*.iqiyi.com/a_*
// @include           *://*.le.com/ptv/vplay/*
// @include           *://v.qq.com/x/cover/*
// @include           *://v.qq.com/x/page/*
// @include           *://*.tudou.com/listplay/*
// @include           *://*.tudou.com/albumplay/*
// @include           *://*.tudou.com/programs/view/*
// @include           *://*.mgtv.com/b/*
// @include           *://film.sohu.com/album/*
// @include           *://tv.sohu.com/v/*
// @include           *://*.acfun.cn/v/*
// @include           *://*.bilibili.com/video/*
// @include           *://*.bilibili.com/anime/*
// @include           *://*.bilibili.com/bangumi/play/*
// @include           *://*.baofeng.com/play/*
// @include           *://vip.pptv.com/show/*
// @include           *://v.pptv.com/show/*
// @include           *://www.le.com/ptv/vplay/*
// @include           *://vip.1905.com/play/*
// @include           *://www.wasu.cn/Play/show/*
// @include           *://www.acfun.cn/v/*
// @match        *://*.miguvideo.com/wap/resource/pc/detail/*
// @match        *://*.miguvideo.com/mgs/website/prd/detail*
//---------------------------------------------------
// @include           *://m.v.qq.com/x/cover/*
// @include           *://m.v.qq.com/x/page/*
// @include           *://m.v.qq.com/*
// @include           *://m.iqiyi.com/*
// @include           *://m.iqiyi.com/kszt/*
// @include           *://m.youku.com/alipay_video/*
// @include           *://m.mgtv.com/b/*
// @include           *://m.tv.sohu.com/v/*
// @include           *://m.film.sohu.com/album/*
// @include           *://m.le.com/ptv/vplay/*
// @include           *://m.pptv.com/show/*
// @include           *://m.acfun.cn/v/*
// @include           *://m.bilibili.com/video/*
// @include           *://m.bilibili.com/anime/*
// @include           *://m.bilibili.com/bangumi/play/*
// @include           *://m.wasu.cn/Play/show/*
//---------------------------------------------------
// @include           *://www.youtube.com/watch*
// @include           *://www.facebook.com/*
// @include           *://zh.savefrom.net/7/*
// @require           https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @license           GPL License
// @grant             unsafeWindow
// @grant             GM_openInTab
// @grant             GM.openInTab
// @grant             GM_getValue
// @grant             GM.getValue
// @grant             GM_setValue
// @grant             GM.setValue
// @grant             GM_xmlhttpRequest
// @grant             GM.xmlHttpRequest
// @grant             GM_registerMenuCommand
// @charset		      UTF-8
// ==/UserScript==

(function () {
	'use strict';
	var $ = $ || window.$;
	
	//如果本地值不能满足需求，可自定义添加接口到此处
	//注意数据格式
	//category=1:全网VIP解析内嵌页播放
	//category=2:全网VIP解析新建页面播放
	var customizeInterfaceList=[
		//{ name:"就是名字而已", category:"2", url:"https://jx.idc126.net/jx/?url="},
		//{ name:"就是名字而已", category:"3", url:"https://jx.idc126.net/jx/?url="},
	];
	//默认值，当网络请求出现错误时使用此值
	var originalInterfaceList = [
		{"name":"纯净解析","category":"1","url":"https://z1.m1907.cn/?jx="},
		{"name":"江湖云","category":"1","url":"https://api.jhdyw.vip/?url="},	
		{"name":"4Z","category":"1","url":"https://jf.4z.cm/jx/?url="},
		{"name":"kangjia","category":"1","url":"http://kuangjia.linankj.com/cs.php?url="},	
		{"name":"sujx","category":"1","url":"https://ssvip.sujx.top/?url="},
		{"name":"安逸","category":"1","url":"http://ayyjx.jushiys.co/player/ckplayer.php?url="},			
		{"name":"猫猫","category":"1","url":"https://xj.greedycat.cn/?url="},                         
		{"name":"宝具","category":"1","url":"http://meng.baoju.vip:2233/?url="},                         
		{"name":"MW0","category":"1","url":"https://jx.mw0.cc/?url="},	
		{"name":"云鸽","category":"1","url":"http://vip.yugenye.site/user/video/?url="},	
		{"name":"安逸云","category":"1","url":"http://ayy.jushiys.co/user/video/?url="},					
		{"name":"人人迷","category":"1","url":"https://vip.renrenmi.cc:5566/user/video/?url="},					
		{"name":"蓝猫","category":"1","url":"https://bcat.vip/user/video/?url="},	
		{"name":"浅月2","category":"1","url":"http://qianyue.renrenmi.net:2025/feiyang/?url="},	
		{"name":"人人","category":"1","url":"https://jx.renrenmi.cc/?url="},	
		{"name":"思古追剧","category":"1","url":"https://1.591zhuiju.com/?url="},		
		{"name":"猪蹄","category":"1","url":"https://jx.iztyy.com/svip/?url="},
		{"name":"优酷2","category":"1","url":"https://www.nxflv.com/?url="},
		{"name":"B站解析1","category":"1","url":"https://vip.parwix.com:4433/player/?url="},
		{"name":"B站解析2","category":"1","url":"https://www.cuan.la/m3u8.php?url="},	
		{"name":"B站解析3","category":"1","url":"https://vip.parwix.com:4433/player/analysis.php?v="},				
		{"name":"星驰","category":"1","url":"https://vip.swuii.top/?url="},
		{"name":"星驰2","category":"1","url":"https://vip.cjys.top/?url="},
		{"name":"月亮","category":"1","url":"https://api.yueliangjx.com/?url="},
		{"name":"全民","category":"1","url":"http://jx.quanmingjiexi.com/?url="},
		{"name":"云网","category":"1","url":"https://www.41478.net/?url="},
		{"name":"52ifx","category":"1","url":"https://v.52ifx.com/?url="},
		{"name":"大慕","category":"1","url":"http://jx.52damu.com/?url="},
		{"name":"小蒋","category":"1","url":"https://www.kpezp.cn/jlexi.php?url="},
		{"name":"小狼云","category":"1","url":"https://jx.xiaolangyun.com/?url="},
		{"name":"efuns","category":"1","url":"https://client.efuns.vip/?url="},
		{"name":"Ckplayer","category":"1","url":"https://www.ckplayer.vip/jiexi/?url="},
		{"name":"BL","category":"1","url":"https://vip.bljiex.com/?v="},
		{"name":"4080","category":"1","url":"https://jx.70808.net/?url="},
		{"name":"ok解析","category":"1","url":"http://okjx.cc/?url="},
		{"name":"奇米","category":"1","url":"https://qimihe.com/?url="},	
		{"name":"M3U8","category":"1","url":"https://jx.m3u8.tv/jiexi/?url="},
		{"name":"bl解析","category":"1","url":"https://jx.ivito.cn/?url="},
		{"name":"爱奇","category":"1","url":"https://jsap.ahfuqi.net/?url="},
		{"name":"ckmov解析","category":"1","url":"https://www.ckmov.vip/api.php?url="},
		{"name":"hk解析","category":"1","url":"http://jx.rdhk.net/?v="},

		{"name":"纯净解析","category":"2","url":"https://z1.m1907.cn/?jx="},
		{"name":"江湖云","category":"2","url":"https://api.jhdyw.vip/?url="},	
		{"name":"4Z","category":"2","url":"https://jf.4z.cm/jx/?url="},	
		{"name":"MW0","category":"2","url":"https://jx.mw0.cc/?url="},	
		{"name":"sujx","category":"2","url":"https://ssvip.sujx.top/?url="},
		{"name":"安逸","category":"2","url":"http://ayyjx.jushiys.co/player/ckplayer.php?url="},					
		{"name":"猫猫","category":"2","url":"https://xj.greedycat.cn/?url="},                         
		{"name":"宝具","category":"2","url":"http://meng.baoju.vip:2233/?url="},                         		
		{"name":"蓝猫","category":"2","url":"https://bcat.vip/user/video/?url="},		
		{"name":"云鸽","category":"2","url":"http://vip.yugenye.site/user/video/?url="},	
		{"name":"安逸云","category":"2","url":"http://ayy.jushiys.co/user/video/?url="},							
		{"name":"人人迷","category":"2","url":"https://vip.renrenmi.cc:5566/user/video/?url="},					
		{"name":"kangjia","category":"2","url":"http://kuangjia.linankj.com/cs.php?url="},		
		{"name":"浅月","category":"2","url":"http://qianyue.renrenmi.net:2025/yunhui/?url="},	
		{"name":"浅月2","category":"2","url":"http://qianyue.renrenmi.net:2025/feiyang/?url="},	
		{"name":"人人","category":"2","url":"https://jx.renrenmi.cc/?url="},		
		{"name":"千寻科技","category":"2","url":"http://xj.pk98.cn/?url="},	
		{"name":"千寻时光","category":"2","url":"http://jx.jinyuen.com.cn/?url="},	
		{"name":"aidouer","category":"2","url":"http://jx.aidouer.net/?url="},	
		{"name":"久播奇艺","category":"2","url":"https://jx.jiubojx.com:443/vip/?url="},		
		{"name":"迪奥","category":"2","url":"http://123.1dior.cn/?url="},	
		{"name":"思古追剧","category":"2","url":"https://1.591zhuiju.com/?url="},	
		{"name":"猪蹄","category":"2","url":"https://jx.iztyy.com/svip/?url="},
		{"name":"鲨鱼","category":"2","url":"https://www.mgtv.com.favnow.com:443/?token=sharktv&v="},
    	{"name":"星驰","category":"2","url":"https://vip.swuii.top/?url="},
		{"name":"星驰2","category":"2","url":"https://vip.cjys.top/?url="},
		{"name":"月亮","category":"2","url":"https://api.yueliangjx.com/?url="},
		{"name":"全民","category":"2","url":"http://jx.quanmingjiexi.com/?url="},
		{"name":"优酷2","category":"2","url":"https://www.nxflv.com/?url="},
		{"name":"云网","category":"2","url":"https://www.41478.net/?url="},
		{"name":"52ifx","category":"2","url":"https://v.52ifx.com/?url="},
		{"name":"B站解析1","category":"2","url":"https://vip.parwix.com:4433/player/?url="},
		{"name":"B站解析2","category":"2","url":"https://www.cuan.la/m3u8.php?url="},
		{"name":"B站解析3","category":"2","url":"https://vip.parwix.com:4433/player/analysis.php?v="},				
		{"name":"大慕","category":"2","url":"http://jx.52damu.com/?url="},
		{"name":"小蒋","category":"2","url":"https://www.kpezp.cn/jlexi.php?url="},
		{"name":"小狼云","category":"2","url":"https://jx.xiaolangyun.com/?url="},
		{"name":"efuns","category":"2","url":"https://client.efuns.vip/?url="},
		{"name":"Ckplayer","category":"2","url":"https://www.ckplayer.vip/jiexi/?url="},
		{"name":"BL","category":"2","url":"https://vip.bljiex.com/?v="},
		{"name":"4080","category":"2","url":"https://jx.70808.net/?url="},
		{"name":"ok解析","category":"2","url":"http://okjx.cc/?url="},
		{"name":"奇米","category":"2","url":"https://qimihe.com/?url="},	
		{"name":"M3U8","category":"2","url":"https://jx.m3u8.tv/jiexi/?url="},
		{"name":"bl解析","category":"2","url":"https://jx.ivito.cn/?url="},
		{"name":"爱奇","category":"2","url":"https://jsap.ahfuqi.net/?url="},
		{"name":"ckmov解析","category":"2","url":"https://www.ckmov.vip/api.php?url="},
		{"name":"hk解析","category":"2","url":"http://jx.rdhk.net/?v="},
		
	];
	var playerNodes = [
		{ url:"v.qq.com", node:"#mod_player"},
		{ url:"www.iqiyi.com", node:"#flashbox"},
		{ url:"v.youku.com", node:"#player"},
		{ url:"w.mgtv.com", node:"#mgtv-player-wrap"},
		{ url:"www.mgtv.com", node:"#mgtv-player-wrap"},
		{ url:"www.miguvideo.com", node:"#miguvideo-player-wrap"},
		{ url:"tv.sohu.com", node:"#player"},
		{ url:"film.sohu.com", node:"#playerWrap"},
		{ url:"www.le.com", node:"#le_playbox"},
		{ url:"video.tudou.com", node:".td-playbox"},
		{ url:"v.pptv.com", node:"#pptv_playpage_box"},
		{ url:"vip.pptv.com", node:".w-video"},
		{ url:"www.wasu.cn", node:"#flashContent"},
		{ url:"www.acfun.cn", node:"#player"},
		{ url:"www.bilibili.com", node:"#player_module"},
		{ url:"vip.1905.com", node:"#player"},
		{ url:"miguvideo.com", node:"#player"},
	];
	var newOriginalInterfaceList = originalInterfaceList;
	try{
		newOriginalInterfaceList = customizeInterfaceList.concat(originalInterfaceList);
	}catch(e){}
	(new superVideoHelper(newOriginalInterfaceList, playerNodes)).start();
	
	/**
	 * 超级解析助手
	 * @param {Object} originalInterfaceList
	 * @param {Object} playerNodes
	 */
	function superVideoHelper(originalInterfaceList, playerNodes){
		this.originalInterfaceList = originalInterfaceList;
		this.node = "";
		for(var i in playerNodes) { //获得窗口ID
			if (playerNodes[i].url == window.location.host) {
				this.node = playerNodes[i].node;
				break;
			}
		}
		this.GMgetValue = function (name, value) { //得到存在本地的脚本
			if (typeof GM_getValue === "function") {
				return GM_getValue(name, value);
			} else {
				return GM.getValue(name, value);
			}
		};
		this.GMaddStyle = function(css){ //插入css
			var myStyle = document.createElement('style');
			myStyle.textContent = css;
			var doc = document.head || document.documentElement;
			doc.appendChild(myStyle);
		};
		this.GMopenInTab = function(url, open_in_background){ //新标签页打开网址
			if (typeof GM_openInTab === "function") {
				GM_openInTab(url, open_in_background);
			} else {
				GM.openInTab(url, open_in_background);
			}
		}
		this.addScript = function(url){  //添加脚本
			var s = document.createElement('script');
			s.setAttribute('src',url);
			document.body.appendChild(s);
		};
		this.innerParse = function(url) { //内嵌解析
			$("#iframe-player").attr("src", url);
		};
		this.addHtmlElements = function(){
			var vipVideoImageBase64 =`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAC9klEQVRoQ+2ZPWgVQRDH/7/CWqOIYOFHFbRSjJhGMGDpByoIago70cqvUtQgdipWFqawMWghGIidhcHKQAJqEURBRfED1CCCjc3IPu4em31775J7d3m8cAtX3O7szP7nPzszx6EeH/T4+VUD6DaDTQbMbE+3D7MY+8Ckkw8BPFuMki7KDtUAuuh9Z3oZMtBljxY2X9eBwq4raWPNQEmOLKxm+TBgZqsknQ1dAVzNco+ZhWsm6ZakHZLC1mQyrZ5OX2RvzMxnSa8lzQJ/YwLzGDCze5JOeoI/gbVtAMxJ6vPW7wKnkr4qbEuaxccDcGWBsfNV0mjMmSGAg5LGA6XbgFehITPbLel5MN84ZAUAUjMPgWO+zZY7YGbvJW0OvRoB8EjSEW9+BhhIvOvCp0wGfPPbgZfpRAzATUnn56GEmJyLd39cBNxeF99FADTa42BskuQef4wDh9oB2CXpRbDpMPA4nTOz05LuBDLrgW+dAACGIkxfkHTDm/8DrMwEkBxgOskkqdwEcMAD4GLf3YF0PACOe+uFGMgA4Bj4EAAbAGbcXLQOmNklSdeCTRuBT2bWL+lNsLYfeFIRgH2SJgJ7GwCXYjMBrJb0K9jUiHEzG5F02VubA9b4skXvQMiAmW2VdFSSn24/As0kk1mJzeyppL3ewaaBnWY2K2mLNz8S5ueCAMLwz3q/DZxreweSe3BC0v1Ai7tkYXrsB96WwMBCAfQBv3MBJCD+SVrhaXaZ54z3PgUMhpYrZKCF7bbNnJk5BhwT6fghyW8thoGxigE4my6tXwemQlt5AGI1oamDSIFLmCuURiW5BOGPL8C7drGV206b2XdJ6yJKxoDhmPKCIeS61ZZClncxFgLAtcyxrnEwRmknDFQFIFYTWnJ/CVmoGgYSj7Z81OR86Lg7sOgPmnY6s0IpN4TyYrDb6zWAmoEOPVCHUIcO7Hh7/YemYxcWU7AMf3BkNGDF/FP9rkwGqjddkoWWv5Ql6V1yNXUdWHKXBwZ7noH/dP+HQNqheToAAAAASUVORK5CYII=`;
			var tvImageBase64=`data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACvUlEQVRoQ+2ZPYwNURTHf/9Gp/ARCpFYoVDZRCMqGgrRKCgoyCZE46MgaNiCRLIhu4WPDaIgkWwhEZHQ0IqPIFGI+AgJsQ0FKnHkbs5s5o2Z9+atmX33JXOb9+Z+nPv/n/+9Z+65I/q8qM/x0xDotYKNAlEpYGa7gC3A/F4DK5j/C3Bb0s2kfXoJmdky4H2kwLOwBiR9CJVpAieBE31CYFhSwNuWwMPIyKxP4SlFYIOkKEiYWQD/oCHQqyXVKJD2vJldB5aUUCOEubuSJswsRIzPksbzxpnZOmAjcEHS12yfyhRwIN2E2mHgI3DFQW2SdD/jkEXAM3fKdHTJ9KluE5vZCLAm46UkxKWjVlAgEFgIPPb+NyTtzIA7Bpz2uiFJV2tToED+EN6mCEjKPRyaWXj1b/fxqyW9DP/NbC7wHFgOTEpaXDBHdQrkeKcMgc3AHR87KumgEwi/57z+qKQzURJwsAnRb8AA8BMISqwCvgMLJP2JmcAQcNkBHgF+AOf9eUTS4aLIVlkUmukecAXm+HoPHn/jCgwCv4IikiajJuAkjgOnMkDHJB1o916JQgEnsBR4AcxzwL+BQUmv+oKAkxgF9jvgi5L2tQPvY2oNo0kidE3S7hJgVgBjvolD6HxXYkx9BBIP1Zk71LoHOnmvivaGQBVe/B8bM1UgnCRjKuljfKmkPibwWSy5BEJGdC9m1ClsayU9Cs8t53dPF3dETuKWpK0Jxn8SEDML+e7KCki03OMAVdwxfZL0No2tluv1dlGjAse0mGgI5Hk0OgX86j0cqMIVfC7mnMqp22Mv3b5TngBPJYXvAW1LqSVkZpeAPZ2MVdw+IWlbJ5tlCVgnQ3W0F13TdB2FzOwscKgOkG1sjkva22nOUgoEI74PivZAp3m6bX9dZv0Ho6UJdItgtvo3BGbL00XzNAr0WoG/02m4QKQE53EAAAAASUVORK5CYII=`;
			var category_1_html = "";
			var category_2_html = "";
			this.originalInterfaceList.forEach((item, index) => {
				if (item.category === "1") {
					category_1_html += "<li title='"+item.name+"' data-index='"+index+"'>" + item.name + "</li>";
				}
				if (item.category === "2") {
					category_2_html += "<li title='"+item.name+"' data-index='"+index+"'>" + item.name + "</li>";
				}
			});	
			
			//获得自定义位置
			var left = 0;
			var top = 100;
			var Position = this.GMgetValue("Position_" + window.location.host);
			if(!!Position){
				left = Position.left;
				top = Position.top;
			}
			
			var cssMould = `#vip_movie_box {cursor:pointer; position:fixed; top:` + top + `px; left:` + left + `px; width:0px; z-index:2147483647; font-size:16px; text-align:left;}
							#vip_movie_box .item_text {}
							#vip_movie_box .item_text .img_box{width:35px; height:35px;line-height:35px;text-align:center;background-color:#E5212E;border-radius:50%;}
							#vip_movie_box .item_text .img_box >img {width:20px; display:inline-block; vertical-align:middle;}
							#vip_movie_box .vip_mod_box_action {display:none; position:absolute; left:28px; top:0; text-align:center; background-color:#272930; border:1px solid gray;}
							#vip_movie_box .vip_mod_box_action li{border-radius:2px; font-size:12px; color:#DCDCDC; text-align:center; width:60px; line-height:21px; float:left; border:1px solid gray; padding:0 4px; margin:4px 2px;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;-o-text-overflow:ellipsis;}
							#vip_movie_box .vip_mod_box_action li:hover{color:#E5212E; border:1px solid #E5212E;}
							
							#vip_movie_box .selected_text {margin-top:10px;}
							#vip_movie_box .selected_text .img_box{width:35px; height:35px;line-height:35px;text-align:center;background-color:#E5212E;border-radius:50%;}
							#vip_movie_box .selected_text .img_box >img {width:20px; height:20px;display:inline-block; vertical-align:middle;}
							#vip_movie_box .vip_mod_box_selected {display:none;position:absolute; left:28px; top:0; text-align:center; background-color:#F5F6CE; border:1px solid gray;}
							#vip_movie_box .vip_mod_box_selected ul{overflow-y: auto;}
							#vip_movie_box .vip_mod_box_selected li{border-radius:2px; font-size:12px; color:#00FF00; text-align:center; width:95px; line-height:27px; float:left; border:1px dashed gray; padding:0 4px; margin:4px 2px;display:block;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
							#vip_movie_box .vip_mod_box_selected li:hover{color:#E5212E; border:1px solid #E5212E;}
							
							#vip_movie_box .default-scrollbar-55678::-webkit-scrollbar{width:5px; height:1px;}
							#vip_movie_box .default-scrollbar-55678::-webkit-scrollbar-thumb{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#535353;}
							#vip_movie_box .default-scrollbar-55678::-webkit-scrollbar-track{box-shadow:inset 0 0 5px rgba(0, 0, 0, 0.2); background:#ededed;}
							`
			this.GMaddStyle(cssMould);
			
			var htmlMould = `<div id='vip_movie_box'>
								<div class='item_text'>
									<div class="img_box"><img src='`+ vipVideoImageBase64 +`' title='视频解析'/></div>
										<div class='vip_mod_box_action' >
											<div style='display:flex;'>
												<div style='padding:10px 0px; width:400px; max-height:400px; overflow-y:auto;'  class="default-scrollbar-55678">
													<div>
														<div style='font-size:16px; text-align:center; color:#E5212E; padding:5px 0px;'><b>全网VIP视频解析[内嵌播放]</b></div>
														<ul>
															` + category_1_html + `
															<div style='clear:both;'></div>
														</ul>
													</div>
													<div>													
														<div style='font-size:16px; text-align:center; color:#E5212E; padding:5px 0px;'><b>全网VIP视频解析[弹窗播放]</b></div>
														<ul>
														` + category_2_html + `
														<div style='clear:both;'></div>
														</ul>
													</div>
												</div>
											<div>
										</div>
									</div>
								</div>	
							</div>
							<!-- 电视剧开始 -->
							<div class='selected_text'>
								<div class="img_box"><img src='`+ tvImageBase64 +`' title='高清电视'/></div>
								<div class='vip_mod_box_selected' >
									<div style='display:flex;'>
										<div style='padding:10px 0px; width:680px; height:400px; overflow-y: auto;' class="default-scrollbar-55678">
											<div>
												<div style='font-size:16px; text-align:center; color:#088A08; padding:5px 0px;'>高清电视测试节点[建议网速流畅观看]</div>
												<ul>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225618/index.m3u8">CCTV-1综合</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225619/index.m3u8">CCTV-2财经</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225647/index.m3u8">CCTV-3综艺</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225621/index.m3u8">CCTV-4国际</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225633/index.m3u8">CCTV-5高清</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225650/index.m3u8">CCTV-6电影</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225624/index.m3u8">CCTV-7军事</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225635/index.m3u8">CCTV-8电视剧</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225626/index.m3u8">CCTV-9纪录</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225627/index.m3u8">CCTV-10科教</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225628/index.m3u8">CCTV-11戏曲</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225629/index.m3u8">CCTV-12社会</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225638/index.m3u8">CCTV-13新闻</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225639/index.m3u8">CCTV-14少儿</a></li>																							<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225641/index.m3u8">CCTV-15高清</a></li>												
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225641/index.m3u8">CCTV-15音乐</a></li>
													<li><a target="_blank" href="http://39.134.115.163:8080/PLTV/88888910/224/3221225908/index.m3u8">CCTV-17高清</a></li>													
   												    <li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225728/index.m3u8">北京卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225610/index.m3u8">湖南卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225612/index.m3u8">浙江卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225613/index.m3u8">江苏卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225735/index.m3u8">东方卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225727/index.m3u8">安徽卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225658/index.m3u8">黑龙江卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225619/index.m3u8">辽宁卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225739/index.m3u8">深圳卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225736/index.m3u8">广东卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225740/index.m3u8">天津卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225705/index.m3u8">湖北卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225737/index.m3u8">山东卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225618/index.m3u8">重庆卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225628/index.m3u8">青海卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225634/index.m3u8">内蒙古卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225635/index.m3u8">新疆卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225638/index.m3u8">西藏卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225659/index.m3u8">安多卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225660/index.m3u8">康巴卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225632/index.m3u8">宁夏卫视高清</a></li>
										     		<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225633/index.m3u8">甘肃卫视高清</a></li>												
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225621/index.m3u8">四川卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225623/index.m3u8">河北卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225615/index.m3u8">江西卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225624/index.m3u8">山西卫视高清</a></li>	
											    	<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225625/index.m3u8">陕西卫视高清</a></li>
										    		<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225636/index.m3u8">云南卫视高清</a></li>			
													<li><a target="_blank" href="http://223.110.245.157/ott.js.chinamobile.com/PLTV/3/224/3221225815/index.m3u8">河南卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225620/index.m3u8">东南卫视高清</a></li>	
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225622/index.m3u8">广西卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225637/index.m3u8">吉林卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225639/index.m3u8">海南卫视高清</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225626/index.m3u8">贵州卫视高清</a></li>
												</ul>
											</div>
											<div style="margin-top:15px;">
												<div style='font-size:16px; text-align:center; color:#088A08; padding:5px 0px;'>其它电视节点</div>
												<ul>
													<li><a target="_blank" href="http://112.132.209.46/liveplay-kk.rtxapp.com/live/program/live/dmxchd/4000000/mnf.m3u8">动漫秀场</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225653/index.m3u8">金鹰卡通</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225654/index.m3u8">KAKU少儿</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225656/index.m3u8">优漫卡通</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225662/index.m3u8">黑莓动画</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225667/index.m3u8">黑莓电影</a></li>												
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225664/index.m3u8">电视剧</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225663/index.m3u8">Newtv古装</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225661/index.m3u8">Newtv动作</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225665/index.m3u8">Newtv惊悚</a></li>
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225668/index.m3u8">Newtv军事</a></li>		
													<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225683/index.m3u8">Newtv农业</a></li>											
                                                	<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225673/index.m3u8">Newtv健康</a></li>	
                                                	<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225719/index.m3u8">Newtv炫舞</a></li>																																																															
                                                	<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225742/index.m3u8">Newtv欢乐剧场</a></li>											                                                											
                                                	<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225717/index.m3u8">超级电影</a></li>											
                                                	<li><a target="_blank" href="http://ottrrs.hl.chinamobile.com/PLTV/88888888/224/3221225716/index.m3u8">超级电视剧</a></li>											
													<li><a target="_blank" href="http://112.132.209.46/liveplay-kk.rtxapp.com/live/program/live/jbtyhd/4000000/mnf.m3u8">劲爆体育</a></li>
													<li><a target="_blank" href="http://112.132.209.46/liveplay-kk.rtxapp.com/live/program/live/mlyyhd/4000000/mnf.m3u8">魅力足球</a></li>
													<li><a target="_blank" href="http://112.132.209.46/liveplay-kk.rtxapp.com/live/program/live/hxjchd/4000000/mnf.m3u8">欢笑剧场</a></li>
													<li><a target="_blank" href="http://112.132.209.46/liveplay-kk.rtxapp.com/live/program/live/fztd/1300000/mnf.m3u8">法治天地</a></li>
													<li><a target="_blank" href="http://112.132.209.46/liveplay-kk.rtxapp.com/live/program/live/qcxj/1300000/mnf.m3u8">七彩戏剧</a></li>
													<li><a target="_blank" href="http://112.132.209.46/liveplay-kk.rtxapp.com/live/program/live/jingsepd/1300000/mnf.m3u8">金色频道</a></li>
													<li><a target="_blank" href="http://112.132.209.46/liveplay-kk.rtxapp.com/live/program/live/dfcj/1300000/mnf.m3u8">东方财经</a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>`
			$("body").append(htmlMould);
		};
		this.mouseEvent = function(){
			$(".item_text").on("mouseover", () => {
				$(".vip_mod_box_action").show();
			});
			$(".item_text").on("mouseout", () => {
				$(".vip_mod_box_action").hide();
			});
			$(".selected_text").on("mouseover", () => {
				$(".vip_mod_box_selected").show();
			});
			$(".selected_text").on("mouseout", () => {
				$(".vip_mod_box_selected").hide();
			});
			$(".vip_mod_box_action li").each((liIndex, item) => {
				item.addEventListener("click", () => {
					var videoPlayer = $("<div id='iframe-play-div' style='width:100%;height:100%;z-index:1000;'><iframe id='iframe-player' frameborder='0' allowfullscreen='true' width='100%' height='100%'></iframe></div>");
					var index = parseInt($(item).attr("data-index"));
					var category = this.originalInterfaceList[index].category;
					var url = this.originalInterfaceList[index].url + window.location.href;
					if (category==="1") { //内嵌播放....
						if (document.getElementById("iframe-player") == null) {
							var player = $(this.node);
							player.empty();
							player.append(videoPlayer);
						}
						this.innerParse(url);  //把播放链接加入到自定义的div
					}
					if (category==="2"){  //弹窗播放....
						this.GMopenInTab(url, false);
					}
				});
			});
			
			//右键移动位置
			var movie_box = $("#vip_movie_box");
			movie_box.mousedown(function(e) {
				if (e.which == 3) {
					e.preventDefault()
					movie_box.css("cursor", "move");
					var positionDiv = $(this).offset();
					var distenceX = e.pageX - positionDiv.left;
					var distenceY = e.pageY - positionDiv.top;
					
					$(document).mousemove(function(e) {
						var x = e.pageX - distenceX;
						var y = e.pageY - distenceY;
						if (x < 0) {
							x = 0;
						} else if (x > $(document).width() - movie_box.outerWidth(true)) {
							x = $(document).width() - movie_box.outerWidth(true);
						}
						if (y < 0) {
							y = 0;
						} else if (y > $(document).height() - movie_box.outerHeight(true)) {
							y = $(document).height() - movie_box.outerHeight(true);
						}
					
						movie_box.css("left", x);
						movie_box.css("top", y);
						GMsetValue("Position_" + window.location.host,{ "left":x, "top":y});
					});
					$(document).mouseup(function() {
						$(document).off('mousemove');
						movie_box.css("cursor", "pointer");
					});
					$(document).contextmenu(function(e) {
						e.preventDefault();
					})
				}
			});
		};
		
		this.operatBilibili = function(){
			setTimeout(function(){
				$("#loading").remove();
				$("#playerWrap").after('<div id="go" style="display:inline-block;cursor:pointer;padding:5px 10px;border-radius:3px;margin-top:15px;color:#FFF;background-color:#F45A8D;">点击下载视频</div>');
				$("#go").click(function(){
					var patt1=new RegExp("(BV|av)[a-zA-Z0-9]*");
					var bvid=patt1.exec(window.location.href);
					var tempwindow=window.open("_blank");
					tempwindow.location="https://xbeibeix.com/api/bilibili/?monkey="+bvid[0]
				})
			},3000);
		};
		
		this.operatAcfun = function(){
			var ele,content='', h1, videolist;
			try{
				h1 = $('h1.title');
				videolist = JSON.parse(videoInfo.currentVideoInfo.ksPlayJson).adaptationSet[0].representation;
				if(videolist.length>0 && $('div#downloadlist').length==0){
					for(var i=0;i<videolist.length;i++){
						content = content + `<div style="margin:5px 0px;"><div style="display:inline-block;font-weight:bold;width:10%;">${videolist[i].qualityLabel}：</div><input type="text" style="color:#5FB404;width:68%" value="${videolist[i].url}"></div>`;
					}
					ele = `<div id="downloadlist" style="margin:15px 0px;color:#E5212E;"><div>\u8BF7\u4F7F\u7528m3u8\u4E0B\u8F7D\u5DE5\u5177（<a target="_blank" href="https://xsyhnb.lanzoui.com/iTA2rg3hfef">\u63A8\u8350\u5DE5\u5177</a>）</div>${content}</div>`;
				}
				h1.after(ele);
			}catch(e){
				console.log('acfun',e.message);
			}
		};
		
		this.bilibiliAcFunc = function(){
			var reg_bili = /www.bilibili.com\/video.*/;
			var reg_acfun = /www.acfun.cn\/v\/.*/;
			if(reg_bili.test(window.location.href)){
				this.operatBilibili();
			}else if(reg_acfun.test(window.location.href)){
				var $that = this;
				setInterval(function(){
					$that.operatAcfun();
				}, 500);
			}
		};
		
		this.operatOther = function(){
			switch (window.location.host) {
				case 'www.iqiyi.com':
					try{
						unsafeWindow.rate = 0;
						unsafeWindow.Date.now = () => {
							return new unsafeWindow.Date().getTime() + (unsafeWindow.rate += 1000);
						}
						setInterval(() => {
							unsafeWindow.rate = 0;
						}, 600000);
					}catch(e){}
					setInterval(() => {
						try{
							if (document.getElementsByClassName("cupid-public-time")[0] != null) {
								$(".skippable-after").css("display", "block");
								document.getElementsByClassName("skippable-after")[0].click();
							}
							$(".qy-player-vippay-popup").css("display", "none");
							$(".black-screen").css("display", "none");
						}catch(e){}
					}, 500);
					
					break
				case 'v.qq.com':
					setInterval(() => { //视频广告加速
						try{
							$(".txp_ad").find("txpdiv").find("video")[0].currentTime = 1000;
							$(".txp_ad").find("txpdiv").find("video")[1].currentTime = 1000;
						}catch(e){}
					}, 1000)
					setInterval(() => {
						try{
							var txp_btn_volume = $(".txp_btn_volume");
							if (txp_btn_volume.attr("data-status") === "mute") {
								$(".txp_popup_volume").css("display", "block");
								txp_btn_volume.click();
								$(".txp_popup_volume").css("display", "none");
							}
							//$("txpdiv[data-role='hd-ad-adapter-adlayer']").attr("class", "txp_none");
							$(".mod_vip_popup").css("display", "none");
							$(".tvip_layer").css("display", "none");
							$("#mask_layer").css("display", "none");
						}catch(e){}
					}, 500);
					
					break
				case 'v.youku.com':
					try{
						window.onload = function () {
							if (!document.querySelectorAll('video')[0]) {
								setInterval(() => {
									document.querySelectorAll('video')[1].playbackRate = 16;
								}, 100)
							}
						}
					}catch(e){}
					setInterval(() => {
						try{
							var H5 = $(".h5-ext-layer").find("div")
							if(H5.length != 0){
								$(".h5-ext-layer div").remove();
								var control_btn_play = $(".control-left-grid .control-play-icon");
								if (control_btn_play.attr("data-tip") === "播放") {
									$(".h5player-dashboard").css("display", "block");
									control_btn_play.click();
									$(".h5player-dashboard").css("display", "none");
								}
							}
							$(".information-tips").css("display", "none");
						}catch(e){}
					}, 500);
					
					break
				case 'www.miguvideo.com':
					
					break
				case 'www.mgtv.com':
					
					break
				case 'tv.sohu.com':
					setInterval(() => {
						try{
							$(".x-video-adv").css("display", "none");
							$(".x-player-mask").css("display", "none");
							$("#player_vipTips").css("display", "none");
						}catch(e){}
					}, 500);
					
					break
				case 'www.bilibili.com':
					setInterval(() => {
						$(".player-limit-mask").remove();
					}, 500);
					
					break
				case 'xbeibeix.com':
					setInterval(() => {
						// $("#boxs").remove(".adsbygoogle");
						// $("#text-box").remove();
						// $("#aswift_1_expand").remove();
						// $(".adsbygoogle").remove();
						// $("#accordionExample").remove();
						// $("#text1").remove();
						// $("#button").remove();
						// $(".basic-addon1").remove();
						// $("#text2").remove();
						// $("#exampleModal").remove();
						// $(".alert").remove();
						// $(".button-1").remove();
						// $(".row").attr("id","ccc");
						// $(".clearfix").attr("id","aaa");
						// $("#aaa").find("#button-1").attr("id","bbb");
						// $("#bbb").css("background-color","#E5212E");
						// var con="请点击解析视频";$("#bbb").text(con);
						// $("#ccc").remove();
						// $("#basic").attr("id","eee");
						// $("#addon1").attr("id","ggg");
					}, 500);
					break
			}
		}
		this.bindEvent = function(){
			this.mouseEvent();
		}
		this.start = function(){
			this.operatOther();
			var host = window.location.host;
			var vipVideoHost=["qq.com","mgtv.com","iqiyi.com","youku.com","miguvideo.com","sohu.com","le.com","pptv.com","acfun.cn","bilibili.com","1905.com","wasu.cn"];
			var isExist = false;
			for(var i=0; i<vipVideoHost.length; i++){
				if(host.indexOf(vipVideoHost[i])!=-1){
					isExist = true;
					break;
				}
			}
			if(isExist){
				this.addHtmlElements();
				this.bindEvent();
				this.bilibiliAcFunc();
			}
		}
	};
	
	//国外的一些解析
	var abroadVideoHelper={};
	abroadVideoHelper.start = function(){
		var websites=["twitter.com","youtube.com","facebook.com"];
		var isExist = false;
		for(var i=0; i<websites.length; i++){
			if(window.location.host.indexOf(websites[i])!=-1){
				isExist = true;
				break;
			}
		}
		if(isExist){
			var iconVideo = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAADOUlEQVRoQ+2Zz4uNURjHP9+F8g8gykKJNJMUUmzMDKZmYVYsLBRhOaEmFhRRLCZDY4PBrJRREkUMmY3URCk/s6GMhR9ZWNk9OvXO7b133ve+57w/7szUnLqbe59fn/Oc85znnCvm+NAcj595gHgGzWwDsBZYDawEFgI/gT/AR0nDZWe8lAyYWTewF9iTEeA4MCTpblkghQHM7BxwPDCgAUn9gTqJ4oUAzOwKcChnICOS9uXUranlBjCza8CBggFclHSkiI1cAGbWBTwt4jim2y3pSV5bwQBmtgq4BazP67RB7w3gsvAX+CbpV4hdL4CoPG4H3KcjxEEOWVdyHwPjkq5m6WcCmNmFaIaybFXx+2vgsqSRNOOpAGa2GHhY4lIpAnha0qkkA4kAZuZO0k9FPFag2yHJHYR1Iw3gO7CsgiCKmPwMdEmajBuZBmBmbuMcLOKpQt1BSUdTAczMVZmQmjwtpTmC3xqo0ybpw5ROXQbMrA+45GtQUmYVy7JlZpYl0/B73YZuBAjqbWYI4KWkzWkZeBVSNuMAZua1FBorSY4MTEpangYQlM4EgOdZy6ExazkAiNtoXELvgLasIGr0sT0QZaAVAO8ltadlYBTYNcsB7kjanQZwHjg2ywGaViHXIruN7DVmYA+4lnudpC+JGXBfhlwTZwDAPQi4s6o2kloJ9yzyyKcXajGA64F6JL1tChBlwdX0oIrSgirUK+l+49pudh/IhGhhBvolDSRtzKa9jJktBdxrWk+icvXnwO3oIexFWlXJbMbMbAGwJQWg1o0WWEKpLUjSBcZ7CXnV0ZhQXoBQP/MAUzNgZu5Z8EbRGQT2S7qZ107mHmhmuIQnl2lXxFCQQgDRmTEGbAt1DIxJ2pFDr06lDIBFgDsdlwQE8wNol/Q7QCdRtDBAlIVO4FlAMJ2SMk96H3ulAEQQh4FBD6d9koY85LxESgOIIK67qtLE87CkUt+cSgWIICaAjQkQE5I2eU1rgFAVACsA9/Dk/qGcGv+ANZK+BsTmJVo6QJSFXuBeLIKdkh54RRQoVAlABHECOAOclHQ2MC5v8coAIojR+AuCd1QBgpUCBMSRW3QeIPfUlaT4H0/7RUAi2a/NAAAAAElFTkSuQmCC";			
			var html='<div id="free-xx1-player-script" style="width:25px;padding:10px 0px;text-align:center;background-color:#E5212E;position:fixed;top:250px;left:0px;color:#FFF;font-size:0px;z-index:9999999999999;cursor:pointer;margin:0px auto;text-align:center;">'+
				'<img src="'+iconVideo+'" style="width:20px;">'+
				'</div>';
			$("body").append(html);
			$("body").on("click", "#free-xx1-player-script", function(){
				var location_url = window.location.href;
				var videourl = "https://zh.savefrom.net/7/#"+location_url;
				GM_openInTab(videourl, {active: true});
			});
		}
	};
	abroadVideoHelper.pojie = function(){
		if(window.location.host.indexOf("savefrom.net")!=-1){
			var location_url = window.location.href;
			var url = location_url.replace("https://zh.savefrom.net/7/#","");
			if(!!url){
				var urlSetInterval = setInterval(function(){
	    			if($("#sf_url").length!=0){
	    				$("#sf_url").val(url);
	    				$("#sf_submit").click();
	    				clearInterval(urlSetInterval);
	    			}
	    		},200);	
			}
		}
	}
	abroadVideoHelper.start();
	abroadVideoHelper.pojie();
})();