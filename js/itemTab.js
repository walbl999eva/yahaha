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




// 商品评价页面切换
// 全部
function allBox() {
    var allBox=document.getElementById('allBox');
    var happy=document.getElementById('happy');
    var normal=document.getElementById('normal');
    var unhappy=document.getElementById('unhappy');
    var boxHappy=document.getElementById('boxHappy');
    var boxNormal=document.getElementById('boxNormal');
    var boxUnhappy=document.getElementById('boxUnhappy');
    allBox.classList.add('active');
    happy.classList.remove('active');
    normal.classList.remove('active');
    unhappy.classList.remove('active');
    boxHappy.style.display='block';
    boxNormal.style.display='block';
    boxUnhappy.style.display='block';
};
// 满意
function happy() {
    var allBox=document.getElementById('allBox');
    var happy=document.getElementById('happy');
    var normal=document.getElementById('normal');
    var unhappy=document.getElementById('unhappy');
    var boxHappy=document.getElementById('boxHappy');
    var boxNormal=document.getElementById('boxNormal');
    var boxUnhappy=document.getElementById('boxUnhappy');
    allBox.classList.remove('active');
    happy.classList.add('active');
    normal.classList.remove('active');
    unhappy.classList.remove('active');
    boxHappy.style.display='block';
    boxNormal.style.display='none';
    boxUnhappy.style.display='none';
};
// 一般
function normal() {
    var allBox=document.getElementById('allBox');
    var happy=document.getElementById('happy');
    var normal=document.getElementById('normal');
    var unhappy=document.getElementById('unhappy');
    var boxHappy=document.getElementById('boxHappy');
    var boxNormal=document.getElementById('boxNormal');
    var boxUnhappy=document.getElementById('boxUnhappy');
    allBox.classList.remove('active');
    happy.classList.remove('active');
    normal.classList.add('active');
    unhappy.classList.remove('active');
    boxHappy.style.display='none';
    boxNormal.style.display='block';
    boxUnhappy.style.display='none';
};
// 不满意
function unhappy() {
    var allBox=document.getElementById('allBox');
    var happy=document.getElementById('happy');
    var normal=document.getElementById('normal');
    var unhappy=document.getElementById('unhappy');
    var boxHappy=document.getElementById('boxHappy');
    var boxNormal=document.getElementById('boxNormal');
    var boxUnhappy=document.getElementById('boxUnhappy');
    allBox.classList.remove('active');
    happy.classList.remove('active');
    normal.classList.remove('active');
    unhappy.classList.add('active');
    boxHappy.style.display='none';
    boxNormal.style.display='none';
    boxUnhappy.style.display='block';
};


// // 商品评价页面切换
// window.onload=function(){
//     var tit=document.getElementById('commentList');
//     var ul=tit.getElementsByTagName('ul')[0];
//     var li=ul.getElementsByTagName('li');
//     var tabs=document.getElementById('memberComment');
//     var div=tabs.getElementsByTagName('div');
//
//     for(var i=0,len=li.length;i<len;i++){
//         li[i].index=i;
//         li[i].onclick=function () {
//             for(var n=0;n<len;n++){
//                 li[n].classList.remove('active');
//                 div[n+1].classList.remove('hide');
//             }
//             this.classList.add('active');
//             div[this.index+1].classList.remove('hide');
//         }
//     }
// };


// // 页码1选中效果
// window.onload=function(){
//     var x=document.getElementById('page');
//     var a=x.getElementsByTagName('a');
//     for(var i=0,len=a.length;i<len;i++){
//         a[i].index=i;       //为每个a的index值赋于变化的值i
//         a[i].onclick=function () {
//             for(var n=0;n<len;n++){
//                 a[n].style.backgroundColor='#fff';
//                 a[n].style.color='#000';//先隐藏样式
//             }
//             this.style.backgroundColor='#e9e9e9';
//             this.style.color='#ff0000';//再为this指向的a标签添加css样式
//         }
//     }
// };

// // 页码2选中效果
// window.onload=function(){
//     var x=document.getElementById('page2');
//     var a=x.getElementsByTagName('a');
//     for(var i=0,len=a.length;i<len;i++){
//         a[i].index=i;       //为每个a的index值赋于变化的值i
//         a[i].onclick=function () {
//             for(var n=0;n<len;n++){
//                 a[n].style.backgroundColor='#fff';
//                 a[n].style.color='#000';//先隐藏样式
//             }
//             this.style.backgroundColor='#e9e9e9';
//             this.style.color='#ff0000';//再为this指向的a标签添加css样式
//         }
//     }
// };