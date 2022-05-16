// let student ={
//     fname: "Sidhant",
//     lname: "Gupta",
//     showDisplay: function(){
//         console.log(this.fname,this.lname);
//     }
// }
// student.showDisplay();

let student1 ={
    fname : "Niraj",
    lname : "Singh",
    age : 23,

}

let student2 = {
    fname : "Raju",
}

student2.__proto__ = student1;

console.log(student2);
console.log(student2.lname);

console.log(student1.__proto__);

//call /Apply/ Bind methods  - process for borrowing function;

let employee1 = {
    fname : "Niraj",
    designation : "Devloper",
    id : 2045,
    showdDetails: function(){
        console.log(this.fname,this.id,this.designation);
    }
}

employee1.showdDetails();


let employee2 = {
    fname : "Aman",
    designation : "Engineer",
    id : 3456,
}
 

let employee3 = {
    fname : "Akash",
    designation : "Analyst",
    id : 7890,
}

employee1.showdDetails.call(employee2);
employee1.showdDetails.call(employee3);
employee1.showdDetails.apply(employee3);

let res1 = employee1.showDetails.bind(employee2);
let res2 = employee1.showDetails.bind(employee3);
res1();
res2();
