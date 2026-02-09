// let a = 5;
//   let b = 45;
//   let greater=(a,b)=>a>b? console.log(a+" is greater") : console.log(b+" is greater");
//     greater(a,b);
// // wap to create a simple calculator
// var t1=20;
// var t2=10;
let a = 5;
function outer(){
    let b = 10;
    function inner(){
        let c = 15;
        console.log(a,b,c);
    }   
    inner();
}
outer();
