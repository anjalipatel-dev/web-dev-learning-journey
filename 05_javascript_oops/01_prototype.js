let computer = {cpu:12};
let lenovo ={screen:'HD'};
let dell ={ram:8};
console.log('computer', computer.__proto__);
let mac ={
    company:"Apple",
    __proto__:computer
};
console.log('mac', mac.__proto__);
Object.setPrototypeOf(dell, computer);
console.log('dell', Object.getPrototypeOf(dell));
