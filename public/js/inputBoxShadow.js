$(function () {
    $("input").parent().addClass("search_form_unselect");
    $("input").click(function () {
        event.stopPropagation();
        $(this).parent().addClass("search_form_select");
        $(this).parent().removeClass("search_form_unselect");
    });
    $(document).click(function () {
        $("input").parent().addClass("search_form_unselect");
        $("input").parent().removeClass("search_form_select");
    });
    $("#clubPostPopup").click(function () {
        $("input").parent().addClass("search_form_unselect");
        $("input").parent().removeClass("search_form_select");
    });
});