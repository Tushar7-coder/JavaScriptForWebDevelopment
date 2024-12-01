// const promiseOne = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Async task is compled");
//         resolve();
//     }, 2000);
// })

// promiseOne.then(()=>{
//     console.log("promise one consumed")
// })


// const promiseTwo = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async task 2 is completed");
//         resolve();
//     },4000)
// })
// promiseTwo.then(()=>{
//     console.log("promise two is consumed")
// })

// const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({userName : "Tushar",Email : "tusharkantabihari4474@gmail.com"});

//     },5000)
// })


// promiseThree.then((user)=>{
//     console.log(user);
//     console.log(user.Email)
// })



const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({userName : "Tushar", age : 23})
        }else{
            reject("Error : Something went wrong")
        }
    },2000)
})
promiseFour.then((user)=>{
    console.log(user);
    return user.userName
}).then((userName)=>{
    console.log(userName)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    console.log("The probblem is either resolved or rejected ")
})

