const p1=new Promise((resolve, reject) => {
    setTimeout(()=>resolve("p1 is success"),1000)
 });
 const p2=new Promise((resolve, reject) => {
     setTimeout(()=>resolve("p2 is success"),3000)
  });
  const p3=new Promise((resolve, reject) => {
     setTimeout(()=>resolve("p3 is success"),2000)
  });
 
 
  Promise.any([p1,p2,p3]).then((res)=>{
     console.log(res)
  })
  .catch((err)=>{
     console.error(err)
  });

// const p1=new Promise((resolve, reject) => {
//     setTimeout(()=>reject("p1 is failure"),1000)
//  });
//  const p2=new Promise((resolve, reject) => {
//      setTimeout(()=>reject("p2 is success"),3000)
//   });
//   const p3=new Promise((resolve, reject) => {
//      setTimeout(()=>reject("p3 is success"),5000)
//   });
 
 
//   Promise.any([p1,p2,p3]).then((res)=>{
//      console.log(res)
//   })
//   .catch((err)=>{
//      console.error(err)
//   });
