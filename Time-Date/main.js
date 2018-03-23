
var d = new Date();
var n = d.getDay()
var t = d.getHours()
var m = d.getMinutes()
var s = d.getSeconds()
if(n==1){
    n= "Monday";
} else if(n==2) {
    n= "Thursday";
} else if(n==3) {
    n= "Wednesday";
} else if(n==4) {
    n= "Tusday";
} else if(n==5) {
    n= "Friday";
} else if(n==6) {
    n= "Suturday";
} else if(n==7) {
    n= "Sunday"
}


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

document.getElementById("date").innerHTML = "Today is " + n;



