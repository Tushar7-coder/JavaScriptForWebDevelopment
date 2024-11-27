const myNums = [1,2,3];
// const mytotal = myNums.reduce((accumulator,current)=>{
//     console.log(`acc : ${accumulator} and curr : ${current}`);
//     return accumulator + current;
    
// },0);
//console.log(mytotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const finalPrice = shoppingCart.reduce((accu,curr)=>{
   return accu + curr.price;
},0);
console.log(finalPrice);