// let age=24
// console.log(age)
// console.log(typeof age);

// let fullName= "Gopi"
// console.log(fullName);
// console.log(typeof fullName);

// let isFollow= true
// console.log(isFollow);
// console.log(typeof isFollow);

// let x;
// console.log(x)
// console.log(typeof x)

// let y=null;
// console.log(y)
// console.log(typeof y)

// let z=BigInt("234")
// console.log(z)
// console.log(typeof z);

// let A=Symbol("Hello Js lerner !")
// console.log(A);
// console.log(typeof A);

const Student = {
    fullName :"RAJ",
    age : 24,
    cgpa : 8.7,
    isPass :true,

};
Student["age"] = Student["age"] + 1;

console.log(Student)
console.log(typeof Student)
console.log(Student["fullName"]) // it print only name i nside the student object.
console.log(Student.age)// both are same to print anty particular object.

//***Practice Question:- Chose any product from amazon try to write its data type of product inside object ***/

const product = {
    productName : " Parker Jotter Ball Pen",
    rating : 4.5,
    offer : 5,
    mrp: 450,

};
console.log(product);