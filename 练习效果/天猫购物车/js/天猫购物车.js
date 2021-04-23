var checkbox2=document.querySelectorAll("#checkbox2");
var checkbox3=document.querySelectorAll("#checkbox3");
var con_center_buttom=document.querySelectorAll(".con_center_buttom");
for(var m=0;m<checkbox2.length;m++){
    checkbox2[m].box=m;
        checkbox2[m].onclick=function(){
            if(this.checked){
                checkbox3[this.box].checked=true;
                con_center_buttom[this.box].style.background="#fff8e1";
            }else{
                checkbox3[this.box].checked=false;
                con_center_buttom[this.box].style.background="#fff";
            }
        }
    } 
    for(var m=0;m<checkbox3.length;m++){
        checkbox3[m].box=m;
            checkbox3[m].onclick=function(){
                if(this.checked){
                    checkbox2[this.box].checked=true;
                    con_center_buttom[this.box].style.background="#fff8e1";
                }else{
                    checkbox2[this.box].checked=false;
                    con_center_buttom[this.box].style.background="#fff";
                }
            }
        } 
var checkbox1=document.querySelector("#checkbox1");
var checkbox4=document.querySelector("#checkbox4");
checkbox1.onclick=function(){
    for(var m=0;m<checkbox2.length;m++){
            if(this.checked){
                checkbox2[m].checked=true;
                checkbox3[m].checked=true;
                checkbox4.checked=true;
                con_center_buttom[m].style.background="#fff8e1";
            }else{
                checkbox2[m].checked=false;
                checkbox3[m].checked=false;
                checkbox4.checked=false;
                con_center_buttom[m].style.background="#fff";
            }
        }
    }
    checkbox4.onclick=function(){
        for(var m=0;m<checkbox2.length;m++){
                if(this.checked){
                    checkbox2[m].checked=true;
                    checkbox3[m].checked=true;
                    con_center_buttom[m].style.background="#fff8e1";
                    checkbox1.checked=true;
                }else{
                    checkbox2[m].checked=false;
                    checkbox3[m].checked=false;
                    con_center_buttom[m].style.background="#fff";
                    checkbox1.checked=false;
                }
            }
        }
        var item=document.getElementsByName(item);
        for(var i=0;i<item.length;i++){
            item[i].onclick=function(){
                        // checkbox1.checked=true;
                        // checkbox4.checked=true;
            for(var m=0;m<item.length;m++){
                if(!item[m].checked){
                    checkbox1.checked=false;
                    checkbox4.checked=false;
                }else{
                
            }
            }
            }
         
        }
var con_center_buttom=document.querySelectorAll(".con_center_buttom");
var con_op2=document.querySelectorAll("#con_op2");
var con_center=document.querySelectorAll(".con_center");
for(var m=0;m<con_op2.length;m++){
  con_op2[m].onclick=function(){
      if(confirm("确定要删除？")==true){
        this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode.parentNode.parentNode.parentNode);
      }
   
  }
}
var con_amount3=document.querySelectorAll("#con_amount3");
var con_sum1=document.querySelectorAll("#con_sum1 b");
var ipt1=document.querySelectorAll("#ipt1");
var con_price_new=document.querySelectorAll("#con_price_new b");
var con_amount1=document.querySelectorAll("#con_amount1");
for(var m=0;m<con_amount3.length;m++){
    con_amount3[m].ab=m;
    con_amount3[m].onclick=function(){
       ipt1[this.ab].value++;
            con_sum1[this.ab].innerHTML=(con_price_new[this.ab].innerHTML* ipt1[this.ab].value)+".00";
            // zongshu2.innerHTML=(ipt1[this.ab].value++)+1;
            // zongjia1.innerHTML=zongjia2.innerHTML=(con_sum1[this.ab].innerHTML);
            var zongjia2=document.querySelector("#zongjia2");
            var zongjia1=document.querySelector("#zongjia1");
            for(var m=0;m<con_sum1.length;m++){
            zongjia1.innerHTML=con_sum1[this.ab].innerHTML;
            }
        }  
    }
    for(var m=0;m<con_amount1.length;m++){
        con_amount1[m].ab=m;
        con_amount1[m].onclick=function(){
            if(ipt1[this.ab].value>1){
                ipt1[this.ab].value--;
                // zongshu2.innerHTML=(ipt1[this.ab].value--)-1;
            }
            con_sum1[this.ab].innerHTML=(con_price_new[this.ab].innerHTML*ipt1[this.ab].value)+".00";
            // zongjia1.innerHTML=zongjia2.innerHTML=(con_sum1[this.ab].innerHTML);

        }

    }
    // var zongjia2=document.querySelector("#zongjia2");
    // var zongjia1=document.querySelector("#zongjia1");
    // for(var m=0;m<con_sum1.length;m++){
    // zongjia1.innerHTML=con_sum1[m].innerHTML;
    // }
    var jianshu=document.querySelector("#jianshu");
    var con_center=document.querySelectorAll(".con_center");
        jianshu.innerHTML=con_center.length;

        // var checkbox2=document.querySelectorAll("#checkbox2");
        // console.log(checkbox2)
        // var zongshu2=document.querySelector("#zongshu2");
        // console.log(zongshu2)
        // for(var m=0;m<checkbox2.length;m++){
        //     if(checkbox2[m].checked){
        //        checkbox2[m].length=zongshu2.innerHTML;
        //     }
            // }else{
            //     zongshu2.innerHTML--;
            // }
        // }
     

