$(function () {
    // 닉네임 불러오는 아작스
    
    $("#nicknameChangeButton").click(function () {
        event.stopPropagation();
        var origin = $("#profileName").html().replace(/\s/g, "");
        $("#profileName").replaceWith("<input type=\"text\" maxlength=10 id=\"profileName\">");
        $("#profileName").val(origin);
        $("#profileName").focus();
        $("#profileName").parent().submit(function () {
            event.preventDefault();
        });
        $("#profileName").focusout(function () {
            var change = $(this).val();
            $(this).parent().removeClass("search_form_unselect");
            $(this).replaceWith("<div id=\"profileName\">" + change + "</div>");
            // 여기에 닉네임 바꾸는 아작스
        });
    });
});