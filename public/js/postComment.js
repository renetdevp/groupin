$(function () {
    $("#commentInputForm").submit(function () {
        event.preventDefault();
        var element = "<div class=\"post_comment\">\n<div class=\"post_comment_profile\">\n<a href=\"#\" class=\"comment_profile_link\">\n<img src=\"img/sample1.png\" alt=\"프로필 이미지\" class=\"comment_profile_image\">\n<div class=\"comment_profile_name\">밀크군</div>\n</a>\n<div class=\"comment_date\">2016월 11월 01일 오후 12시 20분</div>\n</div>\n<br>\n<div class=\"post_comment_content\">\n" + $("#commentInput").val() + "\n</div>\n</div>";
        $("#postCommentWrapper").prepend(element);
        $("#commentInput").val("");
        // 댓글 아작스 올리기
    });
});