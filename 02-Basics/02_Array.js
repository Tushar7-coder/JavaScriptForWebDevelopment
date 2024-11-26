const fruits = ["apple","banana","orange"]
const name =["tushar","liku","dugu","samrat"];


// console.log(fruits.push(name))
// console.log(fruits)


// const third =fruits.concat(name);
// console.log(third);

//push => esisting array
//concat => in a new array


const third = [...fruits,...name];;
// console.log(third)

const anotherArray =[1,2,[3,4],5,6,7,["a","v","c",[1,2,3,4]],8];
const flatteArray = anotherArray.flat(Infinity)
//console.log(flatteArray)


//from

const name2 = "Tushar";
// console.log(Array.isArray(name2))
// console.log(Array.from(name2));

const nameOne = "Tushar";
const nameTwo = "Liku";
const nameThree = "Shreekant"
console.log(Array.of(nameOne,nameTwo,nameThree))