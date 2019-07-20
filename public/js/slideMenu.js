function slideMenu(name) {
    var menu = $("#" + name);
    menu.slideToggle(100);

    $(document).click(function () {
        menu.slideUp(100);
    });
}