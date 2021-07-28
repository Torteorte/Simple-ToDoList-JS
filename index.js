const inputField = document.querySelector(".input-field")
const newTask = inputField.querySelector("#new-task")
const addNewTask = inputField.querySelector("#addNewTask")
const itemsToDo = document.querySelector(".items-to-do")

const clickAddNewTask = () => {
   if (!newTask.value) return
   let newTodo = document.createElement('div');
   newTodo.classList.add('item')
   newTodo.insertAdjacentHTML('afterbegin', `
         <button class="check" id="check"></button>
         <p>${newTask.value}</p>
         <img class="image-bucket" src="./img/trash.png" alt="delete">
   `)
   itemsToDo.append(newTodo)
   newTask.value = ""
}

addNewTask.addEventListener("click", clickAddNewTask)

const removeItem = (event) => {
   if (event.target.classList != 'image-bucket') return
   event.target.closest('.item').remove();
}

const toggleСheck = (event) => {
   if (event.target.className != 'check') return
   event.target.closest('.item').classList.toggle("done")
}

const manyClickFunctions = (event) => {
   removeItem(event)
   toggleСheck(event)
}

itemsToDo.addEventListener("click", manyClickFunctions)