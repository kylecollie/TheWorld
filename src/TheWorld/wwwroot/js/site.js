﻿// site.js
(function () {

    //var ele = $("#username");
    //ele.text("Kyle Collie");

    //var main = $("#main");
    //main.on("mouseenter", function () {
    //    //main.style = "background-color: #888;"; //Firefox
    //    //main.style.backgroundColor = "#888"; //Chrome & Edge
    //    //main.style["background-color"] = "#888"; //All
    //    main.css('background', '#888'); // JQ
    //});
    //main.on("mouseleave", function () {
    //    main.css('background', '');
    //});

    //var menuItems = $("ul.menu li a");
    //menuItems.on("click", function () {
    //    var me = $(this);
    //    alert(me.text());
    //});

var $sidebarAndWrapper = $("#sidebar,#wrapper");
var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");
        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        } else {
            $icon.addClass("fa-angle-left");
            $icon.removeClass("fa-angle-right");
        }
    });

})();