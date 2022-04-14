// Q1
document.getElementById("text");
// Q2
document.getElementsByTagName("h1");
// Q3
document.getElementsByClassName("box");
// Q4
document.getElementsByTagName("h1")[0].innerText = "Hello World";

// Q5
function changef() {
document.getElementsByClassName("contain")[0].style.flexDirection = "column";
}

// Q6
// What's the difference between window vs document?


// Q7
let h1 = document.getElementsByTagName("h1")[0]
h1.id = "heading";
h1.style = "color:red";

// Q8
function replacetext() {
    document.getElementById("replace").innerText = "Welcome to Elevation Academy"
}

// Q9
function time() {
var time = new Date();

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");

hour.innerText = time.getHours();
minute.innerText = time.getMinutes();
second.innerText = time.getSeconds();
}
time();
var oneseconds = 1000;
setInterval(time, oneseconds);

// Q10
function updateyear(){
let year = document.getElementById("year");
let update = year.options[year.selectedIndex].innerText;
document.getElementById("updatey").innerText = "Year is: " + update;
}
updateyear();













