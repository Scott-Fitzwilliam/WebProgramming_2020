/* First attempt legacy code
 let input1 = document.getElementById("input1");
 let input2 = document.getElementById("input2");
 */

let doSomethingButton = document.getElementById("doSomethingButton");
let element = document.getElementById("element");

//By keep the creation and appending outside the onclick
//we don't keep creating new elements, it doesn't work if they arn't together (append and create.)
//This is the child we are creating to hold text
let myNewElement = document.createElement("p");
//This is adding myNewElement to element, child to parent
element.appendChild(myNewElement);
myNewElement.innerHTML = "Value:"

doSomethingButton.onclick = calculate;
function calculate() {
    //This way prevents creating a variable ("input1") and then having to  parseFloat(input1).value later. saves creating unecessary variables.
    let inputValue1 =  parseFloat(document.getElementById("input1").value);
    let inputValue2 =  parseFloat(document.getElementById("input2").value);
    //This is the text we are creating
    // Create text in the new element with the sum of inputs.
    myNewElement.innerHTML = `Value:  ${inputValue1 + inputValue2}` ;
}
