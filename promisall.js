
// const p1= new Promise((resolve, reject) => {
//     setTimeout(()=>resolve("p1 is success"),3000);
// });


// const p2= new Promise((resolve, reject) => {
//     setTimeout(()=>resolve("p1 is success"),3000);
// });
// const p3= new Promise((resolve, reject) => {
//     setTimeout(()=>resolve("p1 is success"),3000);
// });

// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res)
// });

// const p1= new Promise((resolve, reject) => {
//     setTimeout(()=>resolve("p1 is success"),3000);
// });


// const p2= new Promise((resolve, reject) => {
//     setTimeout(()=>reject("p2 is fail"),1000);{what if 1 promise failss}
// });
// const p3= new Promise((resolve, reject) => {
//     setTimeout(()=>resolve("p3 is success"),2000);
// });
// Promise.all([p1,p2,p3]).then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
// console.error(err)

// });