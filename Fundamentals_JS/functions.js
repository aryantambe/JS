//Functions
//Saves us from redundancy
function print(msg){ //parameter
    console.log(msg);
}
//print("Aryan");//invoking the function,arguments

function sum(a,b){
    //a and b are local variables and die in this function(parameters)
    result=a+b;
    return result;
}
result=sum("aryan","tambe");
console.log(result)

//Modern Functions
const arrowMultiply=(a,b) => {
    return a*b
}
console.log(arrowMultiply(3,4));

// function vowels(stringg){
//     let count=0;
//     for(let i of stringg){
//         if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
//             count++;
//         }
//         else{
//             continue;
//         }
//     }
//     return count;
// }
// count=vowels("aryan");
// console.log(count)

const countVowelarrow=(str4)=>{
    let count=0;
    for(let i of str4){
        if(i==="a"||i==="e"||i==="i"||i==="o"||i==="u"){
            count++;
        }
        else{
            continue;
        }
    }
    return count;
}
console.log(countVowelarrow("aryani"));

//A callback is a function passed as an argument to another function
