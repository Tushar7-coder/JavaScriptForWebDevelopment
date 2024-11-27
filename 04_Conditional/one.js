//if
const isLogin = true;
const temeprature = 41;
// if(temeprature === 40){
//     console.log("less than 40 ")
// }
// else{
//     console.log("temperature is greater than 50")
// }

// < ,> , <=,>=, ==,!=, ===,!==
// const balance = 1000;
// if(balance <0){
//     console.log("less than 0")
// }else if(balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 750")
// }else{
//     console.log("greater than equal 1000")
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}