const ArrayOne = [1,2,3,4,true,"Tushar"];
const ArrayTwo =["One","Two","Three"];
const myArrayOne = new Array(1,2,3,4);
// console.log(ArrayOne);
// console.log(myArrayOne);

//methods
myArrayOne.push(5,6,7);
//console.log(myArrayOne);
myArrayOne.pop();
//console.log(myArrayOne);

myArrayOne.unshift(0);
//console.log(myArrayOne);
myArrayOne.shift();
//console.log(myArrayOne);
//console.log(myArrayOne.includes(5));
// console.log(myArrayOne.indexOf(4));
console.log(myArrayOne.indexOf(-4));

const nreArr = myArrayOne.join();
// console.log(nreArr);
// console.log(myArrayOne);
// console.log(typeof nreArr);
// console.log(typeof myArrayOne);

//slice splice

const arr1 =[2,4,6,8,10];
const sliceone = arr1.slice(1,4);
// console.log(sliceone);
// console.log(arr1);
const arr2 = [1,2,3,4,5,6]
const spliceOne = arr2.splice(2,3)
// console.log(spliceOne);
// console.log(arr2);


