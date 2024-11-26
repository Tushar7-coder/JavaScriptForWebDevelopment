function sum (num1,num2){
    console.log(num1+num2);
    
}
//sum(3,"4");
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
const ouput =loginUserMessage()
//console.log(ouput)
const output2 = loginUserMessage("Tushar");
//console.log(output2)

function calculateCartPrice (...num1){
    return num1;
}
//console.log(calculateCartPrice(200,300,400));


//object

const user ={
    userName :"Tushar",
    price : 249
}

function handleObject (anyObject){
    console.log(`User name is ${anyObject.userName} and price is ${anyObject.price}`)
};
// handleObject(user);
// handleObject({ userName :"Tushar",
//     price : 299})


//Array
const newArray =[2,3,4,5,6];
function returnArray (getArray){
    return getArray[1];
}
console.log(returnArray(newArray))