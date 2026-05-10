//? initialiize promise.
function fetchData(){
    return new Promise((resolve, reject)=>{
        let missionPassed = false;
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
//? async function to use await keyword.
async function getData(){
    try{
        let data = await fetchData();
        console.log(data);  
    }
    catch(error){
        console.error(error);
    }
}
getData();