const obj1 = {
    name:"Tushar",
    "age" :23,
    "school" :"ssvm"
}
for(const key in obj1){
    console.log(`${key} - ${obj1[key]}`)
}

const arr =[1,23,4,5,6];
for(i in arr){
    console.log(arr[i]);
}