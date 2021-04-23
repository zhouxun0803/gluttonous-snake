var paihangbangTit = document.querySelector(".paihangbang_tit ul");
var paihangbangMin = document.querySelector(".paihangbang_min");
getAjax("js/suningchaoshi.json", function (res) {
  var data = JSON.parse(res);
  console.log(data)
  data.paihangbang.forEach(function (item, index) {
    var paihangbangTitLi = document.createElement("li");
    paihangbangTitLi.innerHTML = `
    <p class="paihangbang_tit_icon1"></p>
      <p class="${item.title}">宠物</p>
    `
    var paihangbangMinUl = document.createElement("ul");
    paihangbangMin.appendChild(paihangbangMinUl);

    paihangbangTit.appendChild(paihangbangTitLi);

    item.goods1.forEach(function (i, v) {
      var paihangbangMinLi = document.createElement("li");
      paihangbangMinLi.innerHTML = `
     <a href="">
     <img src="${i.goods1Image}" alt="">
     <p class="pro">${i.goods1Pro}</p>
     <p class="price">￥
      <em>${i.goods1Price2}</em>
     </p>
     <a class="carBut" href="#"></a>
    </a>
     `
      paihangbangMinUl.appendChild(paihangbangMinLi);
    })



  })

  var fenleiWarp = document.querySelector(".fenlei_warp");
  console.log(fenleiWarp)
  data.fenlei.forEach(function (item, index) {
    var fenlei = document.createElement("div");
    fenlei.className = "fenlei";
    fenlei.innerHTML = `
       <div class="fenlei_tit">
       <em></em>
       <h5>${item.title2}</h5>
      </div>

      <div class="fenlei_con">
      <div class="big_img">
       <a href="">
        <img src="${item.bImg}" alt="">
        <ul class="cards">
        </ul>
       </a>
      </div>
      <ul class="min">
     </ul>
     </div>
       `
       fenleiWarp.appendChild(fenlei);
        var cards=document.querySelectorAll(".cards");
        console.log(cards)
       item.bMin.forEach(function(i,v){
         var cardsLi=document.createElement("li");
         var cardsLiA=document.createElement("a");
         cardsLi.appendChild(cardsLiA);
         cardsLiA.innerHTML=i;
         cards[index].appendChild(cardsLi);
       })

    var fenleiCon = document.querySelectorAll('.fenlei_con');
    //  console.log(fenleiCon)
    //  var bricks=goodsConRight[index].querySelectorAll('.fenlei_con .min');
    var fenleiMinUl = document.querySelectorAll(" .min");
    // console.log(fenleiMinUl)

    item.goods.forEach(function (i, v) {
      var fenleiMinLi = document.createElement("li");
      fenleiMinLi.innerHTML = `
            <a href="">
              <img src="${i.goodsImg}" alt="">
              <p class="pro">${i.goodsPro}</p>
              <p class="price">
              ￥
              <i>${i.goodsPrice2}</i>
              <em></em>
              </p>
            </a>
          `
      fenleiMinUl[index].appendChild(fenleiMinLi);

    })
  

  })



  var paihangbangTitLi = document.querySelectorAll(".paihangbang_tit ul li");
  var paihangbangMinUl = document.querySelectorAll(".paihangbang_min ul");
  paihangbangTitLi.forEach(function (item, index) {
    item.onclick = function () {
      for (var m = 0; m < paihangbangTitLi.length; m++) {
        paihangbangMinUl[m].style.display = "none";
        paihangbangTitLi[m].style.background = "#fff";
      }
      paihangbangMinUl[index].style.display = "block";
      item.style.background = "red";
    }
  })
})
