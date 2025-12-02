//?promises
//? A Promise is an object representing the eventual completion or failure of an asynchronous operation.

//* Creating a Promise
function fetchData(){
    return new Promise((resolve, reject)=>{
        let missionPassed = true;
        setTimeout(()=>{
            if(missionPassed===true){
                resolve("Congratulations! Your mission successful");
            }
            else{
                reject("Don't  Worry, try again!");
            }
        },3000)
    })
}
fetchData()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.error(error);
})
