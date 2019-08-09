const form = document.querySelector('form');
const taskInput = document.getElementById('task');

taskInput.value ='';

// form.addEventListener('submit',runEvent)
taskInput.addEventListener('keydown',runEvent)
taskInput.addEventListener('focus',runEvent)
taskInput.addEventListener('blur',runEvent)

taskInput.addEventListener('paste',runEvent)


document.body.addEventListener('click',deleteItem)
function deleteItem(e)
{
e.preventDefault();
    console.log(e.target)
    if(e.target.parentElement.classList.contains('delete-item'))
    {

   e.target.parentElement.parentElement.remove();

    }




}

function runEvent(e){
    // e.preventDefault();
    // console.log(`EVENT TYPE : ${e.type} and task is ${taskInput.value}`)
    // if(e.type ==='paste')
    // {
    //     e.preventDefault();
    //     console.log('Pasting now allowed')
    // }
    // console.log(` ${e.target.value}`)




}