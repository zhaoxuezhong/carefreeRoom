Zepto(function ($) {

    $(".secondHandList .condition .toggle").tap(function () {
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
    });

    $("#shade").tap(function () {
        $("#myTabContent").css("display","none");
        $(".secondHandList .condition .toggle").removeClass("active");
        $("#shade").css("display","none");
    });

    $("#layout li,#more p").tap(function () {
        $(this).toggleClass("active");
    });

    $("#region .tabContent li,#price li").tap(function () {
        $(this).siblings().removeClass("active");
        $(this).toggleClass("active");
    });

    $("#region1 ul.col-xs-4 li").tap(function(){
        var index=$(this).index()-2;
        $("#region1 ul.col-xs-8").hide();
        if(index>=0){
            $("#region1 ul.col-xs-8")[index].style.display="block";
        }
    });

});