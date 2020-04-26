var UserName=sessionStorage.getItem("name");
var Score=sessionStorage.getItem("point");

document.querySelector("#result").innerHTML="WELL DONE :"+" "+UserName.toUpperCase();
document.querySelector("#score").innerHTML="YOU'VE SCORED"+" "+Score+" "+"POINTS.";
