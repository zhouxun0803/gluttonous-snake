  
  function Banner(butLeft,butRight,bannerPage,bannerUrl,banner,select){
   this.butLeft=document.querySelector(butLeft);
  this.butRight=document.querySelector(butRight);
  this.bannerPage=document.querySelectorAll(bannerPage);
  this.bannerImg=document.querySelectorAll(bannerUrl);
  this.banner=document.querySelector(banner);
  this.num=1;
  this.banner.style.marginLeft=-590+"px";
  this.timer=null;
  this.boo=true;
  var that=this;
  this.select=select;
 this.bannerRight(this,select);
 this.bannerLeft(this,select);
 this.bannerBut(this,select);
 this.autemove(this,select);
  // butRight.onclick=function(){
  //  clearInterval(timer);
  //  if(boo){
  //   boo=false;
  //  setTimeout(function(){
  //   boo=true;
  //  },300)
  //  num++;
  //  for(var m=0;m<bannerPage.length;m++){
  //   bannerPage[m].classList.remove("select");
  //  }
  //  banner.style.transition="margin-left 0.5s linear";
  //  if(num>=bannerImg.length-1){
  //   setTimeout(function(){
  //    banner.style.transition="";
  //    banner.style.marginLeft=-590+"px";
  //    num=1;
  //   },300)
  //   bannerPage[0].classList.add("select");
  //  }else{
  //   bannerPage[num-1].classList.add("select");
  //  }
  //  banner.style.marginLeft=num*-590+"px";
  //  }
  //  autemove();
  // }
 
  // butLeft.onclick=function(){
  //  clearInterval(timer);
  //  if(boo){
  //   boo=false;
  //   setTimeout(function(){
  //    boo=true;
  //   },300)
  //   num--;
  //  for(var m=0;m<bannerPage.length;m++){
  //   bannerPage[m].classList.remove("select");
  //  }
  //  banner.style.transition="margin-left 0.5s linear";
  //  if(num<=0){
  //   setTimeout(function(){
  //    num=bannerImg.length-2;
  //    console.log(num)
  //    banner.style.transition="";
  //    banner.style.marginLeft=-num*590+"px";
     
  //   },300)
  //   bannerPage[bannerImg.length-3].classList.add("select");
  //  }else{
  //   bannerPage[num-1].classList.add("select");
  //  }
  //  banner.style.marginLeft=num*-590+"px";
  //  }
  //  autemove();
  // }
 
  // bannerPage.forEach(function(item,index){
  //  item.onclick=function(){
  //   clearInterval(timer);
  //   num++;
  //   num=index+1;
  //   for(var m=0;m<bannerPage.length;m++){
  //   bannerPage[m].classList.remove("select");
  //  }
  //  banner.style.marginLeft=num*-590+"px";
  //  bannerPage[index].classList.add("select");
  //  autemove();
  //  }
  // })
 
  // function autemove(){
  //  timer=setInterval(function(){
  //   num++;
  //  for(var m=0;m<bannerPage.length;m++){
  //   bannerPage[m].classList.remove("select");
  //  }
  //  banner.style.transition="margin-left 0.5s linear";
  //  if(num>=bannerImg.length-1){
  //   setTimeout(function(){
  //    banner.style.transition="";
  //    banner.style.marginLeft=-590+"px";
  //    num=1;
  //   },300)
  //   bannerPage[0].classList.add("select");
  //  }else{
  //   bannerPage[num-1].classList.add("select");
  //  }
  //  banner.style.marginLeft=num*-590+"px";
  //  },3000)
  // }
  // autemove();
 
  }
  Banner.prototype.bannerRight=function(obj){
   var that=this;

   this.butRight.onclick=function(){
   clearInterval(obj.timer);
   if(obj.boo){
    obj.boo=false;
   setTimeout(function(){
    obj.boo=true;
   },300)
   obj.num++;
   for(var m=0;m< obj.bannerPage.length;m++){
    obj.bannerPage[m].classList.remove(obj.select);
   }
   obj.banner.style.transition="margin-left 0.5s linear";
   if( obj.num>= obj.bannerImg.length-1){
    setTimeout(function(){
     obj.banner.style.transition="";
     obj.banner.style.marginLeft=-590+"px";
     obj.num=1;
    },300)
    obj.bannerPage[0].classList.add(obj.select);
   }else{
    obj.bannerPage[obj.num-1].classList.add(obj.select);
   }
   obj.banner.style.marginLeft=obj.num*-590+"px";
   }
   that.autemove(that,obj.select);
  }
  }
 
  Banner.prototype.bannerLeft=function(obj){
   var that=this;
   this.butLeft.onclick=function(){
   clearInterval(obj.timer);
   if(obj.boo){
    obj.boo=false;
    setTimeout(function(){
     obj.boo=true;
    },300)
    obj.num--;
   for(var m=0;m<obj.bannerPage.length;m++){
    obj.bannerPage[m].classList.remove(obj.select);
   }
   obj.banner.style.transition="margin-left 0.5s linear";
   if(obj.num<=0){
    setTimeout(function(){
     obj.num=obj.bannerImg.length-2;
     obj.banner.style.transition="";
     obj.banner.style.marginLeft=obj.num*-590+"px";
     
    },300)
    obj.bannerPage[obj.bannerImg.length-3].classList.add(obj.select);
   }else{
    obj.bannerPage[obj.num-1].classList.add(obj.select);
   }
   obj.banner.style.marginLeft=-obj.num*590+"px";
   }
   that.autemove(that,obj.select);
  }
 
  }
 
  Banner.prototype.bannerBut=function(obj){
   var that=this;
   obj.bannerPage.forEach(function(item,index){
   item.onclick=function(){
    clearInterval(obj.timer);
    obj.num++;
    obj.num=index+1;
    for(var m=0;m<obj.bannerPage.length;m++){
     obj.bannerPage[m].classList.remove(obj.select);
   }
   obj.banner.style.marginLeft=obj.num*-590+"px";
   obj.bannerPage[index].classList.add(obj.select);
   that.autemove(that,obj.select);
   }
  })
  }
 
  Banner.prototype.autemove=function(obj){
   var that=this; 
   console.log(this)
   console.log(obj)
   obj.timer=setInterval(function(){
    obj.num++;
    console.log(obj.bannerPage)
   for(var m=0;m<obj.bannerPage.length;m++){
    obj.bannerPage[m].classList.remove(obj.select);
   }
   obj.banner.style.transition="margin-left 0.5s linear";
   if(obj.num>=obj.bannerImg.length-1){
    setTimeout(function(){
     obj.banner.style.transition="";
     obj.banner.style.marginLeft=-590+"px";
     obj.num=1;
    },300)
    obj.bannerPage[0].classList.add(obj.select);
   }else{
    obj.bannerPage[obj.num-1].classList.add(obj.select);
   }
   obj.banner.style.marginLeft=obj.num*-590+"px";
   },3000)
  }
 