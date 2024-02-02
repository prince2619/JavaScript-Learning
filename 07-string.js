//################STRING IN JS#############
let str="DAV PUBLIC SCHOOL";
console.log(str);
console.log(str.length);
console.log(str[2]);

//#####TEMPLATE literals
{
    let product={
         item:"pen",
         price:10,

    };
    console.log("The Cost of",product.item,"is",product.price,"rupees");
    let output=`the cost of ${product.item} is ${product.price} rupees`
    console.log(output)

}

// ###############STRING METHOD #####################

//*****STRING TO UPERCSAE******* */

let name = "Raj Chopra"
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim())