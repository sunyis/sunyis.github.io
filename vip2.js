/**
 * // ==UserScript==
 * // @name         全网VIP视频免费播放，超清解析，去广告，支持优酷、腾讯、爱奇艺、M1905、芒果、PPTV、咪咕视频等，2021/05/03更新，长期更新，放心使用。
 * // @namespace    http://tv.oopw.top/
 * // @version      2.2.2
 * // @description  在视频播放页悬浮VIP按钮，可在线播放vip视频；支持优酷vip，腾讯vip，爱奇艺vip，芒果vip，乐视vip等常用视频...
 * // @author       LiHeng
 * // @icon         http://tv.13tv.top/favicon.ico
 * // @match        *://m.youku.com/v*
 * // @match        *://m.youku.com/a*
 * // @match        *://v.youku.com/v_*
 * // @match        *://*.iqiyi.com/v_*
 * // @match        *://*.iqiyi.com/a_*
 * // @match        *://*.iqiyi.com/w_*
 * // @match        *://*.iqiyi.com/adv*
 * // @match        *://*.le.com/ptv/vplay/*
 * // @match        *://*.le.com/vplay*
 * // @match        *v.qq.com/x/cover/*
 * // @match        *v.qq.com/x/page/*
 * // @match        *v.qq.com/play*
 * // @match        *v.qq.com/cover*
 * // @match        *://m.v.qq.com/play*
 * // @match        *://m.v.qq.com/x/m/play*
 * // @match        *://m.v.qq.com/x/play*
 * // @match        *://*.tudou.com/listplay/*
 * // @match        *://*.tudou.com/albumplay/*
 * // @match        *://*.tudou.com/programs/view/*
 * // @match        *://*.tudou.com/v*
 * // @match        *://*.mgtv.com/b/*
 * // @match        *://*.mgtv.com/s/*
 * // @match        *://film.sohu.com/album/*
 * // @match        *://tv.sohu.com/v/*
 * // @match        *://m.tv.sohu.com/v*
 * // @match        *://m.tv.sohu.com/album/*
 * // @match        *://*.acfun.cn/v/*
 * // @match        *://*.bilibili.com/video/*
 * // @match        *://*.bilibili.com/anime/*
 * // @match        *://*.bilibili.com/bangumi/play/*
 * // @match        *://*.pptv.com/show/*
 * // @match        *://vip.1905.com/play/*
 * // @match        *://*.wasu.cn/Play/show*
 * // @match        *://*.wasu.cn/wap/Play/show/*
 * // @match        *://*.wasu.cn/wap/play/show/*
 * // @match        *://*.miguvideo.com/wap/resource/pc/detail/*
 * // @match        *://*.miguvideo.com/mgs/website/prd/detail*
 * // @exclude      *://*.oopw.top/*
 * // @require      https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
 * // @require      https://greasyfork.org/scripts/373336-layer-wandhi/code/layer_wandhi.js?version=637587
 * // @require      https://cdn.bootcss.com/sweetalert/2.1.2/sweetalert.min.js
 * // @license      GPL License
 * // @grant        GM_setClipboard
 * // @run-at       document-end
 * // @connect      shangxueba365.com
 * // @grant        unsafeWindow
 * // @grant        GM_xmlhttpRequest
 * // @grant        GM_info
 * // @grant        GM.getValue
 * // @grant        GM.setValue
 * // @grant        GM_getValue
 * // @grant        GM_setValue
 * // @grant        GM_notification
 * // @grant        GM_openInTab
 * // @grant        GM_deleteValue
 * // @grant        GM_registerMenuCommand
 * // @grant        GM_unregisterMenuCommand
 * // ==/UserScript==
 */
 
(function () {
    'use strict';
 
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
 
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
 
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
 
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
 
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
 
    var Http = (function () {
        function Http() {
        }
        Http.prototype.ajax = function (request) {
            GM_xmlhttpRequest(request);
        };
        return Http;
    }());
 
    var Core = (function () {
        function Core() {
            this.head = document.getElementsByTagName('head')[0];
            this.topUrl = top.window.location.href;
            this.url = this.currentUrl();
            this.http = new Http();
        }
        Core.prototype.getPar = function (option, url) {
            if (url === void 0) { url = window.location.search; }
            var v = url.match(new RegExp("[\?\&]" + option + "=([^\&]+)", "i"));
            return v == null || v.length < 1 ? "" : v[1];
        };
        Core.prototype.appendCss = function (url) {
            var linkCSS = document.createElement("link");
            linkCSS.type = "text/css";
            linkCSS.rel = "stylesheet";
            linkCSS.href = url;
            this.head.appendChild(linkCSS);
        };
        Core.prototype.accpendCssContent = function (content) {
            var Style = document.createElement("style");
            Style.innerHTML = content;
            this.head.appendChild(Style);
        };
        Core.prototype.bodyAppendCss = function (url) {
            $('body').append($('<link rel="stylesheet" href="' + url + '">'));
        };
        Core.prototype.bodyAppend = function (html) {
            $("body").append(html);
        };
        Core.prototype.appendJs = function (url) {
            var linkScript = document.createElement("script");
            linkScript.type = "text/" + ("javascript");
            linkScript.src = url;
            this.head.appendChild(linkScript);
        };
        Core.prototype.bodyAppendJs = function (url) {
            $('body').append($('<script type="text/javascript" src="' + url + '"></script>'));
        };
        Core.prototype.currentUrl = function () {
            return window.location.href;
        };
        Core.prototype.Msg = function (msg) {
            return layer.msg(msg, { icon: 5 });
        };
        Core.prototype.showContent = function (title, content) {
            return layer.open({ type: 1, title: title, shade: 0, content: content });
        };
        Core.prototype.close = function (obj) {
            layer.close(obj);
        };
        Core.prototype.closeAll = function () {
            layer.closeAll();
        };
        return Core;
    }());
 
    var PluginBase = (function () {
        function PluginBase() {
            this.core = new Core();
            this.apiRoot = "https://api.wandhi.com/api";
        }
        PluginBase.prototype.linkTest = function (url) {
            var _this = this;
            if (!url) {
                url = this.core.currentUrl();
            }
            var flag = false;
            this.rules.forEach(function (v, k) {
                if (v.test(url)) {
                    flag = true;
                    _this.site = k;
                    return false;
                }
                return true;
            });
            return flag;
        };
        PluginBase.prototype.Process = function () {
            this.loader();
            this.run();
        };
        PluginBase.prototype.getData = function (url, callback) {
            $.getJSON(url, function (d) {
                callback(d);
            });
        };
        PluginBase.prototype.queryData = function (request) {
            this.core.http.ajax(request);
        };
        return PluginBase;
    }());
 
    var SiteEnum;
    (function (SiteEnum) {
        SiteEnum[SiteEnum["TaoBao"] = 0] = "TaoBao";
        SiteEnum[SiteEnum["TMall"] = 1] = "TMall";
        SiteEnum[SiteEnum["JingDong"] = 2] = "JingDong";
        SiteEnum[SiteEnum["IQiYi"] = 3] = "IQiYi";
        SiteEnum[SiteEnum["YouKu"] = 4] = "YouKu";
        SiteEnum[SiteEnum["LeShi"] = 5] = "LeShi";
        SiteEnum[SiteEnum["TuDou"] = 6] = "TuDou";
        SiteEnum[SiteEnum["Tencent_V"] = 7] = "Tencent_V";
        SiteEnum[SiteEnum["MangGuo"] = 8] = "MangGuo";
        SiteEnum[SiteEnum["SoHu"] = 9] = "SoHu";
        SiteEnum[SiteEnum["Acfun"] = 10] = "Acfun";
        SiteEnum[SiteEnum["BiliBili"] = 11] = "BiliBili";
        SiteEnum[SiteEnum["M1905"] = 12] = "M1905";
        SiteEnum[SiteEnum["PPTV"] = 13] = "PPTV";
        SiteEnum[SiteEnum["YinYueTai"] = 14] = "YinYueTai";
        SiteEnum[SiteEnum["WangYi"] = 15] = "WangYi";
        SiteEnum[SiteEnum["Tencent_M"] = 16] = "Tencent_M";
        SiteEnum[SiteEnum["KuGou"] = 17] = "KuGou";
        SiteEnum[SiteEnum["KuWo"] = 18] = "KuWo";
        SiteEnum[SiteEnum["XiaMi"] = 19] = "XiaMi";
        SiteEnum[SiteEnum["TaiHe"] = 20] = "TaiHe";
        SiteEnum[SiteEnum["QingTing"] = 21] = "QingTing";
        SiteEnum[SiteEnum["LiZhi"] = 22] = "LiZhi";
        SiteEnum[SiteEnum["MiGuvideo"] = 23] = "MiGuvideo";
        SiteEnum[SiteEnum["XiMaLaYa"] = 24] = "XiMaLaYa";
    })(SiteEnum || (SiteEnum = {}));
 
    var Common;
    (function (Common) {
        var Menu = (function () {
            function Menu() {
                this.core = new Core();
                this.site = /tv.oopw.top/i;
                this.userAgent = navigator.userAgent;
                this.menusClass = ['first', 'second'];
                this.menuSelecter = "#Wandhi-nav";
            }
            Menu.prototype.loader = function () {
                this.core.accpendCssContent("\n            html {\n                -ms-text-size-adjust: 100%;\n                -webkit-text-size-adjust: 100%;\n                -webkit-font-smoothing: antialiased;\n                font-size: 62.5%\n            }\n            body .aside-nav {\n                font-family: \"Helvetica Neue\", Helvetica, \"Microsoft YaHei\", Arial, sans-serif;\n                margin: 0;\n                font-size: 1.6rem;\n                /*background-color: #f9f9f9;*/\n                color: #4E546B\n            }\n            .aside-nav {\n                position: fixed;\n                /*right: -50px;*/\n                top: 350px;\n                width: 260px;\n                height: 260px;\n                -webkit-filter: url(#goo);\n                filter: url(#goo);\n                -ms-user-select: none;\n                -moz-user-select: none;\n                -webkit-user-select: none;\n                user-select: none;\n                opacity: .75;\n                z-index: 20180817;\n            }\n            .aside-nav.no-filter {\n                -webkit-filter: none;\n                filter: none\n            }\n            .aside-nav .aside-menu {\n                position: absolute;\n                width: 70px;\n                height: 70px;\n                -webkit-border-radius: 50%;\n                border-radius: 50%;\n                background: #f34444;\n                left: 0;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                text-align: center;\n                line-height: 70px;\n                color: #fff;\n                font-size: 20px;\n                z-index: 1;\n                cursor: move\n            }\n            .aside-nav .menu-item {\n                position: absolute;\n                width: 60px;\n                height: 60px;\n                background-color: #FF7676;\n                left: 0;\n                top: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                line-height: 60px;\n                text-align: center;\n                -webkit-border-radius: 50%;\n                border-radius: 50%;\n                text-decoration: none;\n                color: #fff;\n                -webkit-transition: background .5s, -webkit-transform .6s;\n                transition: background .5s, -webkit-transform .6s;\n                -moz-transition: transform .6s, background .5s, -moz-transform .6s;\n                transition: transform .6s, background .5s;\n                transition: transform .6s, background .5s, -webkit-transform .6s, -moz-transform .6s;\n                font-size: 14px;\n                -webkit-box-sizing: border-box;\n                -moz-box-sizing: border-box;\n                box-sizing: border-box\n            }\n            .aside-nav .menu-item:hover {\n                background: #A9C734;\n            }\n            .aside-nav .menu-line {\n                line-height: 20px;\n                padding-top: 10px;\n            }\n            .aside-nav:hover {\n                opacity: 1;\n            }\n            .aside-nav:hover .aside-menu {\n                -webkit-animation: jello 1s;\n                -moz-animation: jello 1s;\n                animation: jello 1s\n            }\n            .aside-nav:hover .menu-first {\n                -webkit-transform: translate3d(0, -135%, 0);\n                -moz-transform: translate3d(0, -135%, 0);\n                transform: translate3d(0, -135%, 0)\n            }\n            .aside-nav:hover .menu-second {\n                -webkit-transform: translate3d(120%, -70%, 0);\n                -moz-transform: translate3d(120%, -70%, 0);\n                transform: translate3d(120%, -70%, 0)\n            }\n            .aside-nav:hover .menu-third {\n                -webkit-transform: translate3d(120%, 70%, 0);\n                -moz-transform: translate3d(120%, 70%, 0);\n                transform: translate3d(120%, 70%, 0)\n            }\n            .aside-nav:hover .menu-fourth {\n                -webkit-transform: translate3d(0, 135%, 0);\n                -moz-transform: translate3d(0, 135%, 0);\n                transform: translate3d(0, 135%, 0)\n            }\n            @-webkit-keyframes jello {\n            from, 11.1%, to {\n            -webkit-transform:none;\n            transform:none\n            }\n            22.2% {\n            -webkit-transform:skewX(-12.5deg) skewY(-12.5deg);\n            transform:skewX(-12.5deg) skewY(-12.5deg)\n            }\n            33.3% {\n            -webkit-transform:skewX(6.25deg) skewY(6.25deg);\n            transform:skewX(6.25deg) skewY(6.25deg)\n            }\n            44.4% {\n            -webkit-transform:skewX(-3.125deg) skewY(-3.125deg);\n            transform:skewX(-3.125deg) skewY(-3.125deg)\n            }\n            55.5% {\n            -webkit-transform:skewX(1.5625deg) skewY(1.5625deg);\n            transform:skewX(1.5625deg) skewY(1.5625deg)\n            }\n            66.6% {\n            -webkit-transform:skewX(-.78125deg) skewY(-.78125deg);\n            transform:skewX(-.78125deg) skewY(-.78125deg)\n            }\n            77.7% {\n            -webkit-transform:skewX(0.390625deg) skewY(0.390625deg);\n            transform:skewX(0.390625deg) skewY(0.390625deg)\n            }\n            88.8% {\n            -webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);\n            transform:skewX(-.1953125deg) skewY(-.1953125deg)\n            }\n            }\n            @-moz-keyframes jello {\n            from, 11.1%, to {\n            -moz-transform:none;\n            transform:none\n            }\n            22.2% {\n            -moz-transform:skewX(-12.5deg) skewY(-12.5deg);\n            transform:skewX(-12.5deg) skewY(-12.5deg)\n            }\n            33.3% {\n            -moz-transform:skewX(6.25deg) skewY(6.25deg);\n            transform:skewX(6.25deg) skewY(6.25deg)\n            }\n            44.4% {\n            -moz-transform:skewX(-3.125deg) skewY(-3.125deg);\n            transform:skewX(-3.125deg) skewY(-3.125deg)\n            }\n            55.5% {\n            -moz-transform:skewX(1.5625deg) skewY(1.5625deg);\n            transform:skewX(1.5625deg) skewY(1.5625deg)\n            }\n            66.6% {\n            -moz-transform:skewX(-.78125deg) skewY(-.78125deg);\n            transform:skewX(-.78125deg) skewY(-.78125deg)\n            }\n            77.7% {\n            -moz-transform:skewX(0.390625deg) skewY(0.390625deg);\n            transform:skewX(0.390625deg) skewY(0.390625deg)\n            }\n            88.8% {\n            -moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);\n            transform:skewX(-.1953125deg) skewY(-.1953125deg)\n            }\n            }\n            @keyframes jello {\n            from, 11.1%, to {\n            -webkit-transform:none;\n            -moz-transform:none;\n            transform:none\n            }\n            22.2% {\n            -webkit-transform:skewX(-12.5deg) skewY(-12.5deg);\n            -moz-transform:skewX(-12.5deg) skewY(-12.5deg);\n            transform:skewX(-12.5deg) skewY(-12.5deg)\n            }\n            33.3% {\n            -webkit-transform:skewX(6.25deg) skewY(6.25deg);\n            -moz-transform:skewX(6.25deg) skewY(6.25deg);\n            transform:skewX(6.25deg) skewY(6.25deg)\n            }\n            44.4% {\n            -webkit-transform:skewX(-3.125deg) skewY(-3.125deg);\n            -moz-transform:skewX(-3.125deg) skewY(-3.125deg);\n            transform:skewX(-3.125deg) skewY(-3.125deg)\n            }\n            55.5% {\n            -webkit-transform:skewX(1.5625deg) skewY(1.5625deg);\n            -moz-transform:skewX(1.5625deg) skewY(1.5625deg);\n            transform:skewX(1.5625deg) skewY(1.5625deg)\n            }\n            66.6% {\n            -webkit-transform:skewX(-.78125deg) skewY(-.78125deg);\n            -moz-transform:skewX(-.78125deg) skewY(-.78125deg);\n            transform:skewX(-.78125deg) skewY(-.78125deg)\n            }\n            77.7% {\n            -webkit-transform:skewX(0.390625deg) skewY(0.390625deg);\n            -moz-transform:skewX(0.390625deg) skewY(0.390625deg);\n            transform:skewX(0.390625deg) skewY(0.390625deg)\n            }\n            88.8% {\n            -webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);\n            -moz-transform:skewX(-.1953125deg) skewY(-.1953125deg);\n            transform:skewX(-.1953125deg) skewY(-.1953125deg)\n            }\n            }\n            \n            .animated {\n                -webkit-animation-duration: 1s;\n                -moz-animation-duration: 1s;\n                animation-duration: 1s;\n                -webkit-animation-fill-mode: both;\n                -moz-animation-fill-mode: both;\n                animation-fill-mode: both\n            }\n            \n            @-webkit-keyframes bounceInUp {\n            from, 60%, 75%, 90%, to {\n            -webkit-animation-timing-function:cubic-bezier(0.215, .61, .355, 1);\n            animation-timing-function:cubic-bezier(0.215, .61, .355, 1)\n            }\n            from {\n                opacity: 0;\n                -webkit-transform: translate3d(0, 800px, 0);\n                transform: translate3d(0, 800px, 0)\n            }\n            60% {\n            opacity:1;\n            -webkit-transform:translate3d(0, -20px, 0);\n            transform:translate3d(0, -20px, 0)\n            }\n            75% {\n            -webkit-transform:translate3d(0, 10px, 0);\n            transform:translate3d(0, 10px, 0)\n            }\n            90% {\n            -webkit-transform:translate3d(0, -5px, 0);\n            transform:translate3d(0, -5px, 0)\n            }\n            to {\n                -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n            }\n            }\n            @-moz-keyframes bounceInUp {\n            from, 60%, 75%, 90%, to {\n            -moz-animation-timing-function:cubic-bezier(0.215, .61, .355, 1);\n            animation-timing-function:cubic-bezier(0.215, .61, .355, 1)\n            }\n            from {\n                opacity: 0;\n                -moz-transform: translate3d(0, 800px, 0);\n                transform: translate3d(0, 800px, 0)\n            }\n            60% {\n            opacity:1;\n            -moz-transform:translate3d(0, -20px, 0);\n            transform:translate3d(0, -20px, 0)\n            }\n            75% {\n            -moz-transform:translate3d(0, 10px, 0);\n            transform:translate3d(0, 10px, 0)\n            }\n            90% {\n            -moz-transform:translate3d(0, -5px, 0);\n            transform:translate3d(0, -5px, 0)\n            }\n            to {\n                -moz-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n            }\n            }\n            @keyframes bounceInUp {\n            from, 60%, 75%, 90%, to {\n            -webkit-animation-timing-function:cubic-bezier(0.215, .61, .355, 1);\n            -moz-animation-timing-function:cubic-bezier(0.215, .61, .355, 1);\n            animation-timing-function:cubic-bezier(0.215, .61, .355, 1)\n            }\n            from {\n                opacity: 0;\n                -webkit-transform: translate3d(0, 800px, 0);\n                -moz-transform: translate3d(0, 800px, 0);\n                transform: translate3d(0, 800px, 0)\n            }\n            60% {\n            opacity:1;\n            -webkit-transform:translate3d(0, -20px, 0);\n            -moz-transform:translate3d(0, -20px, 0);\n            transform:translate3d(0, -20px, 0)\n            }\n            75% {\n            -webkit-transform:translate3d(0, 10px, 0);\n            -moz-transform:translate3d(0, 10px, 0);\n            transform:translate3d(0, 10px, 0)\n            }\n            90% {\n            -webkit-transform:translate3d(0, -5px, 0);\n            -moz-transform:translate3d(0, -5px, 0);\n            transform:translate3d(0, -5px, 0)\n            }\n            to {\n                -webkit-transform: translate3d(0, 0, 0);\n                -moz-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0)\n            }\n            }\n            .bounceInUp {\n                -webkit-animation-name: bounceInUp;\n                -moz-animation-name: bounceInUp;\n                animation-name: bounceInUp;\n                -webkit-animation-delay: 1s;\n                -moz-animation-delay: 1s;\n                animation-delay: 1s\n            }\n            \n            @media screen and (max-width:640px) {\n            .aside-nav {/* display: none!important */}\n            }\n            @media screen and (min-width:641px) and (max-width:1367px) {\n            .aside-nav {top: 50px}\n            }\n            ");
            };
            Menu.prototype.getBody = function (option) {
                return "<svg width=\"0\" height=\"0\"><defs><filter id=\"goo\"><feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"10\" result=\"blur\"></feGaussianBlur><feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\" result=\"goo\"></feColorMatrix><feComposite in=\"SourceGraphic\" in2=\"goo\" operator=\"atop\"></feComposite></filter></defs></svg><div class=\"aside-nav bounceInUp animated\" id=\"Wandhi-nav\"><label for=\"\" class=\"aside-menu\" title=\"\u6309\u4F4F\u62D6\u52A8\">VIP</label>" + option + "</div>";
            };
            Menu.prototype.Init = function (menus, callback) {
                var _this = this;
                if (this.site.test(this.core.topUrl)) {
                    return;
                }
                this.loader();
                var str = "";
                menus.forEach(function (element, index) {
                    str += "<a href=\"javascript:void(0)\" title=\"" + element.title + "\" data-cat=\"" + element.type + "\" class=\"menu-item menu-line menu-" + _this.menusClass[index] + "\">" + element.show + "</a>";
                });
                this.core.bodyAppend(this.getBody(str));
                /Safari|iPhone/i.test(this.userAgent) && /chrome/i.test(this.userAgent) && $("#Wandhi-nav").addClass("no-filter");
                var drags = { down: !1, x: 0, y: 0, winWid: 0, winHei: 0, clientX: 0, clientY: 0 };
                var asideNav = $(this.menuSelecter)[0];
                $("body").on("mousedown", "#Wandhi-nav", function (a) {
                    var getCss = function (a, e) {
                        return a.currentStyle ? a.currentStyle[e] : document.defaultView.getComputedStyle(a, !1)[e];
                    };
                    drags.down = !0,
                        drags.clientX = a.clientX,
                        drags.clientY = a.clientY,
                        drags.x = parseInt(getCss(this, "left")),
                        drags.y = parseInt(getCss(this, "top")),
                        drags.winHei = $(window).height(),
                        drags.winWid = $(window).width(),
                        $(document).on("mousemove", function (a) {
                            var e = a.clientX - drags.clientX, t = a.clientY - drags.clientY;
                            asideNav = asideNav || $("#Wandhi-nav")[0];
                            asideNav.style.top = drags.y + t + "px";
                            asideNav.style.left = drags.x + e + "px";
                        });
                }).on("mouseup", "#Wandhi-nav", function () {
                    drags.down = !1, $(document).off("mousemove");
                });
                callback.call(this);
            };
            return Menu;
        }());
        Common.Menu = Menu;
    })(Common || (Common = {}));
 
 
    var WandhiInjection = (function () {
        function WandhiInjection(plugins) {
            this.plugins = new Array();
            if (plugins) {
                this.plugins = plugins;
            }
        }
        WandhiInjection.prototype.Init = function () {
            this.plugins.every(function (element) {
                if (element.linkTest()) {
                    element.Process();
                    return false;
                }
                return true;
            });
        };
        return WandhiInjection;
    }());
 
    var MovieService = (function (_super) {
        __extends(MovieService, _super);
        function MovieService() {
            var _this = _super.call(this) || this;
            _this.rules = new Map([
                [SiteEnum.YouKu, /youku/i],
                [SiteEnum.IQiYi, /iqiyi/i],
                [SiteEnum.LeShi, /le.com/i],
                [SiteEnum.Tencent_V, /v.qq/i],
                [SiteEnum.TuDou, /tudou/i],
                [SiteEnum.MangGuo, /mgtv/i],
                [SiteEnum.SoHu, /sohu/i],
                [SiteEnum.Acfun, /acfun/i],
                [SiteEnum.BiliBili, /bilibili/i],
                [SiteEnum.M1905, /1905/i],
                [SiteEnum.PPTV, /pptv/i],
                [SiteEnum.MiGuvideo, /miguvideo/i],
            ]);
            _this.menu = new Common.Menu();
            return _this;
        }
        MovieService.prototype.loader = function () {
            if (typeof ($) === 'undefined') {
                this.core.appendJs("//lib.baomitu.com/jquery/1.12.4/jquery.min.js");
            }
        };
        MovieService.prototype.run = function () {
            this.menu.Init([
                { title: "\u7535\u5F71\u641C\u7D22", show: "\u7535\u5F71<br>\u641C\u7D22", type: "search" },
                { title: "\u89C6\u9891\u89E3\u6790", show: "\u89C6\u9891<br>\u89E3\u6790", type: "process" },
                { title: "\u7EDD\u4E16\u597D\u5238", show: "\u7EDD\u4E16<br>\u597D\u5238", type: "tb" },
                { title: "\u4EAC\u4E1C\u597D\u5238", show: "\u4EAC\u4E1C<br>\u597D\u5238", type: "jd" }
            ], this._onClick);
        };
        MovieService.prototype._onClick = function () {
            $('body').on('click', '[data-cat=process]', function () {
                window.open('http://tv.13tv.top/v.php?url=' + window.location.href + '&title=' + document.title);
            });
            $('body').on('click', '[data-cat=search]', function () {
                window.open('http://tv.13tv.top/');
            });
            $('body').on('click', '[data-cat=tb]', function () {
                window.open('http://sign.wandhi.com/jump.php?target=https://api.wandhi.com/goto/DUVAFQgZTEEVFAQcDhYKSFkDDh9XCl8=');
            });
            $('body').on('click', '[data-cat=jd]', function () {
                window.open('http://sign.wandhi.com/jump.php?target=https://api.wandhi.com/goto/DUVAFQgZTFwGTVhHDxkLV1pIBl5Z');
            });
        };
        return MovieService;
    }(PluginBase));
 
 
    var app = new WandhiInjection([
        new MovieService()
    ]);
    app.Init();
 
}());