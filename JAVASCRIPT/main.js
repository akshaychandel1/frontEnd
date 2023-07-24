// //Print values in the console
// console.log("Hello from JS");
// console.warn("This is Warning")
// console.error("This is An Error")


// //Data Types:-
// // 1. Primitive Data Types(PDTs)
// // 1.>Number
// variable_one = 1000000000
// console.log(variable_one);
// console.log(typeof(variable_one))
// // 2.> String
// variable_one = "Welcome to JS"
// console.log(variable_one);
// // 3.> Boolean
// variable_two = false
// console.log(variable_two);
// console.log(typeof(variable_two))
// // 4.> Null
// variable_four = null
// console.log(variable_four);
// console.log(typeof(variable_four))   // type of (null)object -> This is mistake
// // 5.> Undefined
// variable_five = undefined 
// console.log(variable_five);
// console.log(typeof(variable_five)) //

// // console.log(variable_six)

// // conditional statements :-
//     var demo = 10;
//     if (demo>= 0) 
//     {
//         console.log(demo +"number is +ve");
//     } 
//     else 
//     {
//         console.log(demo +"number is -ve");
//     }

//  // ES6
//  // condition ? TRUE:FALSE
 
//  demo2 = -10;
//  demo2>= 0 ? console.log(`${demo2} is +ve`) : console.log(`${demo2} is -ve`)


//  // let,var,const

//  flag = true;
//  if (flag) 
//  {
//     counter = 10;
//     console.log(counter * counter);   
//  } else 
//  {
//     counter = 5;   
//     console.log(counter);
//  }
//  console.log(counter);



// // let
//  flag = true;
//  if (flag) 
//  {
//     let a = 100;   // can used only in the scope   
//     console.log("The value of a inside the if-block "+a);
// }
//  else
//  {
//     b=200
//  }
// //  console.log(a); // now it will be undefined by use of let
// //  console.log(b); //undifined


//  //const
//  flag = true;
//  if (flag) 
//  {
//     const a = 900;   // in const a should be initialize
//     // a=200 //error cannot be reinitialised   
//     console.log("The value of a inside the if-block "+a);
// }
//  else
//  {
//     b=200
//  }




//  flag = true;
//  if (flag) 
//  {
//     let a 
//     var b
//     const c = 90
//     a = 300;
//     b = 250;  
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//  else
//  {
//     b=200
//  }
// //  console.log(a) outside the scope
//  console.log(b);
// // console.log(c); outside the scope




// // Loops
// // For , While
// for (let i = 0; i < 5; i++) //i ko const and var nahi bana sakte hamesha i e rahega
// {
//     console.log(i);
// }

// let i =0
// while (i<5) 
// {
//     console.log(i);
//     i+=1;    
// }

// // NON PRIMITIVE DATA TYPES
// //a) Arrays
// // Contiguous in nature , [ ]
// // int arr[] ={1,2,3} in java


// let numbers = [ 10,20,30,40,50];
// // numbers.    

// let arr = [];
// let arrobj = new Array(10);
// console.log(arrobj);

// // for (let i = 0; i < 5; i++) {
// //     console.log(numbers[i]);
// //     // console.log(numbers);
    
// // }
// // console.log(numbers);






// //  Arrays Methods
// numbers.push(60)
// console.log(numbers)




// let myArr1 = [101,210,301,401,501]
// // console.log(myArr1);

// // let myArr2 = myArr1;            // This is not copy mech.. address of arr1 to arr2  arrays in JS is refference type variable
// // console.log(myArr1);

    // //  Array Spread Opreators
// let myArr2 = [...myArr1]          //to copy one array to other

// myArr2.push(101);
// myArr1.push(-1);
// console.log(myArr1);
// console.log(myArr2);





// // Methods 
// //pop() removes from end
// //shift() remove from start
// myArr1.pop()
// console.log(myArr1)

// let deleteElement = myArr1.shift()
// console.log(myArr1)

// // push()! adds at the end
// // unshift() add at the start
// myArr1.unshift(5)
// console.log(myArr1)

// // concat() 2 or more arrays are merged
// let combinedArray = myArr1.concat(myArr2)
// console.log(combinedArray);



// let dummyArray = [10, "string",true,null,undefined]
// console.log(dummyArray)

// let twoDArray = [[10,21,31,],[40,51,61,],[70,81,91,]]
// console.log(twoDArray)
// console.log(twoDArray[1][2])






// 2> JS OBJECTS - {} :-
// let Obj = { key1: value1, key2: value2 }






// let myobj = {
    // name : "user one" ,
    // email : "chandel2102@gmail.com",
    // password : "916462123",
    // isElmployed : true,
    // hobbies : ["Music","Reading Books","Traveling"],
    // address :                         /// address ka datatype object h
    // {
    //     street : "street-1",
    //     city : "Kharar",
    //     state : "Punjab",
    //     pincodes: [1234,4560]
    // }
// } 
// console.log(myobj)
// console.log(`Hi,this is user ${myobj.name},My email is ${myobj.email} & my password is ${myobj.password}`)
// console.log(myobj.hobbies[0])
// console.log(myobj.address.city)
// console.log(myobj.address.pincodes[1])

// let myobj1 = new Object
// {
//     myObj1.name = "user one" ,
//     myObj1.email = "chandel2102@gmail.com",
//     myObj1.password = "916462123",
//     myObj1.isElmployed = true,
//     myObj1.hobbies = ["Music","Reading Books","Traveling"],
//     myObj1.address =                         /// address ka datatype object h
//     {
//         street : "street-1",
//         city : "Kharar",
//         state : "Punjab",
//         pincodes: [1234,4560]
//     }
// }




// 3>. ARRAY OF OBJECTS :- [ {},{},{} ]



const users = [
    {
        name : "user one" ,
    email : "chandel2102@gmail.com",
    password : "916462123",
    isElmployed : true,
    hobbies : ["Music","Reading Books","Traveling"],
    address :                         /// address ka datatype object h
    {
        street : "street-1",
        city : "Kharar",
        state : "Punjab",
        pincodes: [1234,4560]
    }
    ////     User[0].address.pincode[1]
},
{
    name : "user two" ,
    email : "chandel2102@gmail.com",
    password : "916462123",
    isElmployed : false,
    hobbies : ["writing books","Traveling"],
    address :                         /// address ka datatype object h
    {
        street : "street-1",
        city : "Kharar", 
        state : "Punjab",
        pincodes: [1234,4560]
    }
},
{
    name : "user one" ,
    email : "chandel2102@gmail.com",
    password : "916462123",
    isElmployed : true,
    hobbies : ["Music","Reading Books","Traveling"],
    address :                         /// address ka datatype object h
    {
        street : "street-1",
        city : "Kharar",
        state : "Punjab",
        pincodes: [1234,4560]
    }
}] 
console.log(users)


// 4>. JSON (Java Script Object Notation)
// JS -> interface -> JSON 2