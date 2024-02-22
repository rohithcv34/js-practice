// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data="helloworld";
//             resolve(data)
//         }, 1000);
//     })
// }
// fetchData()



// .then((result)=>{
//  console.log(result)
// })

// .catch((result)=>{
//     console.log(error)
// });

// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data="hello world";
//             resolve(data)
            
//         }, 1000);
//     })
// }

// fetchData()

// .then((result)=>{
//   console.log(result)
// })

// .catch((result)=>{
//     console.log(error)
// });


function myFunction(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data="helloworld";
            resolve(data)
        }, 1000);
    })
}
myFunction()
.then((result)=>{
    console.log(result)
})
.catch((result)=>{
    console.error(err)
})