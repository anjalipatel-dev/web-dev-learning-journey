function getPostData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("fetched post data successfully");
        },3000)
    })
}
function getCommentData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("fetched comment data successfully");
        },3000)
    })
}
async function useData(){
    try{

        const [postData,commentData]=await Promise.all([getPostData(),getCommentData()]);
        console.log(postData);
        console.log(commentData);

    }
    catch(error){
        console.error(error);

    }
}
useData();