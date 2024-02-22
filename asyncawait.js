// function fetchData(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             const data="hello world"
//             resolve(data);
//         }, 1000);
//     })
// }

// async function fetchDataAndLog(){
//     const result= await fetchData();
//     console.log(result)

// }
// fetchDataAndLog();
 

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        const data="hello world"
        resolve(data)
            
        }, 3000);
    })
}

async function  fetchDataAndLog(){
    const result= await fetchData();
    console.log(result)
}

fetchDataAndLog();



