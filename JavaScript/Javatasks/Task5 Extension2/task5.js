//when the selection is changed, the value of the selector is updates, then shown on the console. Did not have the functionality I was hoping for.
      function val() {
        let selection = document.getElementById("operatorSelection").value;
        console.log(selection);
    }
//   Christ this task nearly killed me. So simple URGHKJDFJKSLKFJUTIKRGGG!

    function clicked()
     {
        
        let input1 = parseFloat(document.getElementById("input1").value);
        let input2 = parseFloat(document.getElementById("input2").value);
        let oper =   document.getElementById("operatorSelection").value;
        
        if (oper == "plus") {
            document.getElementById("element").innerHTML = `Value:  ${input1+input2}`;
        }
        if (oper == "minus") {
            document.getElementById("element").innerHTML = `Value:  ${input1-input2}`;
        }
        if (oper == "multi") {
            document.getElementById("element").innerHTML = `Value:  ${input1*input2}`;
        }
        if (oper == "divide") {
            document.getElementById("element").innerHTML = `Value:  ${input1/input2}`;
        }
        if (oper == "meh") {
            window.alert("Woah there buddy, stop playing around with me, that's not an operation.")
            document.getElementById("element").innerHTML = "Value: meh";
        }
    }
    
    /* <option value="plus"> + </option>
      <option value="minus"> - </option>
      <option value="multi"> * </option>
      <option value="divide"> / </option>
      <option value="meh"> meh </option> */

    

//First attempt legacy code
    //   function val() {
    //     selection = document.getElementById("operatorSelection").value;
    //     console.log(selection);
    // }
    
    // let selection = 0;
    
    // let buttoncheck = document.getElementById("theButton");
    // let result = document.getElementById("result");
    
    
    // buttoncheck.onclick = clicked;
    
    // function clicked() {
    //    let selection = document.getElementById("operatorSelection").value;
    //     console.log(selection);
    //     if (selection.value == plus) {
    //         result.innerHTML = "hello this is plus"
    //     }
    // }