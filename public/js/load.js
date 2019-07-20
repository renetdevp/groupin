$(function () {
    var headerSubjectButton = $("#headerSubjectButton");
    headerSubjectButton.click(function () {
        event.stopPropagation();
        slideMenu("subjectSelect");
        $("#accountInfoMenu").slideUp(100);
    });

    var accountInfo = $("#accountInfo");
    accountInfo.click(function () {
        event.stopPropagation();
        slideMenu("accountInfoMenu");
        $("#subjectSelect").slideUp(100);
    });

    $("#clubPostPopup").click(function () {
        event.stopPropagation();
    });

    $(".close_button").click(function () {
        setTimeout(function () {
            blockBodyScroll(false);
        }, 100);
        $("#clubPostPopup").slideUp(100);
        $(this).parent().parent().parent().parent().animate({
            "opacity": "0"
        }, 100).hide(100);
    });
});