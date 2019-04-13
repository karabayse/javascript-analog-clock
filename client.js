const HOURHAND = document.querySelector('#hour');
const MINUTEHAND = document.querySelector('#minute');
const SECONDHAND = document.querySelector('#second');

let hrPosition = 20;
let minPosition = 130;
let secPosition = 267;

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + "Minute: " + min + "Second: " + sec);

let hrPosition = (hr*360/12) + (min*(360/60)/12);
let minPosition =
let secPosition =
