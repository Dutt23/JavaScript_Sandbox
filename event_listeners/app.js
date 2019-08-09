let val;
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5')


clearBtn.addEventListener('click',runEvent)

clearBtn.addEventListener('dblclick',runEvent)

//Mouse down
clearBtn.addEventListener('mousedown',runEvent)

//Mouse up 
//Event handler 
clearBtn.addEventListener('mouseup',runEvent)




card.addEventListener('mouseenter',runEvent);
//mouse leave 

card.addEventListener('mouseleave',runEvent);
// Mouse over and mouse out firess of if you go inside another element within the same card
// Mouse enter and mouse leave fires off only if you enter and leave that element

// mouse move
card.addEventListener('mousemove',runEvent);

function runEvent(e){
e.preventDefault();
    console.log(`Event type ${e.type}`)

    if(e.type ==='mousemove')
    {
        heading.innerHTML = `coordinates of the mouse are ${e.offsetX} and ${e.offsetY}`
       document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`
    }

    else if(e.type ==='mouseleave')
    document.body.style.backgroundColor = `white`
}
// onClick = e =>{
//     let val
//     e.preventDefault();
//     console.log('Cleared Tasks')

//    val =  e.target

//    val.innerText ='Clicked'
//    e.type
//     console.log( e.type)

//     // Get coordinates of the click window
//     val = e.clientY; // From top
//     val = e.clientX; // From other side
//     // Relative to element
//     val = e.offsetY;
//     // val = e.offsetX;
    
//     console.log(val)
// }
// val = document.querySelector('.clear-tasks').addEventListener('click',onClick)




