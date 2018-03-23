
var d = new Date();
var n = d.getDay()
var t = d.getHours()
var m = d.getMinutes()
var s = d.getSeconds()

let nn = ["zero","Monday","Thursday","Wednesday","Tusday","Friday","Suturday","Sunday"];
let nnn = nn[n];

let tt = t;
if (tt > 12 && tt != 0) {
    let minus = tt - 10
    let minus1 = minus - 2
    let cc = minus1
    document.getElementById("time").innerHTML = "Current time is: " + cc + " PM" + ": " + m + ": " + s;
} else if (tt == 0) {
    let cc = 12
    document.getElementById("time").innerHTML = "Current time is: " + cc + " PM" + ": " + m + ": " + s;
} else {
    document.getElementById("time").innerHTML = "Current time is: " + t + " AM" + ": " + m + ": " + s;
}

document.getElementById("date").innerHTML = "Today is " + nnn;



