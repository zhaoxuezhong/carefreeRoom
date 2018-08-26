$(function(){

    $("#downloadBtn").on("click",function () {
        $(".downloadBar").show();
    });


    $("#closeDownload").on("click",function () {
        $(".downloadBar").hide();
    });

});