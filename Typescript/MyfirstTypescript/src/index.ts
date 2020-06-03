//the purpose of the src folder is have a place to put all the source code (the to be compiled code)
//the dist folder is for the output of our code.
//you can do normal website js
let myButton = document.getElementById("myButton");
if(myButton == null) {
    alert("Button not found");
} else{
//An error occurs because the strict null checks from tsconfig is on.
//The if statement solves this issue by preventing a null.
myButton.onclick = function() {
    alert("Hello World");

    }
}     