let input = document.querySelector('.input')
let addBtn = document.querySelector('.add-btn')
let cat = document.querySelector('.input-1')
let elec = document.querySelector('.todo-list') 
let items = []


let getInput = () =>{   

    let catInp = cat.value;
    let todo = input.value

    let catDisplay = document.createElement('p')
    let todoDisplay = document.createElement('p')
    catDisplay.classList.add('tag')
    catDisplay.innerText = cat.value
    todoDisplay.innerText = input.value

    let deleteIcon = document.createElement('i')
    deleteIcon.classList.add ('fa-solid')
    deleteIcon.classList.add ('fa-trash')

    let majordiv = document.createElement('div')
    majordiv.classList.add('majordiv')

    majordiv.appendChild(todoDisplay)
    majordiv.appendChild(catDisplay)
    majordiv.appendChild(deleteIcon)
    
    elec.appendChild(majordiv)
    
    deleteIcon.addEventListener("click" , ()=>{
        majordiv.remove()
    })

}

        

addBtn.addEventListener('click' , getInput )



