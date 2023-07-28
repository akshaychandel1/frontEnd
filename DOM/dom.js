// DOM --> DOCUMENT OBJECT MODEL
// allarray bala tarika
// const myli = document.all[19];
// console.log(myli)

//Identifier method :-
//1. getElementbyId

// const myheader = document.getElementById('header-title'); //only one element
// console.log(myheader);

//2. getElementsbyClass

// const listitem = document.getElementsByClassName('list-group-item')
// console.log(listitem);

//3. getElementsbyTagName

// const myforms = document.getElementsByTagName('form')  
// console.log(myforms);

// //4. querySelector{id/class/tagName}

// // const myqueySelector = document.querySelector('#header-title')  
// // console.log(myqueySelector);

// const myqueySelector2 = document.querySelector('.list-group-item')  
// console.log(myqueySelector2);

// //5. querySelectorAll

// console.log(document.querySelectorAll('.list-group-item'));
// // DOM Manupulation Methods
//  const heading = document.querySelector('#header-title')


//  //1> TextContent =>text in between the starting and ending tag
//   heading.textContent = "Welcome To DOM";


// //2> InnerHtml =>
// heading.innerHTML = "<h2>Welcome</h2>"


// // NOTE:-   TextContent and InnerHtml both works in a different way;
// //   TextContent changes the text in between the starting and ending tag while InnerHtml adds a child to a given element



// // CSS With JavaScript {.styles}   //camelCase Notation
// // const screenheaading = document.querySelector('#second-heading')
// // screenheaading.styles.backgroundColor = 'purple'
// // screenheaading.styles.color = 'white'

// // JS Function = setTimeout{}
// Synatx => setTimeout

// setTimeout(()=>
//     { 
//         // heading.innerHTML = "<h2>Welcome</h2>"
//         screenheaading.style.backgroundColor = 'purple'
//         screenheaading.style.color = 'white'}, 2000 )

//         const textcontent = document.querySelector('#btn')
//         console.log();
//         document.querySelector('#btn').textContent = 'Press Me'






//
// const listitems = document.getElementsByClassName('list-group-item');
// for (let i = 0; i < listitems.length; i++) 
// {
//     if (i%2 == 0) 
//     {
//         listitems[i].style.backgroundColor = 'lightgrey';
//     }    
    
// }





// Events

//const mybtn = document.getElementById('btn')
// element.addEventListner(eventName, () ==> {} )

// mybtn.addEventListener('click',()=>{ console.log("My Btn Is Clicked")} )



// document.getElementById('item-one').addEventListener('click',()=>{
//     console.log("ITEM_1 is clicked")
// })
// document.getElementById('item-one').addEventListener('dblclick',()=>{
//     console.log("ITEM_1 is clicked")
// })

// document.getElementById('text-input').addEventListener('mousenter',()=>{
//     console.log("mouse enter in input type text")
// })
// document.getElementById('text-input').addEventListener('mouseleave',()=>{
//     console.log("mouse leave in input type text")
// })

// document.getElementById('text-input').addEventListener('click',()=>{
//     console.log("mouse leave in input type text")
    
// })
// document.getElementById('text-input').addEventListener('focus',()=>{
//     console.log("mouse focused")
    
// })


// /// press item 1 and change item 2

// document.getElementById('item-one').addEventListener('clicked',()=>{
//     document.getElementById('item-one').style.backgroundColor="Yellow"
    
// })







// document.getElementById('text-input').addEventListener('cut',()=>{
//     console.log("data is cut")
    
// })
// document.getElementById('text-input').addEventListener('copy',()=>{
//     console.log("data is copy")
// })
// document.getElementById('text-input').addEventListener('paste',()=>{
//     console.log("data is pasted")
// })
// document.getElementById('text-input').addEventListener('keydown',()=>{
//     console.log("key is down")
// })
// document.getElementById('text-input').addEventListener('keyup',()=>{
//     console.log("key is up")
// })
// document.getElementById('text-input').addEventListener('keypress',()=>{
//     console.log("key is presed")
// })

// document.getElementById('text-input').addEventListener('keypress',()=>{
//     console.log("key is presed")
// })




// document.getElementById('text-input').addEventListener('keypress',(e)=>{
//     console.log(e.target.value)
// })





// Exceptiion Submit Button


// document.getElementById("submitBtn").addEventListener('click' ,()=>{
//     console.log("Submit btn is clicked")
// })

// document.getElementById("submitBtn").addEventListener('click' ,(e)=>{
//     e.preventDefault()
//     console.log(document.getElementById('text-input').value)
// })


// FUN ACTIVITY
// document.querySelector('#container-box').addEventListener('mouseenter', (e) => {
//     console.log(e);
//     document.querySelector('#container-box').style.backgroundColor = `rgb(0, ${e.offsetX}, ${e.offsetY})`
// })
// document.querySelector('#container-box').addEventListener('mouseleave', (e) => {
//     document.querySelector('#container-box').style.backgroundColor = `rgb(100, ${e.offsetX}, ${e.offsetY})`   
// })

// //Fun ACtivity
// document.querySelector('#container-box').addEventListener('mouseenter',(e)=> {
//     document.querySelector('#container-box').style.backgroundColor = `rgb (0, ${e.offserX}, ${e.offsetY})`
// })




// Dom Traversal
// 1 parentElement
// console.log(document.getElementById('items').parentElement);


// 2 children
// console.log(document.getElementById('Item').children);
// const items = document.getElementById('items').children
// for (let i = 0; i < items.length; i++) {
//     if (i%2 == 0) 
//     {
//         items[i].style.backgroundColor = '#f4f4f4'    
//     };
    
// }

// 3 firstChild => firstElementChild
// 4  lastChild  => lastElementChild




// Siblings
// console.log(document.getElementById('head').previousElementSibling);
// console.log( document.getElementById('head').nextElementSibling );

// //  Creating HTML Using JS
// const myDiv = confirm.log(document.createElement('div'))
// myDiv.textContent = 'Demo Text'
// myDiv.setAttribute() 
// console.log(myDiv);

1/11111111111111111111111111111111111111111111111111111111111111111111111111111111111111/1111