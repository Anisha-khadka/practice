//spread
//example1 for array
const dep1=['anisha','garima'];
const dep2=['swostika','utsab'];
const dep=[...dep1,...dep2];
console.log(dep);
//exmple2 for object
const student={name:"Anisha",age:22}
const student2={...student,age:33}
console.log(student2)
//rest
const dummy=(...data)=>{
console.log(data);
}
dummy(1,2,3,4)
