const obj1 = new Object();
// console.log(obj1);
obj1.id ="123";
obj1.name ="Name one";
obj1.isLogin = true;
//console.log(obj1)

const regularUser = {
    email : "user@gmail.com",
    name : {
        firstName : "Tushar",
        lastname : "Kanta",
    }
}
// console.log(regularUser.name.lastname)

const obj2 = {
    name : "two",
    age :2
}
const obj3 = {
    name:"three",
    age:3
}
// const obj4 = Object.assign({},obj2,obj3);
// console.log(obj4);
const obj5 = {...obj2,...obj3}
// console.log(obj5)


//destructuring

const course ={
    coursename : "js ",
    courseInstruction: "hitesh choudhury",
    price : 999,
};
 const {courseInstruction}= course;
 const {price : coursePrice} = course;
 console.log(courseInstruction);
 console.log(coursePrice);
