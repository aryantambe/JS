//Conditional Statements
// let age=20;
// if(age>18){
//     console.log("Yes you can vote");
// }
// else if(age<18){
//     console.log("You cannot vote")
// }
let mode=null;
let color;
if(mode==="dark"){
    color="black"
}
else if(mode==="light"){
    color="white"
}
else{
    console.log("Select a mode")
}

//Switch statement 
let var10="red";
switch(var10){
    case "blue":
        console.log("Your fav color is blue")
    case "red":
        console.log("Your fav color is Red!");
    default:
        console.log("Choose a color")
}

//User inputs through website( connected with html)
let userInput = prompt("Enter a number:");
console.log(userInput);

