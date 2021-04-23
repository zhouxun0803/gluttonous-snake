function getAjax(url,seccenFn){
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
   seccenFn(xhr.responseText);
  }
 }
}