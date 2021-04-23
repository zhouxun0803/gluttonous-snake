var ipt=document.querySelector("#ipt");
var phone=document.querySelector("#phone");
var yanzhengma=document.querySelector("#yanzhengma");
var pass1=document.querySelector("#pass1");
var pass2=document.querySelector("#pass2");
var p=document.querySelectorAll("p");
var form=document.querySelector("#form");
var tongyi1=document.querySelector("#tongyi1");
// var yonghuming_h4=document.querySelector(".yonghuming p");
var iptreg=/^(?![0-9]+$)(?![^a-zA-Z]+$)[\u4e00-\u9fa5\w]{4,20}$/;
var iptreg1=/^[0-9]{4,20}$/;
ipt.onfocus=function(){
    this.style="border:2px solid green;";
    p[0].innerHTML="请输入4-20的字符，有中文，英文，数字或下划线组成";
    p[0].style="color:green;transform:scale(1);";
}
ipt.onblur=function(){
    if(ipt.value==""){
        p[0].style="display:none;";
        h4.style="display:none;";
        h5.style="transform:scale(1);";
        this.style="border:2px solid red;";
    }else{
        if(iptreg.test(ipt.value)){
             p[0].style="display:none;";
             h4.style="display:none;";
            this.style="border:2px solid green;";
        }else{
            p[0].innerHTML="格式错误";
            this.style="border:2px solid red;";
            p[0].style="color:red;transform:scale(1);";
            if(iptreg1.test(ipt.value)){
                this.style="border:2px solid red;";
                p[0].style="color:red;transform:scale(1);line-height:40px";
                p[0].innerHTML="不能全是数字";
            }
        }
    }
}
var phonereg=/^1[356789]\d{9}$/
phone.onfocus=function(){
    this.style="border:2px solid green;";
}
phone.onblur=function(){
    if(phone.value==""){
        p[1].innerHTML="手机号不能为空";
        p[1].style="color:red;";
        this.style="border:2px solid red;";
    }else{
        if(phonereg.test(phone.value)){
            p[1].innerHTML="格式正确";
            p[1].style="color:green;";
            this.style="border:2px solid green;";
        }else{
            p[1].innerHTML="格式错误";
            this.style="border:2px solid red;";
            p[1].style="color:red;";
        }
    }
}
var yanzhengmareg=/^\d{6}$/
yanzhengma.onfocus=function(){
    this.style="border:2px solid green;width:180px;";

}
yanzhengma.onblur=function(){
    if(yanzhengma.value==""){
        p[2].innerHTML="验证码不能为空";
        p[2].style="color:red;";
        this.style="border:2px solid red;width:180px;";
    }else{
        if(yanzhengmareg.test(yanzhengma.value)){
            p[2].innerHTML="格式正确";
            p[2].style="color:green;";
            this.style="border:2px solid green;width:180px;";
        }else{
            p[2].innerHTML="格式错误";
            this.style="border:2px solid red;width:180px;";
            p[2].style="color:red;";
        }
    }
}
var pass1reg=/^[\w&%#A-Z]{6,20}$/
pass1.onfocus=function(){
    this.style="border:2px solid green";

}
pass1.onblur=function(){
    if(pass1.value==""){
        p[3].innerHTML="密码不能为空";
        p[3].style="color:red;";
        this.style="border:2px solid red";
    }else{
        if(pass1reg.test(pass1.value)){
            p[3].innerHTML="格式正确";
            p[3].style="color:green;";
            this.style="border:2px solid green";
        }else{
            p[3].innerHTML="格式错误";
            this.style="border:2px solid red";
            p[3].style="color:red;";
        }
    }
}

pass2.onfocus=function(){
    this.style="border:2px solid green";

}
pass2.onblur=function(){
    if(pass2.value==""){
        p[4].innerHTML="密码不能为空";
        p[4].style="color:red;";
        this.style="border:2px solid red";
    }else{
        if(pass2.value==pass1.value){
            p[4].innerHTML="格式正确";
            p[4].style="color:green;";
            this.style="border:2px solid green";
        }else{
            p[4].innerHTML="两次输入格式不同";
            this.style="border:2px solid red";
            p[4].style="color:red;";
        }
    }
}
form.onsubmit=function(){
    if(!iptreg.test(ipt.value)||!phonereg.test(phone.value)||!yanzhengmareg.test(yanzhengma.value)||!pass1reg.test(pass1.value)||!pass2reg.test(pass2.value)){
        return false;
    }
   
}
