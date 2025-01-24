//Arrays
console.log("Arrays brother")
let arr1=[76,78,99,67];
console.log(arr1);
console.log(arr1.length) //property

console.log(arr1[3]);
arr1[2]=100;
console.log(arr1) //arrays are mutable

for(let i=0;i<arr1.length;i++){
    console.log(arr1[i])
} 
//iterables-->Strings,objects,arrays
// for(let item of arr1){
//     console.log(item)
// }

// let items=[250,645,300,900,50]
// for(let j=0;j<items.length;j++){
//     items[j]=(90/100)*items[j];
// }
// console.log(items)

//Methods
//push--> add
//pop--> delete

let food=["Mango","Burger","Chicken"];
let added=food.push("Icecream","chocolate");
console.log(food)
let deletedItem=food.pop();//Deletes the last item
let res=` The food deleted is ${deletedItem}`
console.log(res)
console.log(food.toString())

let food2=["Noodles","BingBong"];
let newFood=console.log(food.concat(food2));
food.unshift("Foodies"); //Adds in the start
console.log(food)
food.shift();//deletes the first item 
console.log(food)
console.log(food.slice(1,3))//does not change the orignal array

let splarr=[1,2,3,4,5,6,7,8,9]
splarr.splice(1,4,100,101) //From 1 to 4 all deleted and adds the new values in their place
console.log(splarr)

//To replace 
let arr=[1,2,3,4,5]
arr.splice(1,1,100);
console.log(arr)

let num=[69,67,55,356];
let newArr=num.map((val)=>{  //to do some operations on each element of the array and store it in a new array
        console.log(val*val)
});
console.log(newArr)

let newArr2=num.filter((val)=>{ //filters based on the condition
    return val>60
});
console.log(newArr2);

const ans=num.reduce((prev,curr)=>{ //This reduces the array after performing a series of operations 
    return prev>curr ? prev:curr;//Finds the largest of the array 
});
console.log(ans)
