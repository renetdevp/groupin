$(function () {
    careerElementsDelete();
});

function careerElementsDelete() {
    $(".career_elements_delete").click(function () {
        $(this).parent().remove();
        // 여기에 활동 항목 없애는 아작스
    });
}