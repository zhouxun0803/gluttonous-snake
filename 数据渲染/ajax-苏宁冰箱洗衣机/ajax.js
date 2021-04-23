function getAjax(url,seccen){
 var xhr;
 if(window.XMLHttpRequest){
  xhr=new XMLHttpRequest();
 }else{
  xhr=new ActiveXObject("Microsoft.XMLHTTP");
 }
 xhr.open("GET",url,true);
 xhr.send();
 xhr.onreadystatechange=function(){
  if(xhr.readyState==4&&xhr.status==200){
   seccen(xhr.responseText);
  }
 }
}