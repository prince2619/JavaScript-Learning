/* ######### ARITHEMETIC OPERATORS  #####  */
let a= 53; 
let b= 34;
let c= 5;
let d= 2;
console.log("a=", a, "& b =", b);
console.log("a+b =",a+b); // add 
console.log("a-b =",a-b); // subtract
console.log("a*b =",a*b); // multiply
console.log("a/b =",a/b); // divide
console.log("a%b =",a%b); // modulus= remainder
console.log("c**d =", c**d ); // Exponential 5^2

// #### UNARY OPERATOR (Used in loop) ####
c++; // you can also write same things in this way:- c==c++ / c = c+1 / ++c(pre increment) / c++(post increment) .
d--; //  you can also write same things in this way:- d==d++ / d = d+1 / --d(pre decrement ) / d-- (post decrement).
console.log(c);
console.log(d);

// ######## Assignment Operator ########## 
{
    let a= 5;
    let b= 6;

    a+= 4;// a=a+4
    console.log(a);
    console.log(b-=3); // 
}
 
// ### COMPARISION OPERATOR #####
// {
//     let x=2;
//     let y=3;
//     let z="3"
    
//     console.log(x==y)
//     console.log(x!==y)
//     console.log(y==z)
//     console.log(y===z)
//     console.log(x>y)
//     console.log(x<y)


// }

// ###### LOGICAL OPERATOR #####
{
    let w=23;
    let q=45;
    let cond1=w<q;
    let cond2=w===23;
    console.log("w&&q=" ,cond1 && cond2); // and operator
}
