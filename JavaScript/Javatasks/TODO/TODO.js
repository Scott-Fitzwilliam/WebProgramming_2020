//Let MyCode = document.PleaseGod("Work");
let addButton = document.getElementById("addButton");
let clearAllButton = document.getElementById("clearButton");
let elements1 = document.getElementById("elements1");
let elements2 = document.getElementById("elements2");
let elements3 = document.getElementById("elements3");
let operatorSelection = document.getElementById("operatorSelection");

//console.log(clearAllButton.innerHTML);

/*some array stuff to create memory of elements created in the code
so that it can be referenced in other parts of the code.
*/
let NewListItemArray = []

addButton.onclick = function() {

    //Stores user input
    let input1 = document.getElementById("input1").value;

    // Initialises NewListItem template 
    let NewListItem = document.createElement("div");
    let NewListItemText = document.createTextNode(input1);
    if (NewListItemText.value == null) {
        window.alert(".... Must be nice to want for nothin ehh?")
    }
    console.log(NewListItemText.textContent);


    //Creates completion checkBox
    var checkBox = document.createElement("input");
    checkBox.setAttribute("type", "checkbox");

    // creates remove button
    let removeButton = document.createElement("button");
    removeButton.innerHTML = "x"

    //gets users selected selection for list i.e kill, slap or shopping
    let oper = document.getElementById("operatorSelection").value;

    /* Once NewListItem is defined, you do not keep using (= to something), you can simply add or manipulate the element with.
       NewListItem.innerHTML = appendChild(document.createTextNode("Hello world")) |this doesn't work|
       NewListItem.appendChild(NewListItemText); |this does work|
    */

    //the first append child adds text, the second adds a checkbox, the third adds a remove button to  NewListItem
    NewListItem.appendChild(NewListItemText);
    NewListItem.appendChild(checkBox);
    NewListItem.appendChild(removeButton);
    console.log(oper);
    //and the fourth assigns NewListItem to the correct parent div.
    if (oper == "shoppingList") {
        elements1.appendChild(NewListItem);
    }
    if (oper == "killList") {
        elements2.appendChild(NewListItem);
    }
    if (oper == "slapList") {
        elements3.appendChild(NewListItem);
    }
    

    //Adding to the array
    NewListItemArray.push(NewListItem);
    console.log(NewListItemArray);

    checkBox.onclick = function () {
        if (NewListItem.style.backgroundColor == "red") {
            window.alert(`Good to see you didn't give up on ${NewListItemText.textContent}`)
        }
            if (checkBox.checked == true) {
                checkBox.parentElement.style.textDecoration = "line-through";
                checkBox.parentElement.style.backgroundColor = "green"
            }  else{
                NewListItem.style.textDecoration = "none"
            }     
         
    }

    removeButton.onclick = function () {
        if (NewListItem.style.backgroundColor == "red") {

            //Remove element from correct list
            if (oper == "shoppingList") {
                elements1.removeChild(NewListItem);
            }
            if (oper == "killList") {
                elements2.removeChild(NewListItem);
            }
            if (oper == "slapList") {
                elements3.removeChild(NewListItem);
            }

            for (let i = 0; i < NewListItemArray.length; i++) {
                    /* An array using .indexof(NewListItem) gives the value of the specific element. 
                    It lets you isolate and manipulate that element */
                if (i == NewListItemArray.indexOf(NewListItem)) {
                    //Removing from the array
                    NewListItemArray.splice(i, 1);
                    console.log(NewListItemArray); 
                    //NewListItemArray.indexOf(NewListItem) gives the index value of the specific element so if this element is
                    //the third element you created, then .indexOf(NewListItem) = 3 and when i = 3 the if(true) so it will delete the 3rd element)
                    //as splice (i, 1) =  splice (3, 1)  the the 1 represents how many element to cut. splice (3, 2) would delete element 3 AND 4.
                    //Yay for making a functioning array monitor
                    b
                }
            }
        }  
        if (NewListItem.style.backgroundColor == "green") {
            window.alert(`Woah, wait a minute, you want to set it to red?!? Oh,you just want to delete ${NewListItemText.textContent}? Oh... ok...`)
            checkBox.parentElement.style.textDecoration = "underline";
        }
            NewListItem.style.backgroundColor = "red";
    }
}

clearButton.onclick = function() {
    NewListItemArray.forEach(function(element) {
        elements1.innerHTML = "Shopping List";
        elements2.innerHTML = "Kill Queue";
        elements3.innerHTML = "Slap Queue";

        NewListItemArray.splice(element, NewListItemArray.length);
        console.log(NewListItemArray);
    } )
}

//appendChild adds something to the element such as a h3 element
//removeChild does the opposite


