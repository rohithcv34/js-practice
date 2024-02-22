function* countGenerator(){
    let count=0;
while(true){
    yield count++;
}
}
const counter=countGenerator;

console.log(counter.next().value);