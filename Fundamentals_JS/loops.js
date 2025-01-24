//loops
let sum=0;
for(let i=0;i<=5;i++){
    sum=sum+i;
}
//console.log(i)//this throws an error as let i dies in that block
console.log("sum=",sum);
console.log("Loop has ended");

let j=0;
while(j<5){
    console.log("Hey");
    j++
}
let k=0;
do{
    console.log("ar");
    k++
}while(k<0)

    //for-of loop
let str="aryan";
let size=0;
for(let i of str){
    console.log(i);
    size++
}
console.log(size);

//for-in loop- returns the key of a object
const student1= {
    fullName : "Aryan Tambe",
    age:20,
    cgpa:7.3,
    isPass:true,
};
for(let key in student1){
    console.log("key-",key," value-",student1[key]);
}