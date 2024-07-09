let input = "0";
function display(value) {
    if (value == "=") {
        input = Answer();
    }
    if (value == "clearall") {
        input = "0";
    }
    else if (value == "remove") {
        input = input.slice(0, input.length - 1);
        console.log(input);
    }
    else if (input == 0) {
        input = value;
    }
    else {
        input = input.concat(`${value}`)
    }
    let display = document.getElementById("display");
    display.innerHTML = `<span>${input}</span>`
    // let button = document.getElementsByClassName("button");
}
function Answer() {
    let n1, n2, op;

    for (let i = 0; i < input.length; i++) {
        if (input[i] == "/" || input[i] == "x" || input[i] == "-" || input[i] == "+") {
            n1 = input.slice(0, i);
            n1 = Number.parseFloat(n1);
            op = input[i];
            n2 = input.slice(i + 1, input.length);
            n2 = Number.parseFloat(n2);
            break;
        }
    }
    if (op == "+") {
        input = n1 + n2;
        input = `${input}`;
    }
    if (op == "-") {
        input = n1 - n2;
        input = `${input}`;
    }
    if (op == "/") {
        input = n1 / n2;
        input = `${input}`;
    }
    if (op == "x") {
        input = n1 * n2;
        input = `${input}`;
    }
    let display = document.getElementById("display");
    display.innerHTML = `<span>${input}</span>`
    // console.log(n1)
    // console.log(n2)
    // console.log(op)
    // console.log(input);
    return input;

}