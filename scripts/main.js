function updateCounters() {
  // declare a variable that contains the "Total" counter element
  const totalList = document.querySelector("#total");
  // declare a variable that contains the number of todos, by counting how many elements have a specific classname / attribute
  const listItems = document.querySelectorAll("li");
  // update the HTML inside the counter element with the number of todos
  totalList.innerText = listItems.length
 
  
  // TODOS NOT DONE
  const notDone = document.querySelectorAll(".doNot-checked")
  const stillTodo = document.querySelector("#toDo")
  stillTodo.innerText = notDone.length

// TODOS DONE
  const done = document.querySelectorAll(".do-checked")
  const toDoHTML = document.querySelector("#done")
  toDoHTML.innerText = done.length

}
updateCounters();
 

function toggleDone(event) {
  // get the checkbox from the event object
  const  checkbox = event.currentTarget
  console.log(checkbox.parentElement.parentElement, " hola")

  if (checkbox.checked) {
    // change the checkbox so that it shows up as completed
    checkbox.parentElement.parentElement.className = "toDoList do-checked" 
    
  } else {
    // change the checkbox so that it shows up as todo
    checkbox.parentElement.parentElement.className = "toDoList doNot-checked"
  }

  // update the counters, now that we have updated the checkbox
  updateCounters();
 
}
const cb = document.querySelectorAll(".toDoList input")
cb.forEach(element => {
  element.addEventListener("change",toggleDone )
});
 

// add a "change" event listener to every checkbox,
// and use the "toggleDone" function as the callback

//toggleDone();


