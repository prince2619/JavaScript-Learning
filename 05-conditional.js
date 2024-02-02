// ####### IF STATMENT #######
// let age =25;

// if (age>18){
//     console.log("YOU ARE ELLIGIBLE FOR DRIVE")
// }

// {let time = 11;
// if (time<10){
//     console.log("YOU CAN'T TURN ON NIGHT MODE")
// }
// if(time>10){
//     console.log("PLEASE ON NIGHT MODE")
// }}

// {let mode ="light"
// let color;

// if(mode=="Dark"){
//     console.log(color= "black")
// }

// if(mode == "light"){
//     console.log(color="white")
// }}

// ###### IF-ELSE ########
// {
    
//     let Switch = "ON";
// let pump;
// if(Switch =="ON"){
//     pump = "pump get started"
// }
// else{
//     pump = "pump not started yet"
// }
// console.log(pump);
// }
// odd even
// let num = 15;
// if(num%2 ===0){
//     console.log("EVEN NUMBER")
// }
// else{
//     console.log("ODD NUMBER")
// }

// ##### else-if ####

// let pasenger= 16;
// if (pasenger<8){
//     console.log("seats are avilable")
// }
// else if (pasenger>=15){
//     console.log("you get fine")
// }
// else{
//     console.log("Now vehicle are ready to go")
// }

// ###### Ternary Operator(condition ? true output : false output) ######
// let time = "6pm";
// let result = time>="7pm" ? "street lights are glowing" : "Street lights are not glowing"
// console.log(result);

// let Class = 2
// Class >=5 ? console.log("school are open for student"): console.log("school are not open for smaller child")

/* Practice Question:-
Get user to input a number using prompt("Enter a number:").check if the number is a multiple of 5 or not */



// let num = prompt("Enter a number:");
// if(num%5 ==0){
//     console.log("Number is Divisible by 5")
// }
// else{
//     console.log("Given numeber not divisible by 5")
// }

let marks=prompt("Enter Your Marks:");
if(marks>=90 && marks<=100){
    console.log("You Got 'A+' grade")
}
else if (marks>=70 && marks<=89){
    console.log("You got 'B' grade")
}
else if(marks>= 60 && marks<=69){
    console.log("You Got 'C' grade")
}
else if(marks>= 50 && marks<=59){
    console.log("You Got 'D' grade")
}
else if(marks= 0 && marks<=49){
    console.log("You Got 'F' grade")
}
else{console.log("Candidate Not Given Eaxm")}