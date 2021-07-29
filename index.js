const inputField = document.querySelector(".input-field")
const newTask = inputField.querySelector("#new-task")
const addNewTask = inputField.querySelector("#addNewTask")
const itemsToDo = document.querySelector(".items-to-do")

const onAddNewTask = () => {
   if (!newTask.value) return
   let newTodoItem = document.createElement('div');
   newTodoItem.classList.add('item')
   newTodoItem.insertAdjacentHTML('afterbegin', `
         <button class="check" id="check"></button>
         <p>${newTask.value}</p>
         <img class="image-bucket" src="./img/trash.png" alt="delete">
   `)
   itemsToDo.append(newTodoItem)
   newTask.value = ""
}

addNewTask.addEventListener("click", onAddNewTask)

const removeItem = (e) => {
   if (e.target.classList != 'image-bucket') return
   e.target.closest('.item').remove();
}

const toggleСhecked = (e) => {
   if (e.target.className != 'check') return
   e.target.closest('.item').classList.toggle("checked")
}

const combineOnclicks = (e) => {
   removeItem(e)
   toggleСhecked(e)
}

itemsToDo.addEventListener("click", combineOnclicks)