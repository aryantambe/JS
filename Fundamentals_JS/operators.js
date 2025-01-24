//Arithmetic operation  
let a=15;
let b=6;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a^b=",a**b);
console.log(++a);//pre-increment
console.log(a++);//post-increment
console.log(a--);//post-decrement
console.log(--a);//pre-decrement

let x= 2;
let y= 4;
x+=1;
console.log(x);
x*=2;
console.log(x);
x-=2;
console.log(x);
x/=2;
console.log(x);

//Comparision operators
let j=2;
let i=3;
console.log(i==j)
i=2;
console.log(i==j)

let var1=5;
let var2="5";
console.log(var1==var2) //This returns true as JS first converts the string to number and then checks the value 
console.log(var1===var2)// This returs false as this is a stricter comaparision operator which also checks the data type of the variable
console.log(var1!=var2)//this returns false
console.log(var1!==var2)//this returns true

let g=5;
let f=10;
console.log(g>f)
console.log(g<=f)
cond1=g===5;  //true
cond2=f===11; //false
console.log(cond1&&cond2)
console.log(cond1||cond2)
console.log(!cond1)
 
//Ternary operator
//a?b:c

var age=18;
let result=age>=18?"adult":"Child" //Compact if-else
console.log(result);
