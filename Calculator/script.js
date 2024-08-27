let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = ""; // result store
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                string = eval(string); // Evaluate the expression
                input.value = string;
            } catch {
                input.value = "Error"; // Display error for invalid expressions
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string; // Update input box after deleting the last character
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
