const muNumbers = [1,2,3,4,5,6,7,8,9];
const mynewNumbers  = muNumbers.map((num)=>{
    return num +10;
}).map((item)=>{
    return item **2;
}).filter((item)=>{
    return item >200
});
console.log(mynewNumbers);