function blockBodyScroll(condition) {
    if (condition) {
        $("body").css({
            "overflow-y": "hidden"
        });
    } else if (!condition) {
        $("body").css({
            "overflow-y": "auto"
        });
    }
}