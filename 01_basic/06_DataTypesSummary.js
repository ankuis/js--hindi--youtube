/* primitive
    7 types : string, number, Boolean, null, undefined, symbol
    BigInt

javaScript is dynamically typed language !!
     
    Reference Type(Non primitive) :Array, Objects, Functions    */
    
    const score = 100;
    const scoreValue = 100.33;

    const isLoggedIn = false;
    const outsideTemp = null;
    let userEmail;

    const id = Symbol('123');
    const anotherId = Symbol('123');

    console.log(id == anotherId);

  //  const bigInt = 345677546764676456n


    //Array
    const heros = ["shaktimam", "ironman","thor"];
    // Object
    let myObj = {
        name: "Anku",
        age: 22,
    }

    const myFunction = function(){
        console.log("Hello world");
    }

    console.log(typeof bigNumber);  //undefined type
   // console.log(typeof outsideTemp); //==>object type
   console.log(typeof myFunction); // ==>function type, object function