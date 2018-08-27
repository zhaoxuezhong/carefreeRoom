
//变量定义区
//获得全部的span标签
var spans = picBtns.getElementsByTagName("span");
//变量定义区
var x = 0;//保存开始的x的坐标值
var screenWidth = window.screen.availWidth;//设备屏幕宽度
var imgSize = picList.getElementsByTagName("img").length;
var index = 0;//代表当前正在显示的是第几张图片

//将指定的span按钮改变样式
function change(index){
    //将全部的span清除样式
    for(var i = 0;i<spans.length;i++){
        spans[i].className = "";
    }
    //将指定的span指定样式
    spans[index].className = "active";
}
//触摸开始
picList.addEventListener("touchstart",function(event){
    var touch = event.changedTouches[0];
    x = touch.pageX;
});
//移动中
picList.addEventListener("touchmove",function(event){
    var touch = event.changedTouches[0];
    var diff = x - touch.pageX;
    moveTo(-(diff+index*screenWidth));
});
//触摸结束
picList.addEventListener("touchend",function(event){
    var touch = event.changedTouches[0];
    var diff = x - touch.pageX; // -50
    if(Math.abs(diff)>screenWidth/2){
        if(diff>0){
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
}
