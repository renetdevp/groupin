function postPopup(postNumber) {
    // postNumber로 아작스에 인수 넣어서 요청하면
    // 그 번호로 글 불러와서 적용
    
    blockBodyScroll(true);
    $("#clubPostPopupWrapper").show().animate({
        "opacity": "1"
    }, 100);
    $("#clubPostPopup").slideDown(100);

    $("#clubPostPopupWrapper").click(function () {
        setTimeout(function () {
            blockBodyScroll(false);
        }, 100);
        $("#clubPostPopup").slideUp(100);
        $(this).animate({
            "opacity": "0"
        }, 100).hide(100);
    });
}