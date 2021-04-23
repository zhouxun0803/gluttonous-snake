getAjax("json/suningjiadian.json", function (res) {
  var data = JSON.parse(res);
  console.log(data);
  var tuijianTit = document.querySelector(".tuijian_tit .tab");
  var tuijianMin = document.querySelector(".tuijian_min");
  data.tuijian.forEach(function (item, index) {
    var tuijianTitLi = document.createElement("li");
    tuijianTitLi.innerHTML = `
  <p class="tab_tit">${item.tit}</p>
      <i></i>
  `
    var tuijijanMinUl = document.createElement("ul");
    tuijianMin.appendChild(tuijijanMinUl);
    tuijianTit.appendChild(tuijianTitLi);
    item.goods.forEach(function (i, v) {
      var tuijianMinLi = document.createElement("li");
      tuijianMinLi.innerHTML = `
   <a href="">
     <div class="goods_img">
      <img src="${i.goodsSrc}" alt="">
     </div>
    <p class="goods_name">${i.goodsPro}</p>
    <p class="goods_price">售罄</p>
   </a>
   `
      tuijijanMinUl.appendChild(tuijianMinLi);
    })
  })
  var tuijianTitLI = document.querySelectorAll(".tuijian_tit .tab li");
  var tuijianTitP = document.querySelectorAll(".tuijian_tit .tab .tab_tit");
  var tuijianTitI = document.querySelectorAll(".tuijian_tit .tab i");
  var tuijianMinUl = document.querySelectorAll(".tuijian_min ul");
  tuijianTitLI.forEach(function (item, index) {
    item.onclick = function () {
      for (var m = 0; m < tuijianTitLI.length; m++) {
        tuijianMinUl[m].style.display = "none";
        tuijianTitP[m].style.background = "#fff";
        tuijianTitI[m].style.borderTopColor = "#fff";
      }
      tuijianMinUl[index].style.display = "block";
      tuijianTitP[index].style.background = "rgb(250, 29, 90)";
      tuijianTitI[index].style.borderTopColor = "rgb(250, 29, 90)";
    }
  })
  var con = document.querySelector(".con");
  data.gengduo.forEach(function (item, index) {
    var conMain = document.createElement("div");
    conMain.className = "con_main";
    conMain.innerHTML = `
   <div class="con_tit">
     <div class="tit">
       <em></em>
       <h5>${item.tit2}</h5>
     </div>
     <ul class="true">
       <li><a href="">${item.titTrue1}</a></li>
       <li><a href="">${item.titTrue2}</a></li>
       <li><a href="">${item.titTrue3}</a></li>
       <li class="boxBut"><a href="">${item.titTrue4}></a></li>
     </ul>
   </div>
 
   <div class="con_min">
   <div class="con_min_top">
     <img src="${item.goodsBSrc}" alt="">
     <ul>
       </ul>
       </div>
       <div class="con_min_bottom">
       <ul>
         </ul>
         </div>
       </div>
   `
    con.appendChild(conMain);
    var conMinTopUl = document.querySelectorAll(" .con_min_top ul");
    item.goods1.forEach(function (i, v) {
      var conMinTopLi = document.createElement("li");
      conMinTopLi.innerHTML = `
     <a href="">
     <img src="${i.goods1Src}" alt="">
     <p class="pro">${i.goods1Pro}</p>
     <p class="price">${i.goods1Price}</p>
   </a>
     `
      conMinTopUl[index].appendChild(conMinTopLi);
    })
    var conMinBottomUl = document.querySelectorAll(".con_min_bottom ul");
    item.goods2.forEach(function (i, v) {
      var conMinBottomLi = document.createElement("li");
      conMinBottomLi.innerHTML = `
      <a href="">
      <img src="${i.goods2Src}" alt="">
      <div class="goods">
        <p class="pro">${i.goods2Pro}</p>
        <p class="price">
          <i>￥</i>
          <em>${i.goods2Price}</em>
        </p>
      </div>
    </a>
`
        conMinBottomUl[index].appendChild(conMinBottomLi);
    })

  })
})
