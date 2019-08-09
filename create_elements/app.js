//  Create element

const li = document.createElement('li');
li.className ='collection-item'
li.id='new-item';
li.setAttribute('title','New-item');
// Create and append text node
li.appendChild(document.createTextNode('Hello World'))

// Create new link element
const link = document.createElement('a');


link.className = 'delete-item secondary-content';
link.innerHTML= '<i class="fa fa-remove"></i>'

//Append child to existing ul
li.appendChild(link)
document.querySelector('ul.collection').appendChild(li);
// REPLACE ELEMENTS
const newHeading = document.createElement('h2')

newHeading.id = 'task-title';
newHeading.className='catrd-title';
newHeading.innerHTML ='Task Title'

document.querySelector('.card-action').querySelector('h5').replaceWith(newHeading)
// const firstList = document.querySelector()
console.log(li);
console.log(link);
console.log(newHeading);