const mySchool =Symbol ("Ssvm");


const jsUser ={
    name :"Tushar",
    "full name" : "Tusharkanta Bihari",
    age : 23,
    email : "tushar@gmail.com",
    idLogin : false,
    lastLoginDay : ["MOnday"],
    [mySchool] : "Saraswati sishu vidya mandir"
}
// console.log(jsUser.email);
// console.log(jsUser["age"]);
// console.log(jsUser["full name"])


// console.log(jsUser[mySchool])
// console.log(typeof jsUser[mySchool])

//jsUser.email = "likutusar@gmail.com";
// console.log(jsUser);
// Object.freeze(jsUser);

// Object.seal(jsUser);
// jsUser.languageKnown = ["js","python","java"];
// jsUser.email = "myasusa15@gmail.com"
// console.log(jsUser);

jsUser.greetings = ()=>{
    console.log("Hello");
}
console.log(jsUser)