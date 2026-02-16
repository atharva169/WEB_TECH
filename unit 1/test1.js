// const arr=[10,20,30]
// const[a1,b1,c1,d1]=arr
// console.log(a1,b1,c1,d1)
// rest operator
// const[x1,...y1]=arr 
// console.log(x1,y1)

// object clone == to learn about the changing values in object

// let obj1={
//     name:"Atharva",
//     age:22,
//     key:"XYZ"
// }
// let duplicate = {...obj1,key:"value"}; // Default values
// duplicate["Address"]="DEL"

// console.log("Original Object",obj1);
// console.log("Duplicate Object",duplicate);
// let obj2={
//     name:"Atharva",
//     age:22,
//     key:"XYZ"
// }
// obj2.name="Atharva Singh"
// let{name,age:CurrentAge}=obj2
// console.log("Name",name);
// console.log("Current Age",CurrentAge);

//callback function
// console.log("1")

// setTimeout(()=>{
//     console.log("A")
// },2000)
// console.log("3")

// function bakeCake(mycallback){
//     console.log("1. Cake is in the oven")
// setTimeout(()=>{
//     console.log("2. Cake is ready")
//     mycallback()    
// },2000)

// }
// bakeCake(()=>{
//     console.log("3. Now I can eat the cake")
// })

// write a program in js to check whether you can go to kashmir or not based on petrol left using promise
// function checkPetrol(petrol){
//     return new Promise((resolve,reject)=>{
//         if(petrol>=100){
//             resolve("You can go to Kashmir")
//         }else{
//             reject("You cannot go to Kashmir")
//         }
//     })
// } 
// checkPetrol(150).then((message)=>{
//     console.log(message)
// }   ).catch((error)=>{
//     console.log(error)
// } )

// console.log("1")

// setTimeout(()=>{
//     console.log("2")
// },5000)

// console.log("3")

// console.log("before Execution")
// for(var i=0;i<2;i++){
//     setTimeout(function(){
//         console.log("Set time put message")
//         func1()
//     },1000)
//     func2()
// }

// console.log("After Execution")

// function func1(){
//     console.log("Function 1")
// }

// function func2(){
//     console.log("Function 2")
// }

console.log("1 . Start")
setTimeout(()=>{
    console.log("2. Cake is ready to eat");
},2000)
console.log("3. End")

function bakeCake(mycallback){
    console.log("1. Cake is in the oven")
    setTimeout(()=>{
        console.log("2. Cake is baked")
        mycallback()
    },2000)
}

bakeCake(()=>{
    console.log("3. cake is ready")
})

//wap in javascript to bake cake where if cake is baked then eat or order pizaa program withoput using callback function and promise
function bakeCake(){
    console.log("1. Cake is in the oven")   
    setTimeout(()=>{
        console.log("2. Cake is baked")
        eatCake()
    },2000)
}
function eatCake(){
    console.log("3. Cake is ready to eat")
}   
bakeCake()
