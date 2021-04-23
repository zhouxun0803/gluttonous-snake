function getAjax(url,seccen,error){
 var xhr;
 try{
  xhr=new XMLHttpRequest();
 }catch(e){
  xhr=new ActiveXObject("Microsoft.XMLHTTP");
 }
 xhr.open("GET",url,true);
 xhr.send();
 xhr.onreadystatechange=function(){
  if(xhr.readyState==4&&xhr.status==200){
   seccen(xhr.responseText);
  }else{
   error(xhr.status);
  }
 }
}