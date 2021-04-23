var bannerImg=document.querySelectorAll(".banner_img img");
var butLeft=document.querySelector(".but_left");
var butRight=document.querySelector(".but_right");
var page=document.querySelectorAll(".page span");
var num=0;
var timer;
page[0].style.background="red";
butRight.onclick=function(){
 clearInterval(timer);
 for(var i=0;i<page.length;i++){
  bannerImg[i].style.opacity=0;
  page[i].style.background="black";
}
num++;
if(num>=page.length){
  num=0;
}
bannerImg[num].style.opacity=1;
page[num].style.background="red";
automove();
}

butLeft.onclick=function(){
 clearInterval(timer);
 for(var i=0;i<page.length;i++){
  bannerImg[i].style.opacity=0;
  page[i].style.background="black";
}
num--;
if(num<0){
  num=page.length-1;
}
bannerImg[num].style.opacity=1;
page[num].style.background="red";
automove();
}

page.forEach(function(item,index){
 item.onmouseover=function(){
  clearInterval(timer);
  num=index;
  for(var m=0;m<page.length;m++){
   bannerImg[m].style.opacity=0;
   page[m].style.background="black"
  }
  bannerImg[index].style.opacity=1;
  item.style.background="red";
  automove();
 }
})

function automove(){
 timer=setInterval(function(){
     for(var i=0;i<page.length;i++){
         bannerImg[i].style.opacity=0;
         page[i].style.background="black";
     }
     num++;
     if(num>=page.length){
         num=0;
     }
    bannerImg[num].style.opacity=1;
     page[num].style.background="red";
 },2000)
}
automove();

getAjax("index.json",function(res){
  var data=JSON.parse(res);
  var minWarp=document.querySelector(".min_warp");
  for(var m=0;m<data.detail.length;m++){
  var min=document.createElement("div");
  min.className="min";
  min.innerHTML=`
  <div class="min_top">
   <em>${data.detail[m].minTopTit1}</em>
   <b>${data.detail[m].minTopTit2}</b>
  </div>

  <div class="min_bottom">
  <div class="min_left">
   <a href="#">
    <img src="${data.detail[m].minLeftImg}" alt="">
   </a>
  </div>

  <div class="min_center">
   <ul>
   </ul>
   </div>
   <div class="min_right">
   <h5>${data.detail[m].minRightTit}</h5>
   <ul>
   </ul>
   </div>

  `
  minWarp.appendChild(min);
  var centerUl=document.querySelectorAll(".min_center ul");
for(var n=0;n<data.detail[m].goods.length;n++){
 var centerLi=document.createElement("li");
 centerLi.innerHTML=`
 <a href="">
 <img src="${data.detail[m].goods[n].minConImg}" alt="">
 <p class="min_center_pro">${data.detail[m].goods[n].minConPro}</p>
 <p class="min_center_price">
  <i>${data.detail[m].goods[n].minConPrice1}</i>
  <em>${data.detail[m].goods[n].minConPrice2}</em>
  <span>${data.detail[m].goods[n].minConPrice3}</span>
 </p>
</a>
 `
 centerUl[m].appendChild(centerLi);
}
var RightUl=document.querySelectorAll(".min_right ul");
for(var i=0;i<data.detail[m].goods1.length;i++){
 var RightLi=document.createElement("li");
 RightLi.innerHTML=`
 <a href="">
 <div class="min_right_img">
  <img src="${data.detail[m].goods1[i].minRightImg}" alt="">
 </div>
 <div class="min_right_con">
  <h4>${data.detail[m].goods1[i].minRightpro}</h4>
  <h6>${data.detail[m].goods1[i].minRightprice}</h6>
 </div>
</a>
 `
 RightUl[m].appendChild(RightLi);
}
}


var minWarp=document.querySelector(".min_warp");
var floor=document.querySelectorAll(".floor ul li");
var min=document.querySelectorAll(".min_warp .min");
var minWarp=document.querySelector(".min_warp");
var floorWarp=document.querySelector(".floor");
var floor1=document.querySelector(".floor a");
console.log(min);
function getOffsetTL(obj){
  var t=obj.offsetTop;
  var l=obj.offsetLeft;
  var parent=obj.offsetParent;
  while(parent){
      t+=parent.offsetTop+parent.clientTop;
      l+=parent.offsetLeft+parent.clientLeft;
      parent=parent.offsetParent;
  }
  return {left:l,top:t};
}
window.onscroll=function(){
 var jd=document.documentElement.scrollTop;
 if(jd>=getOffsetTL(min[0]).top-150){
   floorWarp.style.display="block";
   floor[0].style.background="#F90";
 }else{
   floorWarp.style.display="none";
 }
 for(var m=0;m<floor.length;m++){
  if(jd>getOffsetTL(min[m]).top-150){
    for(var n=0;n<floor.length;n++){
    floor[n].style.background="#fff";
    }
   floor[m].style.background="#F90";
  }
}
}
floor.forEach(function(item,index){
  item.onclick=function(){
     document.documentElement.scrollTop=getOffsetTL(min[index]).top-145;
  }
})
},function(res){

})



 



