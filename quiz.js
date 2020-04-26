window.onload=function(){
	show(count);

}
var userAnswers=[];

var questions=[
{
question:"Who gave the Theory of Relativity?",
options:[
"Isaac Newton",
"Archimedes",
"Albert Einstein",
"Galileo Galilei"
],
answer:
"Albert Einstein"
},
{
question:"Which of the following branch of Physics deal with study of Atomic Nuclei?",
options:[
"Nuclear Physics",
"Bio Physics",
" Atomic Physics",
"None of the above",
],
answer:
"Nuclear Physics"

},
{
question:"Which one of the following has 'ohm'as its unit?",
options:[
"Resistivity",
"Conductivity",
"Conductance",
"Inductive Reactance",
],
answer:"Inductive Reactance"

},
{
question:"Light year is a unit of which of these following?",
options:[
"distance",
"time",
"pressure",
"power",
],
answer:"distance"

},

{
question:"A projectile will achieve maximum horizontal range at which angle?",
options:[
"90 deg",
"60 deg",
"45 deg",
"30 deg"

],
answer:"45 deg"

},
{
question:"Which of the following is correct about Kinetic energy during the projectile motion?",
options:[
"it is minimum at the point of projection",
" it is minimum at the highest point",
"it is maximum at the highest point",
"it is minimum at the point of reaching the ground"

],
answer:"it is minimum at the highest point"

},
{
question:"What happens to the orbital velocity of a satellite when the radius of orbit is increased?",
options:[
"it decreases",
"it increases",
"remains same",
"none of the above"

],
answer:"it decreases"

},
{
question:"Which of the following is correct about Pressure?",
options:[
"Pressure is a scalar quantity",
"Pressure is a vector quantity",
"Pressure is a scalar quantity but obeys vector laws",
"None of the above"

],
answer:"Pressure is a scalar quantity"

},
{
question:"Who was the first to state the principle of floatation?",
options:[
"Isaac Newton",
"Archimedes",
"Aristotle",
"Galileo Galilei"

],
answer:"Archimedes"

},
{
question:"Who discovered electron",
options:[
"JJ thomson",
"Rutherford",
"Chadvic",
"Newton"

],
answer:"JJ thomson"

}



];
var userAnswers=[];


function submitForm(e){

e.preventDefault();
let name=document.forms["welcome"]["name"].value;
sessionStorage.setItem("name",name);
console.log(name);
location.href="question.html"
}

var count=0;
var userName=sessionStorage.getItem("name",name);
document.querySelector("#welcomeHeading").innerHTML="WELCOME"+" "+userName.toUpperCase();
function next(){
count++;

}

function show(count){
this.counter=count;
	document.querySelector(".quiz").innerHTML=`<h1 class="quiz">${questions[counter].question}</h1>
 <ul>

<li class="option1 option" onclick="toggle1()">${questions[counter].options[0]}</li>
<li class="option2 option" onclick="toggle2()">${questions[counter].options[1]}</li>
<li class="option3 option" onclick="toggle3()">${questions[counter].options[2]}</li>
<li class="option4 option" onclick="toggle4()">${questions[counter].options[3]}</li>

 </ul>`;
	
counter++;
console.log(questions.length);
}

var incre=0;
var point=0;
function userAnswer(){

if(incre==questions.length-1){
point++;
location.href="result.html";

}

if(userAnswers==questions[incre].answer){

	
	point++;
	sessionStorage.setItem("point",point);
	
}
else {
	console.log("wrong");
	
}

incre++;

	next();
show(count);
userAnswers.pop();


}


document.querySelector("#Next").addEventListener("click",function(){

next();
show(count);
userAnswers.pop();
console.log(userAnswers);

});


function toggle1(){
document.querySelector("li.option1").classList.add("active");
document.querySelector("li.option2").classList.remove("active");
document.querySelector("li.option4").classList.remove("active");
document.querySelector("li.option3").classList.remove("active");
var userAnswer1=document.querySelector("li.option1").innerHTML;
userAnswers.push(userAnswer1);

}
function toggle2(){

document.querySelector("li.option2").classList.add("active");
document.querySelector("li.option1").classList.remove("active");
document.querySelector("li.option4").classList.remove("active");
document.querySelector("li.option3").classList.remove("active");
var userAnswer2=document.querySelector("li.option2").innerHTML;
userAnswers.push(userAnswer2);
}
function toggle3(){

document.querySelector("li.option3").classList.add("active");
	document.querySelector("li.option2").classList.remove("active");
document.querySelector("li.option1").classList.remove("active");
document.querySelector("li.option4").classList.remove("active");
var userAnswer3=document.querySelector("li.option3").innerHTML;
userAnswers.push(userAnswer3);
}

function toggle4(){
document.querySelector("li.option4").classList.add("active");
document.querySelector("li.option3").classList.remove("active");
	document.querySelector("li.option2").classList.remove("active");
document.querySelector("li.option1").classList.remove("active");
var userAnswer4=document.querySelector("li.option4").innerHTML;
userAnswers.push(userAnswer4);


}




