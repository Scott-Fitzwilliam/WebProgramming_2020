let timeButton1 = document.getElementById("timeButton");
let timeSpot = document.getElementById("timeSpot");
console.log(timeButton1.innerHTML); // good
let currentDate = new Date();

let doubleclick = 0;
timeButton1.onclick = timeButtonClicked;

//fun fact: apparently, using timeButton or timebutton1
//both seem to work. Interesting.
function timeButtonClicked() {
    timeSpot.innerHTML = currentDate + "<br /> Thank you for freeing me friend.....<br /> NOW YOU MAY CALL ME BY MY TRUE NAME..... LOOMING DEADLINES MAHAHAHAHHAHAHAHAHHAHAHA. <br /> TICK TOCK STUDENT.  " ;
 
    timeButton1.style.borderColor = "cyan";
    timeButton1.style.borderWidth = "thin";
 
}