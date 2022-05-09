var nav12 =  document.querySelector("#petselect1")
nav12.addEventListener("click",navshivam);
function navshivam(){
    if(nav12.value=="all"){
    window.location.href="productpage.html";
   nav12.value = "ttt";
}
if(nav12.value=="dog"){
    window.location.href="shorts.html";
   nav12.value = "ttt";
}
if(nav12.value=="cat"){
    window.location.href="tshirt.html";
   nav12.value = "ttt";
}
if(nav12.value=="hamster"){
    window.location.href="swim.html";
   nav12.value = "ttt";
}
if(nav12.value=="parrot"){
    window.location.href="pajama.html";
   nav12.value = "ttt";
}
if(nav12.value=="spider"){
    window.location.href="boxer.html";
   nav12.value = "ttt";
}
if(nav12.value=="coating"){
    window.location.href="coat.html";
   nav12.value = "ttt";
}
if(nav12.value=="walleting"){
    window.location.href="wallet.html";
   nav12.value = "ttt";
}

}
var vai = document.querySelector("#signin11")
vai.innerText=JSON.parse(localStorage.getItem("name2"))||"Sign In";
vai.addEventListener("click",shivam);
function shivam(){
  if(vai.innerText=="Sign In"){
    window.location.href="signup.html";
  }
}


var fab1 = document.querySelector("#heart1>h6");
fab1.innerText=favouritesArr.length
if(favouritesArr.length==0){
  fab1.innerText="";
}

var fab2 = document.querySelector("#bag1>h6");
fab2.innerText=bagArr.length
if(bagArr.length==0){
  fab2.innerText="";
}