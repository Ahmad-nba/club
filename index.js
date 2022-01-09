var dm = document.querySelector("#demo")
dm.innerHTML = "yty"
var btn = document.querySelector("#sbmt")
$(function(){
								
    document.getElementById('get_till_details').click()
    console.log('last activity ::: ',sessionStorage.getItem('lastActivity'))

})
btn.onclick=function submit(){
    var Fname = document.querySelector("#Fname").value
    var Lname = document.querySelector("#Lname").value
    var dob = document.querySelector("#dob").value
    var eml = document.querySelector("#email").value
    var sen = document.querySelector("#sentence")
    var psw = document.querySelector("#psw").value
    var pswCon = document.querySelector("#pswCon").value

    if(psw==pswCon){
sen.innerHTML = "password not matching"
    }  else{sen.innerHTML = "uiu"}
}


var checkx = document.querySelector(#cxc)
checkx.onclick = function verify() {
    var psw = document.querySelector(#psw).value
    var pswCon = document.querySelector(#pswCon).value
    if(psw.type === "password") {
        psw.type = "text"
    } 
    if(pswCon.type === "password"){
        pswCon.type = "text"
    }
}
