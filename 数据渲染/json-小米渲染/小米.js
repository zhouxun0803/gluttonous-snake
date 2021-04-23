var xhr, data;
if (window.XMLHttpRequest) {
 xhr = new XMLHttpRequest();
} else {
 xhr = new ActiveXObject("Microsoft.XMLHTTP");
}
xhr.open("GET", "小米.json", true);
xhr.send();
xhr.onreadystatechange = function () {
 if (xhr.readyState == 4) {
  if (xhr.status == 200) {
   data = JSON.parse(xhr.responseText);
   console.log(data);
   var mainBanner = document.querySelector(".main_banner")
   var mainHeader = document.querySelector(".main_header");
   var mainRow = document.querySelector(".main_row");
   mainBanner.innerHTML = `
  <a href="${data.date[0].banner_href}">
  <img src="${data.date[0].banner_img}" alt="">
 </a>
  `
   mainHeader.innerHTML = `
  <div class="main_header_title">${data.date[0].header_title}</div>
  <div class="main_header_more">
   <span>${data.date[0].header_more1}</span>
   <span>${data.date[0].header_more2}</span>
  </div>
  `
   mainRow.innerHTML = `
  <div class="main_row_left">
  <ul>
  <li>
  <a href="">
  <img src="${data.date[0].row_img1}" alt="">
  </a>
  </li>
  <li>
  <a href="">
  <img src="${data.date[0].row_img2}" alt="">
  </a>
  </li>
  </ul>
  </div>
  <div class="main_row_right">
  <ul></ul>
  </div>
  `
   var rowRight = document.querySelector(".main_row_right ul");
    for(var n=0;n<data.date[0].goods.length;n++){
      rowRight.innerHTML+=`
      <li>
      <a href="">
      <div class="imgs">
      <img src="${data.date[0].goods[n].goods_img}" alt="">
      </div>
      <p class="title">${data.date[0].goods[n].goods_title}</p>
      <p class="desc">${data.date[0].goods[n].goods_desc}</p>
      <p class="price">${data.date[0].goods[n].goods_price}</p>
      </a>
     </li>
      `
    }
   }
  } else {
   console.log(xhr.status);
  }
 }
