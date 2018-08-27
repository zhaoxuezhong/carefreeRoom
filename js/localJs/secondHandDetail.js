
//����������
//���ȫ����span��ǩ
var spans = picBtns.getElementsByTagName("span");
//����������
var x = 0;//���濪ʼ��x������ֵ
var screenWidth = window.screen.availWidth;//�豸��Ļ���
var imgSize = picList.getElementsByTagName("img").length;
var index = 0;//����ǰ������ʾ���ǵڼ���ͼƬ

//��ָ����span��ť�ı���ʽ
function change(index){
    //��ȫ����span�����ʽ
    for(var i = 0;i<spans.length;i++){
        spans[i].className = "";
    }
    //��ָ����spanָ����ʽ
    spans[index].className = "active";
}
//������ʼ
picList.addEventListener("touchstart",function(event){
    var touch = event.changedTouches[0];
    x = touch.pageX;
});
//�ƶ���
picList.addEventListener("touchmove",function(event){
    var touch = event.changedTouches[0];
    var diff = x - touch.pageX;
    moveTo(-(diff+index*screenWidth));
});
//��������
picList.addEventListener("touchend",function(event){
    var touch = event.changedTouches[0];
    var diff = x - touch.pageX; // -50
    if(Math.abs(diff)>screenWidth/2){
        if(diff>0){
            //1.����
            index++;
            if(index>imgSize-1){
                index = imgSize-1;
            }
        }else{
            //2.����
            index--;
            if(index<0){
                index = 0;
            }
        }
        //�ı�СԲ�����ʽ
        change(index);
    }
    moveTo(-index*screenWidth);
});

function moveTo(distance){
    picList.style.left = distance+"px";
}
