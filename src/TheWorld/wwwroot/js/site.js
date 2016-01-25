// site.js
(function () {

    var ele = $("#username");
    ele.text("Kyle Collie");

    var main = $("#main");
    main.on("mouseenter", function () {
        //main.style = "background-color: #888;"; //Firefox
        //main.style.backgroundColor = "#888"; //Chrome & Edge
        //main.style["background-color"] = "#888"; //All
        main.css('background', '#888'); // JQ
    });
    main.on("mouseleave", function () {
        main.css('background', '');
    });

    var menuItems = $("ul.menu li a");
    menuItems.on("click", function () {
        var me = $(this);
        alert(me.text());
    })

})();