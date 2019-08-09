let val ;

val = document;
//  accessing all tags
val = document.all;
//  accessing particular tag at that position
val = document.all[0];
// Length of all tags present in the document
val = document.all.length;

val = document.domain;

val = document.URL; 

val = document;

val = document.forms;

val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].actions;


val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;

let scripts = document.scripts
let scriptsArray = Array.from(scripts);
scriptsArray.forEach((script)=>{
console.log(script.getAttribute('src'));
})

// console.log(val);

// Dom single query selectors
let singleVal
singleVal = document.getElementById('task-title')

// Change styling


singleVal.innerHTML.toUpperCase;
// singleVal.style.display = 'none';


// console.log(singleVal);

// Query selector
let querySelector

querySelector = document.querySelector('#task-title');
querySelector = document.querySelector('.card-title');
querySelector = document.querySelector('a');
document.querySelector('ul li:last-child').style.color = 'red';
document.querySelector('ul li:nth-child(3)').style.color = 'green';
document.querySelector('ul li:nth-child(3)').innerText = "Hi"
console.log(querySelector);



