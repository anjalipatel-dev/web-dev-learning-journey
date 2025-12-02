//?setTimeout example
console.log("Script start");

setTimeout(function() {
    console.log("This message is shown after 2 seconds");
}, 2000);

console.log("Script end");
//?setInterval example
let count = 0;
let intervalId = setInterval(()=>{
    count++;
    console.log(count);

},1000);
setTimeout(()=>{
clearInterval(intervalId);
},10000)
