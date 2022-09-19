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
  const checkbox = event.currentTarget
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

};

// add a "change" event listener to every checkbox,
// and use the "toggleDone" function as the callback
const cb = document.querySelectorAll(".toDoList input")
cb.forEach(element => {
  element.addEventListener("change", toggleDone)
});

function createTodo(title) {
  // create a label
  const newLabel = document.createElement("label")
  // create a checkbox
  const newCheckBox = document.createElement("input")
  newCheckBox.setAttribute("type", "checkbox")
  // add the "change" event listener to the checkbox
  newCheckBox.addEventListener("change", toggleDone)
  // and append the checkbox to the label
  newLabel.appendChild(newCheckBox)
  // create a text node with the given title
  const textNode = document.createTextNode(title)
  // and append the text node to the label
  newLabel.appendChild(textNode)
  // create a list item
  const newLi = document.createElement("li")
  newLi.className = "toDoList doNot-checked"
  // and append the label to list item
  newLi.appendChild(newLabel)

  // append the list item to the todo list
  const list = document.querySelector("#listToDo")
  list.appendChild(newLi)
}

document
  .querySelector("form")
  .addEventListener("submit", function addNewTodo(event) {
    event.preventDefault();

    const inputField = document.querySelector("#questionInput");
    const newTodoTitle = inputField.value;
    createTodo(newTodoTitle);

    inputField.value = null;

    updateCounters();

  })


