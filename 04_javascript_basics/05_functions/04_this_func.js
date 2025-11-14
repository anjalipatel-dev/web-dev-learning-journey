function thisFunction() {
    console.log(this);
}

thisFunction(); // In a browser, this will log the Window object

()=>{
    console.log(this);
}; // In a browser, this will log the Window object   