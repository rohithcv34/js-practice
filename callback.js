// function fetchData(callback){
//     setTimeout(() => {
//         const data="helloworld";
//         callback(data)
//     }, 1000);
// }

// fetchData((result)=>{
//     console.log(result);
// });
function myFunction(callback){
    setTimeout(() => {
        const data="helloworld";
        callback(data)
        
    }, 3000);
}

myFunction((result)=>{
    console.log(result)
});

