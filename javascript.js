//Functions
//Alerts
//alert("Blocked");
//Objects

//let user = {
//    firstName:"John",
//    lastName:"Daniel",
//        age:45,
//    address:'kkkkkkk',    
//
//
//};
//console.log(user);

//Array

//let newArray = ["Test1","Test2"]
//console.log(newArray);
//console.log(newArray[0]);

//Methods-Strings-length
/*let s="welcome 1e";
let t= s.slice(3,10);
console.log(t);
console.log(s.length);
console.log(s.indexOf('l'));
console.log(s.lastIndexOf('e'));
console.log(s.search('o'));
let h = s.slice(-4);
console.log(h);*/

//Number methods

/*let a="34";
let b="10";
console.log(typeof parseInt(a));
console.log(typeof  b.toString());*/

/*let myArray=["x","t" , "g",];
//let newArray=myArray.slice(2);
myArray.sort();
myArray.reverse();

/*myArray[0] = "Z";
myArray.push("T");
myArray.pop();
myArray.unshift('D');
myArray.shift();
//myArray.splice(2 ,5);
myArray.splice(1 ,0,"H");
myArray.splice(4 ,0,"L");*/


//console.log(myArray);


//console.log(myArray.length );
//console.log(myArray);

//if

/*et johnAge = 50;

if(johnAge=== 45){
    console.log("you are old")


}else if(johnAge <= 30 && johnAge >= 20){
    console.log("you are about to be old")
}
 
else{
    console.log("you are too young");
}*/
//Switch

/*let fruits = "Banana";

switch (fruits) {
    case "Apple":
        console.log("i am not buy");
        break;
    case "Banana":
        console.log("bought");
        break;
    default:
        console.log("no fruits");
}*/

//Loops

//for loop
    

   // let count = 0;
    
    /*for(let i=0; i<=10; i++){
        console.log(i);
    }*/

// while loop
    
   /*while(count <= 10){
        
           console.log(count);
           count++;
           
   }*/
         /* do{
            console.log(count);
            count++;

          }while (count=== 10);
        */

//loops in Array
 
  //let myArray =[ "Jo","Di","Ja"];

 /*for(let i=0;i< myArray.length; i++){
    document.write(myArray[i] + "<br>")
 }
*/
/*for(let x of myArray){
    document.write(x + "<br>");
}*/
//Objects in for loops

let myObj =  {
    firstName:"John",
    lastName:"Doe",
    age: 34,

};
for(let x in myObj){
    document.write(myObj [x] +"<br>");
}

