//Events- The change in the state of an object is called an event
//Events are fired to notify code of "Interesting changes" that may affect the code execution
//eg- mouse clicks(double,single),keyboard events,form events(submit),print event etc
//Inline handling of an event has less priority
//You cannot handle the same handler many times, the old one gets overrriden
//Event object-->It is a special object that has details about the event 
//All event handlers have access to the event object's properties and method



 let btn1 = document.querySelector("#bt1");
btn1.onclick=(e)=>{
        console.log(e)
        console.log(e.target)
        console.log(e.type)
        console.log("btn1 was clicked");
        let a=25;
        a++;
        console.log(a);
}

const handler1=()=>{
    console.log("Button was clicked-handler 1")
};
btn1.addEventListener("click",handler1);

btn1.addEventListener("click",(evt)=>{
    console.log("This is a second event for the same element- handler 2")
    console.log(evt)
    console.log(evt.type);
})
btn1.removeEventListener("click",handler1);

let modeCh = document.querySelector("#m1");
let currMode = "light";



// Adding the event listener to the button with id 'modeChange'
modeCh.addEventListener("click", (evt)=>{
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor="black";
         
    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor="white";

    }
    console.log(currMode);

});



