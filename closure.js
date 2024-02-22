// function outerFunction(outerVariable){
//   function innerFunction(innerVariable){
//     console.log('outer variable:',outerVariable);
//     console.log('inner variable:',innerVariable)
//   }
//   return innerFunction;
// }
// const closure1 =outerFunction('closure1'); 
// const closure2 =outerFunction('closure2');

// closure1('Inner 1');
// closure2('Inner 2');

// function outerFunction(outerVariable) {

//   function innerFunction(innerVariable) {
   
//     console.log('Outer Variable:', outerVariable);
//     console.log('Inner Variable:', innerVariable);
//   }

//   return innerFunction;
// }


// const closure1 = outerFunction('Closure 1');
// const closure2 = outerFunction('Closure 2');


// closure1('Inner 1'); 
// closure2('Inner 2'); 

function outerFunction(outerVariable){
  function innerFunction(innerVariable){
    console.log("outer variable :",outerVariable)
    console.log("inner variable :",innerVariable)
  }
  return innerFunction;
}

const closure1 =outerFunction('closure 1');
const closure2 =outerFunction('closure 2');

closure1('inner1');
closure2('inner2');