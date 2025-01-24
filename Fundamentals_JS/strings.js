//Strings and String methods 
str1="Aryan";
str2="AryanTheKing";
console.log(str1.length);
console.log(str1[2]);
str4=`Train`;
console.log(str4.length);
//String interpolation - To create strings by doing substitution of placeholders.
//Escape characters -\n,\t--> their length is 1
let output=`The value of str1 is ${str1} and \nits length is ${str1.length}`; //Template literals 
console.log(output);

let s1="Aryan";
console.log(s1.toUpperCase()); //The orignal string is never changed, a new string is created. They are immutabke
s2="    Aryan    ";
console.log(s2.trim())
let s3="Tambe";
console.log(s1.concat(s3));//concat
console.log(s3.slice(1,4));
console.log(s3.replace("T","B"))
console.log(s3.charAt(2))

userName="aryanTambe";
let start="@"+userName+userName.length;
//let end=userName.length();
console.log(start);


