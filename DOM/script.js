//When a webpage is loaded, the browser creates a Document Object Model(DOM) of the page
//A window object is created by the browser. It is a global object with many methods  

//DOM tree has--> 1) Text nodes, 2) Comment nodes, 3)Element nodes
console.dir(document.body)
console.log(document.body)

let heading=document.getElementById("heading");
console.log(heading);
let paras=document.getElementsByClassName("para");//returns a collection
console.log(paras);
let p=document.getElementsByTagName("p") //returns by tag name
console.log(p)

//A better way to this is by using query selector

let firstElement=document.querySelector("#heading"); //returns a node list
console.log(firstElement);
let allElements=document.querySelectorAll(".para");
console.log(allElements);

//Some important properties of DOM
//tagName-->returns the tag name
//innerText--> returns the text content of the element and all its children
//innerHTML--> returns the plan text or HTML contents in the element
//textContent--> returns the textual content even for hidden elements
//firstChild
//lastChild


console.log(firstElement.tagName);

let div=document.querySelector("div")
let list=document.querySelector("ul")
console.log(div)
console.log(div.innerText)
console.log(list.innerText)
console.log(list.innerHTML)

//setting some values

list.innerText="Strawberry","mango";
console.log(list.innerText)

let old=document.querySelector("#old")
console.log(old.innerText)
old.innerHTML="<i>Meow</i>"
console.log(old)

//Attributes

let attribute=document.querySelector("#old")
console.log(attribute);
attribute.setAttribute("name","Tambe"); //change or set an attribute for a tag
let val=attribute.getAttribute("name"); //get the attribute
console.log(val)

//Style

let button=document.querySelector("button")
console.log(button)
console.log(button.style) //The style value is showed only wen using inline styling

button.style.backgroundColor="pink"; //change background color
button.style.fontSize="25px" //change font size
// button.style.visibility="hidden"

//How to insert elements
let newButton=document.createElement("button");
newButton.innerText="Click me"
console.log(newButton)

let div_list=document.querySelector("#Divlist")
div_list.append(newButton) //adds at the end of the node(inside)
div_list.prepend(newButton)// adds at the start of the node(inside)
div_list.after(newButton)// adds after the node is over(outside)
div_list.before(newButton)// adds just before the starting of the node(outside)
console.log(div_list)

//Deleting a node
let del=document.querySelector("#heading")
console.log(del)
del.remove();


let butt=document.createElement("button");
butt.innerText="Click me";
butt.style.backgroundColor="red";
butt.style.color="white";

document.querySelector("body").prepend(butt)

//classList gives us the list of CSS classes
//To add a class you can use classList.add
//To remove use classList.remove

