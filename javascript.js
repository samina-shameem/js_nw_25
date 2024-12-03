//console.log("samina");
//Functions
function myFunction(){
    let a=5;
    myFunctionTwo();
    return a;
}


function myFunctionTwo(){
   
    console.log("Completed");
}

function myFunctionThree(){
    let a=5;
    myFunctionTwo();
    return a;
}

console.log(myFunction());
console.log(myFunctionThree());