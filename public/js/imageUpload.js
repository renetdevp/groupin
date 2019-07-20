$(function () {
    $("#uploadFileInput").change(function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#uploadPreview").attr("src", e.target.result);
        }
        if (this.files.length != 0) {
            reader.readAsDataURL(this.files[0]);
        } else {
            $("#uploadPreview").attr("src", "");
        }
    });
    
    $("#postImageInput").change(function () {
        var reader = new FileReader();
        reader.onload = function (e) {
            $("#postImagePreview").attr("src", e.target.result);
        }
        if (this.files.length != 0) {
            reader.readAsDataURL(this.files[0]);
        } else {
            $("#postImagePreview").attr("src", "");
        }
    });
});