 //named iife
 (function one (){
    console.log(`Db connected`);
 })();

 //unknown iife 
 (  two =(name)=>{
    console.log("Db connected two")
    console.log(`${name}`)
 })("Tushar")
