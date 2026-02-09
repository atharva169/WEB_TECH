var x=10;
console.log("TEST",x);
// anonymous functions
let sum=(a,b)=>a+b;
console.log("SUM",sum(60,7));
let sub =(a,b)=>a-b;
console.log("SUB ",sub(10,5));
// object creation 
class Student {
    constructor(name, marks){
        this.name=name;
        this.marks=marks;
    }

}
const student1=new Student("Alice",85);
const student2=new Student("Bob",90);
const student3=new Student("Charlie",78);
const student4=new Student("Atharva",99);
const student5=new Student("Diana",88);


let students = [student1, student2, student3, student4, student5];
students.sort((a, b) => b.marks - a.marks);
let fourthHighest = students[3];
console.log("Fourth Highest Student:", fourthHighest.name, "with marks:", fourthHighest.marks);