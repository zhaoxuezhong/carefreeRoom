Zepto(function ($) {

    $(".secondHandList .condition .toggle").click(function () {
        if(!$(this).hasClass("active")){
            $(".secondHandList .condition .toggle").removeClass("active");
            $(this).addClass("active");
            $("#myTabContent").css("display","block");
            $("#shade").css("display","block");
        }
        else{
            $("#myTabContent").css("display","none");
            $(this).removeClass("active");
            $("#shade").css("display","none");
        }
    })

    $("#shade").tap(function () {
        $("#myTabContent").css("display","none");
        $(".secondHandList .condition .toggle").removeClass("active");
        $("#shade").css("display","none");
    })

    $("#layout li,#more p").click(function () {
        $(this).toggleClass("active");
    })

    $("#region .tabContent li,#price li").click(function () {
        $(this).siblings().removeClass("active");
        $(this).toggleClass("active");
    })

});