$(function () {
    // 여기 갤러리 사진 목록 아작스로 받아오기
    
    $("#galleryUploadButton").click(function () {
        $("#galleryUploadPopup").slideToggle(100);
    });

    $("#uploadFileForm").submit(function () {
        event.preventDefault();
        var element = "<div class=\"gallery_image_elements\">\n<img src=\"" + $("#uploadPreview").attr("src") + "\" alt=\"1\">\n<div class=\"student_name\">" + $("#uploadNameInput").val() + "</div>\n</div>"
        $("#clubGalleryImage").append(element);
        $("#uploadFileInput").val("");
        $("#uploadNameInput").val("");
        $("#uploadPreview").attr("src", "");
        $("#galleryUploadPopup").slideUp(100);
        // 여기 사진 하나하나 아작스로 업로드
    });
});