//###########LOOPS IN JS ############
/* Loops are used to execute a piece of code again & again*/
// FOR LOOP


// for(let i=1;i<=10;i++){
//     console.log("i=",i);
// }
// console.log("loop has ended")

// CALCULATE SUM OF 1 TO 5
// let sum =0;
// let n= 100;
// for(let i=0;i<=n;i++){
//     sum = sum +i
// }
// console.log("sum=",sum)
// console.log("loop has ended")

//####### While Loop ######
// let i=1;
// while(i<=20){
//     console.log("HOW WAS YOUR DAY");
//     i++;
// }

//####### Do-while ##########
// {let i = 20;
// do{
//     console.log("THANKS FOR SHOPING !");
//     i++;
// }
// while(i<=10);}
// {let i = 20;
// do{
//     console.log("i=", i);
//     i++;
// }
// while(i<=30);}

// #### for-of loop
// let str="Apana Collage";
// let size=0;

// for(let i of str){
//     console.log("i=",i);
//     size++
// }
// console.log("string size=", size);

// ### for -in loop###
// let student ={
//     name :"Rhaul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// }
// for(let key in student){
//     console.log("key=", key ,"value=",student[key]);
// }





//***********practice question :- 1. Print all even number from 0 to 100*/


// for (let i=0;i<=100;i++){
//     if(i%2==0){
//         console.log("even=",i);
        
//     }
//     else{
//         console.log("odd", i);
//     }
// }

// Q2. take input from user to guse the gmae number if correct print congralutation otherwise repeat the loop
let gameNum=24;
let userNum=prompt("Guess the game number:");
while(userNum !=gameNum){
    userNum= prompt("you enterd wrong number. Guess again:");

}
console.log("congratulation, you enterd the right number");