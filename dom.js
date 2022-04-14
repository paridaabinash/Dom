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

// Document Object: The document object represent a web page that is loaded in the browser. 
// By accessing the document object, we can access the element in the HTML page. 
// With the help of document objects, we can add dynamic content to our web page. 
// The document object can be accessed with a window.document or just document.

// It represents any HTML document or web page that is loaded in the browser.
// It is loaded inside the window.
// It is the object of window property.
// All the tags, elements with attributes in HTML are part of the document.
// We can access the document from a window using the window. document
// The document is part of BOM (browser object model) and dom (Document object model)
// Properties of document objects such as title, body, cookies, etc can also be accessed by a window like this window. document.title

// syntax: document.propertyname;

// example: document.title :  will return the title of the document


//------------------------------------------------------------------------------------------


// Window Object: The window object is the topmost object of the DOM hierarchy. 
// It represents a browser window or frame that displays the contents of the webpage. 
// Whenever a window appears on the screen to display the contents of the document, the window object is created. 

// It represents a browser window or frame that displays the contents of the webpage.
// It is the very first object that is loaded in the browser.
// It is the object of the browser.
// Global objects, functions, and variables of JavaScript are members of the window object.
// We can access the window from the window only. i.e. window.window
// The window is part of BOM, not DOM.
// Properties of the window object cannot be accessed by the document object.

// syntax: window.propertyname;

// example: window.innerHeight : will return the height of the content area of the browser



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













