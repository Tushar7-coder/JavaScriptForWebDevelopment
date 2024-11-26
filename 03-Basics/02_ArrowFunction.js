const user ={
    userName : "Tushar",
    price : 999,
    welcomeMEssage : function (){
        console.log(`${this.userName}, welcome to website `);
        console.log(this);
        
    },

}
// user.welcomeMEssage()
// console.log(this);

function name() {
    console.log(this);
}
// name()


const chai = ()=>{
    let useName = "Tushar";
    console.log(this.useName);
    console.log(this)
    
}
// chai();

const addTwo = (num1,num2)=>{
    return num1+ num2;
}
console.log(addTwo(3,4));