//Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.
//Asynchronous--> Due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions, which causes a delay in the UI. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow.

function hello(){
    console.log("Hello");
}

// setTimeout(()=>{
//     console.log("Sorry i am late")
// },2000)//time is given in ms (1000ms=1s)

const sum=(a,b)=>{
    console.log(a+b)
}
function subtract(a,b){
    console.log(a-b)
}

function calculator(a,b,callbackFn){
    callbackFn(a,b);
}

// calculator(3,3,sum);
// calculator(3,4,subtract);

function getData(dataId,getNextdata){
   setTimeout(()=>{
    console.log("data",dataId)
    if(getNextdata){
        getNextdata();
    }
   },2000) 
}

//The below code is an example of callback hell
//Nested callbacks stacked below one another forming a pyramid structure(pyramid of doom)
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4,()=>{
                getData(5)
            })
        })
    });
})

//pro