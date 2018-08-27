Zepto(function($){

    $("#downloadBtn").on("tap",function () {
        $(".downloadBar").css("display","block");
    });


    $("#closeDownload").on("tap",function () {
        $(".downloadBar").css("display","none");
    });

});