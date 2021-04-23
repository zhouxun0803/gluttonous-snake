var date = [
    {
                tit1: "家电",
                tit2: "热门",
                tit3: "电视音频",
     con:[
         {
            conhref:"#",
            conimg: "image/1.png",
         },
         {
            conhref:"#",
            conimg: "image/1.png",
         },
     ],
        goods: [
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
        ],
     
    },
    {
        goods: [
            {
               goodshref: "#",
               goodsimg: "image/1.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/1.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
            {
               goodshref: "#",
               goodsimg: "image/2.png",
                goodspro1: "Redmi 红米电视 70英寸",
                goodspro2: "70英寸震撼巨屏，4K画质，细腻如真",
                goodsprice1: "3199元",
                goodsprice2: "3799元",

            },
        ],
    },
]
var box_warp=document.querySelector(".box_warp");
box_warp.innerHTML=`
<div class="box">
<div class="tit"></div>
<div class="con"></div>
</div>
`
var tit=document.querySelector(".tit");
    tit.innerHTML=`
    <em>${date[0].tit1}</em>
    <span>
    <b>${date[0].tit2}</b>
    <b>${date[0].tit3}</b>
    </span>
    `
var con=document.querySelector(".con");
    con.innerHTML=`
    <div class="con_left"></div>
    <div class="con_right">
    <ul></ul>
    <ul></ul>
    </div>
    `
    var con_left=document.querySelector(".con_left");
        for(var a=0;a<date[0].con.length;a++){
            con_left.innerHTML+=`
            <a href="${date[0].con[a].conhref} ">
            <img src=${date[0].con[a].conimg} alt="">
            </a> 
            `
        }
    var uls=document.querySelectorAll(".con_right ul");
    console.log(uls);
    for(var i=0;i<uls.length;i++){

        for(var a=0;a<date[0].goods.length;a++){
            uls[i].innerHTML+=`
            <li>
            <a href="${date[i].goods[a].goodshref} ">
            <img src=${date[i].goods[a].goodsimg} alt="">
            <div class="pro1">${date[i].goods[a].goodspro1}</div>
            <div class="pro2">${date[i].goods[a].goodspro2}</div>
            <div class="price">${date[i].goods[a].goodsprice1}<i>${date[i].goods[a].goodsprice2}</i></div>
            </a> 
            </li>
            `
        }
      
        
    }
    var bs=document.querySelectorAll(".tit span b");
    console.log(bs)
    var uls=document.querySelectorAll(".con_right ul");
    console.log(uls)
    // for(var a=0;a<bs.length;a++){
    //     bs[a].onclick=function(){
    //         for(var m=0;m<uls.length;m++){
    //             uls[m].style="display:none";
    //         }
    //         for(var m=0;m<uls.length;m++){
    //             uls[m].style="display:block";
    //         }


    //     }
    // }
    for (var i = 0; i < bs.length; i++) {
        bs[i].id = i;
        bs[i].onmouseover = function () {
            for (var a = 0; a < bs.length; a++) {
                uls[a].style = "display:none;";
            }
            // this.className = "this";
            // this.style = "color:red;";
            uls[this.id].style = "display:block;";
            // for (var v = 0; v < uls.length; v++) {
            //     uls[v].className = "";
            // }
            // uls[this.id].className = "into";
        }
    }


