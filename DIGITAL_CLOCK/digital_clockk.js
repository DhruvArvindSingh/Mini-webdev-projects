let min = document.getElementById("min");
let sec = document.getElementById("sec");
let a = 0, b = 0;
let status = false;
var id;



function stopwatch() {
    b++;
    if (b == 60) {
        a++;
        b = 0;
        if (a == 60) {
            a = 0;
        }
    }
    min.innerText = `${a}`;
    sec.innerText = `${b}`;
}
let button = document.getElementsByTagName("button");
function start() {
    if (status == false) {
        id = setInterval(stopwatch, 1000);
        status = true;
        console.log("start" + status)
        console.log(id);
        return id;
    }
}
// console.log(id);
// console.log(id);
function stop() {
    if (status == true) {
        clearInterval(id);
        status = false;
        console.log("start" + status);
    }
}
function restart() {
    console.log("clear" + status);
    a = 0; b = 0;
    if (status == true) {
        stop();
    }
    min.innerText = `${a}`;
    sec.innerText = `${b}`;
}






