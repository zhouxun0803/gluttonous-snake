var bannerLi=document.querySelectorAll(".banner ul li");
var bannerButLeft=document.querySelector(".banner .but_left");
var bannerButRight=document.querySelector(".banner .but_right");
var bannerPage=document.querySelectorAll(".banner .banner_page span");
var bannerUl=document.querySelector(".banner ul");
num=0;
var timer;
bannerPage[0].style.background="#6E56E8";
bannerButLeft.style.display="none";
bannerButRight.style.display="none";
bannerUl.onmousemove=function(){
 bannerButLeft.style.display="block";
 bannerButRight.style.display="block";
 clearInterval(timer);
}
bannerButLeft.onmousemove=function(){
 bannerButLeft.style.display="block";
 bannerButRight.style.display="block";
}
bannerButRight.onmousemove=function(){
 bannerButLeft.style.display="block";
 bannerButRight.style.display="block";
}
bannerButLeft.onmouseleave=function(){
 bannerButLeft.style.display="none";
 bannerButRight.style.display="none";
}
bannerButRight.onmouseleave=function(){
 bannerButLeft.style.display="none";
 bannerButRight.style.display="none";
}
bannerUl.onmouseleave=function(){
 bannerButLeft.style.display="none";
 bannerButRight.style.display="none";
 attce();
}


bannerButRight.onclick=function(){
 clearInterval(timer);
 num++;
  for(var m=0;m<bannerLi.length;m++){
   bannerLi[m].style.opacity=0;
 bannerPage[m].style.background="#fff";
  }
  if(num>=bannerLi.length){
   num=0
  }
 bannerLi[num].style.opacity=1;
 bannerPage[num].style.background="#6E56E8";
 attce();
}
bannerButLeft.onclick=function(){
 clearInterval(timer);
 num--;
  for(var m=0;m<bannerLi.length;m++){
   bannerLi[m].style.opacity=0;
 bannerPage[m].style.background="#fff";
  }
  if(num<0){
   num=bannerLi.length-1;
  }
 bannerLi[num].style.opacity=1;
 bannerPage[num].style.background="#6E56E8";
 attce();
}
bannerPage.forEach(function(item,index){
 item.onmouseover=function(){
  clearInterval(timer);
  for(var m=0;m<bannerLi.length;m++){
   bannerLi[m].style.opacity=0;
   bannerPage[m].style.background="#fff";
  }
 bannerLi[index].style.opacity=1;
 this.style.background="#6E56E8";
   num=index;
   attce();
 }
})

function attce(){
 timer=setInterval(function(){
  num++;
  for(var m=0;m<bannerLi.length;m++){
   bannerLi[m].style.opacity=0;
 bannerPage[m].style.background="#fff";
  }
  if(num>=bannerLi.length){
   num=0
  }
 bannerLi[num].style.opacity=1;
 bannerPage[num].style.background="#6E56E8";
 },3000)
}
attce();



getAjax("json/suningguoji.json",function(res){
 var data=JSON.parse(res);
//  console.log(data)
 var titUl=document.querySelector(".tab_tit ul");
 var tabBox=document.querySelector(".tab_box");
 data.detail.forEach(function(item,index){
  var titLi=document.createElement("li");
  titLi.innerHTML=item.tit;
  titUl.appendChild(titLi);
  var content=document.createElement("div");
  content.className="tab_content";
  content.innerHTML=`
  <div class="tab_content_min1"><ul></ul></div>
  <div class="tab_content_min2"><ul></ul></div>
  `
  tabBox.appendChild(content);
  var contentMin1=document.querySelectorAll(".tab_content_min1 ul");
  // console.log(contentMin1)
  item.goods1.forEach(function(i,v){
   var contentMin1Li=document.createElement("li");
   contentMin1Li.className="item";
   contentMin1Li.innerHTML=`
   <a href="">
   <div class="item_img">
    <img src="${i.goods1Src1}" alt="">
    <div class="item_img_market">
     <em>${i.goods1Name}</em>
     <b>${i.goods1Shop}</b>
    </div>
   </div>
   <div class="item_info">
     <div class="item_info_in">
      <div class="tit">
       <img src="${i.goods1Src2} " alt="">
       <i>${i.goods1Tit}</i>
      </div>
      <div class="pro1">
      ${i.goods1Pro1}
      </div>
      <div class="pro2">
      ${i.goods1Pro2}      </div>
      <div class="price">
       <span class="newprice">${i.goods1NewPrice1}</span>
       <span class="oldprice">${i.goods1OldPrice2}</span>
      </div>
     </div>
   </div>
 </a>
   `
   contentMin1[index].appendChild(contentMin1Li);
 
  })
  var contentMin2=document.querySelectorAll(".tab_content_min2 ul");
  item.goods2.forEach(function(i,v){
   var contentMin21Li=document.createElement("li");
   contentMin21Li.className="goods";
   contentMin21Li.innerHTML=`
   <a href="">
   <img src="${i.goods2Src1}" alt="">
   <div class="goods_market1">
    <em>${i.goods2Name}</em>
    <b>${i.goods2Shop}</b>
   </div>
   <div class="goods_box">
    <div class="tit">
     <img src="${i.goods2Src2}" alt="">
     <i>${i.goods2Tit}</i>
    </div>
    <div class="pro">${i.goods2Pro}</div>
    <div class="price">
     <span class="newprice">${i.goods2NewPrice1}</span>
     <span class="oldprice">${i.goods2OldPrice2}</span>
    </div>
   </div>
  </a>
   `
   contentMin2[index].appendChild(contentMin21Li)
  })

 })
 var content=document.querySelectorAll(".tab_content");
 var titLi=document.querySelectorAll(".tab_tit ul li");
 titLi[0].style.background="#6E56E8";
 titLi[0].style.color="#fff";
  content[0].style.display="block";
  titLi.forEach(function(item,index){
   item.onmouseover=function(){
    for(var m=0;m<titLi.length;m++){
     titLi[m].style.background="#fff";
     titLi[m].style.color="#333";
     content[m].style.display="none";
    }
    this.style.background="#6E56E8";
    this.style.color="#fff";
    content[index].style.display="block";
   }
  })

})