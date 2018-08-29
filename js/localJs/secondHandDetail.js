
var t=setInterval("f()",5050);
function f() {
    var ele=myCarousel.getElementsByClassName("carousel-indicators")[0].getElementsByClassName("active")[0];
    var to=parseInt(ele.getAttribute("data-slide-to"))+1;
    currentIndex.getElementsByTagName("span")[0].innerHTML=to;
}

Zepto(function ($) {
    $("#myCarousel a.carousel-control,#myCarousel .carousel-indicators li").tap(function () {
        clearInterval(t);
        f();
        t=setInterval("f()",5050);
    })
});

/*

//变量定义区
var x = 0;//保存开始的x的坐标值
var screenWidth = window.screen.availWidth;//设备屏幕宽度
var imgSize = picList.getElementsByTagName("img").length;
var index = 0;//代表当前正在显示的是第几张图片
//获得全部的span标签
var spans = picBtns.getElementsByTagName("span");

//触摸开始
picList.addEventListener("touchstart",function(event){
    x = event.changedTouches[0].pageX;
});
//移动中
picList.addEventListener("touchmove",function(event){
    moveTo(event.changedTouches[0].pageX-x-index*screenWidth);
});
//触摸结束
picList.addEventListener("touchend",function(event){
    var diff = event.changedTouches[0].pageX-x;
    if(Math.abs(diff)>screenWidth/3){
        if(diff<0){
            //1.向左
            index++;
            if(index>imgSize-1){
                index = imgSize-1;
            }
        }else{
            //2.向右
            index--;
            if(index<0){
                index = 0;
            }
        }
        //改变小圆点的样式
        change(index);
    }
    moveTo(-index*screenWidth);
});

function moveTo(distance){
    picList.style.left = distance+"px";
    currentIndex.getElementsByTagName("span")[0].innerHTML=index+1;
}

//将指定的span按钮改变样式
function change(index){
    //将全部的span清除样式
    for(var i = 0;i<spans.length;i++){
        spans[i].className = "";
    }
    //将指定的span指定样式
    spans[index].className = "active";
}

Zepto(function ($) {
    $("#picBtns span").tap(function () {
        index=$(this).index();
        change(index);
        moveTo(-index*screenWidth);
    })

});*/
