// Define ui vars

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Load all event listeners
loadEventListeners();


function loadEventListeners()
{
    // Load tasks form before
    document.addEventListener('DOMContentLoaded',getTasks);
    form.addEventListener('submit',addTask);
    // Remove task event 
    taskList.addEventListener('click',removeTask);
    // Clear task event
    clearBtn.addEventListener('click',clearTasks);
    //Filtering tasks
    filter.addEventListener('keyup',filterTasks);
}
// get tasks from local storage
function getTasks(e)
{
    let tasks;
    if(localStorage.getItem('tasks')===null)
    tasks = [];
    else
    tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach((task)=>{
        const li = document.createElement('li');
        li.className='collection-item'
        //Create text node and append to li
        
        li.appendChild(document.createTextNode(task))
         // Create new link elememnt
         const link = document.createElement('a');
         link.className='delete-item secondary-content';
         link.innerHTML='<i class="fa fa-remove"></i>'
         //Append the link to li
         li.appendChild(link)
        
         //Append to ul
         taskList.appendChild(li);  
    })

}

function addTask(e)
{ e.preventDefault();

if(taskInput.value==='')
alert('Add a task')

const li = document.createElement('li');
li.className='collection-item'
//Create text node and append to li

li.appendChild(document.createTextNode(taskInput.value))
 // Create new link elememnt
 const link = document.createElement('a');
 link.className='delete-item secondary-content';
 link.innerHTML='<i class="fa fa-remove"></i>'
 //Append the link to li
 li.appendChild(link)

 //Append to ul
 taskList.appendChild(li);
 storeTaskInLocalStorage(taskInput.value);
 //Clear inout
 taskInput.value=''

}


function storeTaskInLocalStorage(task)
{
    let tasks;
    if(localStorage.getItem('tasks')===null)
    tasks = [];
    else
    tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks))

}

function removeTask(e)
{
    let tasks;
e.preventDefault();

if(e.target.parentElement.classList.contains('delete-item'))
if(confirm('Are you sure ?'))
{
    e.target.parentElement.parentElement.remove();

    removeFromLocalStorage(e.target.parentElement.parentElement)
    

    

}

}

function removeFromLocalStorage(taskItem)
{console.log(taskItem)
    let tasks;
    if(localStorage.getItem('tasks')===null)
    tasks = [];
    else
    tasks = JSON.parse(localStorage.getItem('tasks'));

    tasks.forEach((task,index)=>{
        if(taskItem.textContent===task)
        tasks.splice(index,1);
    })

    localStorage.setItem('tasks',JSON.stringify(tasks))

}

function clearTasks(e)
{
    e.preventDefault();
    //taskList.innerHTML='';
//Faster

while(taskList.firstChild)
{
    taskList.removeChild(taskList.firstChild)
}
clearTasksFromLocalStorage();

}

function clearTasksFromLocalStorage()
{
    localStorage.clear();
}

function filterTasks(e)
{

    e.preventDefault();
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(task => {
const item = task.firstChild.textContent;
if(item.toLowerCase().indexOf(text)!==-1)
task.style.display ='block'
else
task.style.display ='none'
    })
}



