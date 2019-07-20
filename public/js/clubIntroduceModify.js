$(function () {
    // 아작스로 동아리 소개 적용하는 부분
    
    $("#clubIntroduceTitle > i").click(function () {
        event.stopPropagation();
        $("#clubIntroduceContent").replaceWith("<textarea id=\"clubIntroduceContent\">" + $("#clubIntroduceContent").html().replace(/<br>/g, "\n") + "</textarea>");

        $("#clubIntroduceContent").focusout(function () {
            $(this).replaceWith("<div id=\"clubIntroduceContent\">" + $(this).val().replace(/\n/g, "<br>") + "</div>")
        });
        
        // 아작스로 동아리 소개 보내는 부분
    });
});