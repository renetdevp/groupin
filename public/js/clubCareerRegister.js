$(function () {
    // 여기에 활동 정보 받아서 적용하는 아작스
    
    $("#clubCareerForm").submit(function () {
        event.preventDefault();
        var element = "<li class=\"club_career_elements\">\n<div class=\"career_elements_content\">" + $("#clubCareerInput").val() + "</div>\n<div class=\"career_elements_delete\">×</div>\n</li>"
        $("#clubCareerList").prepend(element);
        careerElementsDelete();
        $("#clubCareerInput").val("");
        // 여기에 활동 정보 올리는 아작스
    });
});