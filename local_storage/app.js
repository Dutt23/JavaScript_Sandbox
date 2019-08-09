// set local storagre item
// local storage is there until you manually delete it.
// Session storage deletes moment you close your browser

localStorage.setItem('name','Shatyaki')
// sessionStorage.setItem('namesession','Shatytaki')

const localValue = localStorage.getItem('name');
localStorage.clear();
// clear everything from local storage
console.log(localValue);

const form = document.querySelector('form');
form.addEventListener('submit',addTask)

function addTask(e){
    e.preventDefault();
    
   
let tasks;
let task = e.target.querySelector('#task').value
if(localStorage.getItem('tasks')===null)
tasks = []
else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
   
}
tasks.push(task)
localStorage.setItem('tasks',JSON.stringify(tasks))

alert('Task Saved')
    
}