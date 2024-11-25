// Primitive ----> call by value 
// NonPrimitve / Reference type ---> call by reference

//primitve => "string",Number , Boolean ,Null,undefined,Symbool , BigInt

const name = "Tushar";
const score =100;
const score2 =100.2;
const isLogin = true;
const number = null;
var number2;
const id =Symbol ("123");
const anotherID = Symbol ("123");
// console.log( id == anotherID);
// console.log(id === anotherID);
const bigINteger = 123456678n;
// console.log( typeof bigINteger)

 


//Reference type (non-primitive) => Array, object ,functions

const array = [1,2,3,4,"Tushar",true,null,undefined]

const myObj = {
    name : "Tushar",
    age :23,

}

const myFunction = ()=>{
    return "Tushar";
}
// console.log(typeof myFunction);
// console.log( typeof array);
// console.log( typeof myObj);

const object1 ={
    name:"tushar",
    email : "tiushar@gmail.com "

}
const object2 = object1;
console.log(object1);
console.log(object2);

object2.email ="tushar@google.com"
console.log(object1);
console.log(object2);
