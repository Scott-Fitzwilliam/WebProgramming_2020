//This is notes for things that need to be remember or are useful from Lochi's classes and recordings
//Also other good misc stuff


/*  Since I found this difficult to impliment and because coping until it works isn't learning, notes on the creation of an element
that serves a function that is not pre-created in html is needed, clearly.
Ok, first off the 1st and 2nd line simply create a variable in js to match the html. This is not currently necessary you can chane the name of the variable
but can still refernece the variable directly i.e  doSomethingButton.onclick and doSomethingButton1.onclick will both work. 
Interestingly, even when you want to change the html, but use i.e doSomethingButton1, that is simply referencing it, it will still change the orginal content
as if the equality went both ways.

For an example
let contentA = 6
now
let contentB = document.getElementById("contentA");
therefore contentB = 6
from what i can tell, if you run the function contentB.innerHTML = "Hello World!",
this will not just make contentB = "Hello World!" which is just a variable that actually doesn't show up on the page
 it will make contentA = "Hello World!" which is the orginal html, which is therefore seen on the page. 
 As far as i can tell this means that when you write let contentB = document.getElementById("contentA");
 not only are saying that ContentA = ContentB but that ContentB = ContentA therefore ContentA == ContentB
The below code from the testing ground illustrates
*/
    <div id="ContentA"> 6 </div>

    let ContentB = document.getElementById("ContentA");
    let ContentC = document.getElementById("ContentA");
    ContentB.innerHTML = 7;
    console.log(ContentA.innerHTML);
    console.log(ContentB.innerHTML);
    console.log(ContentC.innerHTML);


//By keep the creation and appending outside the onclick
//we don't keep creating new elements, it doesn't work if they arn't together (append and create.)
//This is the child we are creating to hold text
let myNewElement = document.createElement("div");
//This is adding myNewElement to element, child to parent
element.appendChild(myNewElement);
myNewElement.innerHTML = "Value:"
/*


*/



//By keep the creation and appending outside the onclick
//we don't keep creating new elements, it doesn't work if they arn't together (append and create.)
//This is the child we are creating to hold text
