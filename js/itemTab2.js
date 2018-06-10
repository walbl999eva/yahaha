// 商品详情页Tab标签切换

// 显示商品详情
function itemIntro() {
    var detail=document.getElementById('itemDetailContent');
    var rate=document.getElementById('itemRateContent');
    var detailBtn=document.getElementById('itemIntro');
    var rateBtn=document.getElementById('itemRate');
    detail.style.display='block';
    rate.classList.remove('bt');
    detailBtn.classList.add('active');
    rateBtn.classList.remove('active');
}

// 显示商品评价
function itemRate() {
    var detail=document.getElementById('itemDetailContent');
    var rate=document.getElementById('itemRateContent');
    var detailBtn=document.getElementById('itemIntro');
    var rateBtn=document.getElementById('itemRate');
    detail.style.display='none';
    rate.classList.add('bt');
    detailBtn.classList.remove('active');
    rateBtn.classList.add('active');
}





// 网页加载
window.onload=function (){
    page();
    page2();
    tabs();
};



// 商品评价页面切换
function tabs(){
    var tit=document.getElementById('commentList');
    var ul=tit.getElementsByTagName('ul')[0];
    var li=ul.getElementsByTagName('li');
    var div=document.getElementById('memberComment').children;

    for(var i=0,len=li.length;i<len;i++){
        li[i].index=i;
        li[i].onclick=function () {
            for(var n=0;n<len;n++){
                li[n].classList.remove('active');
                div[n+1].classList.add('hide');
            }
            this.classList.add('active');
            if (this.index===0){
                for(var k=0;k<len;k++){
                    div[k+1].classList.remove('hide');
                }
            }else {
                div[this.index].classList.remove('hide');
            }
        }
    }
};



// 页码1选中效果
function page(){
    var x=document.getElementById('page');
    var a=x.getElementsByTagName('a');
    for(var i=0,len=a.length;i<len;i++){
        a[i].index=i;       //为每个a的index值赋于变化的值i
        a[i].onclick=function () {
            for(var n=0;n<len;n++){
                a[n].style.backgroundColor='#fff';
                a[n].style.color='#000';//先隐藏样式
            }
            this.style.backgroundColor='#e9e9e9';
            this.style.color='#ff0000';//再为this指向的a标签添加css样式
        }
    }
}




// 页码2选中效果
function page2(){
    var x=document.getElementById('page2');
    var a=x.getElementsByTagName('a');
    for(var i=0,len=a.length;i<len;i++){
        a[i].index=i;       //为每个a的index值赋于变化的值i
        a[i].onclick=function () {
            for(var n=0;n<len;n++){
                a[n].style.backgroundColor='#fff';
                a[n].style.color='#000';//先隐藏样式
            }
            this.style.backgroundColor='#e9e9e9';
            this.style.color='#ff0000';//再为this指向的a标签添加css样式
        }
    }
}