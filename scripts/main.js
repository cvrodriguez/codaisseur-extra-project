function updateCounters() {
  // declare a variable that contains the "Total" counter element
  const totalList = document.querySelector("#total");
  console.log(totalList)
  // declare a variable that contains the number of todos, by counting how many elements have a specific classname / attribute
  const listItems = document.querySelectorAll("li");
  console.log(listItems)
  // update the HTML inside the counter element with the number of todos
  totalList.innerText = listItems.length
 
  
  // TODOS NOT DONE
  const notDone = document.querySelectorAll(".doNot-checked")
  const stillTodo = document.querySelectorAll("#toDo")
  stillTodo.innerText = notDone.length
  console.log(stillTodo)
// TODOS DONE
  const done = document.querySelectorAll(".do-checked")
  const toDoHTML = document.querySelector("#done")
  toDoHTML.innerText = done.length
  console.log(toDoHTML)

}

updateCounters();


