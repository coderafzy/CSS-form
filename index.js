function validate(){
    var naam= document.getElementById("name").value ;
    var mail=document.getElementById("email").value ;
    var num=document.getElementById("phone").value ;
    var pas1=document.getElementById("password1").value ;
    var pas2=document.getElementById("password2").value ;

    if(naam==""||naam==null){
        document.getElementById("msg").innerHTML="please enter a valid name!";
        return false;
    }
    if(naam.length<3){
        document.getElementById("msg").innerHTML="name should contain atleast 3 characters!";
        return false;
    }
    if(naam.length>20){
        document.getElementById("msg").innerHTML="name should contain less than 20 characters!";
        return false;
    }
    if(!isNaN(naam)){
        document.getElementById("msg").innerHTML="please enter a vald name!";
        return false;
    }
    if(mail.indexOf('@')<=0){
    document.getElementById("email-msg").innerHTML="invalid @ position!";
        return false;
    }
    if(mail.charAt(mail.length-4)!='.'){
    document.getElementById("email-msg").innerHTML="inavlaid .com position!";
        return false;
    }
    if((num.length>10)||(num.length<10)){
        document.getElementById("phone-msg").innerHTML="phone number contain 10 digits!";
        return false;
    }
    if((pas1.length<5)||(pas1.length>15)){
        document.getElementById("pass1").innerHTML="password should contain 5 to 15 digits!";
        return false;
    }
    if(pas1!=pas2){
        document.getElementById("pass2").innerHTML="passwords does not match!";
        return false;
    }

}