const todoForm = document.querySelector("#todoForm");
const inputTodo = document.querySelector("#inputTodo");
const todoList = document.querySelector("#todoList");
const todoContainer = document.querySelector("#todoContainer");

function saveTodoInContainer(todoText) {
  //console.log(`salvo: ${todoText}`);

  todoContainerElement = document.createElement("div");
  todoList.appendChild(todoContainerElement);

  const todoTextElement = document.createElement("p");
  todoTextElement.textContent = todoText;
  todoContainerElement.appendChild(todoTextElement);

  const buttonFinishTodoElement = document.createElement("button");
  buttonFinishTodoElement.classList.add("finish-todo");
  buttonFinishTodoElement.innerHTML = '<i class="bi bi-check-lg finish-todo">';
  todoContainerElement.appendChild(buttonFinishTodoElement);

  const buttonRemoveTodoElement = document.createElement("button");
  buttonRemoveTodoElement.classList.add("remove-todo");
  buttonRemoveTodoElement.innerHTML = '<i class="bi bi-x-lg remove-todo">';
  todoContainerElement.appendChild(buttonRemoveTodoElement);

  //console.log(`Container: ${todoList.innerHTML}`);
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputTodo.value) {
    saveTodoInContainer(inputTodo.value);
    //console.log(inputTodo.value);
  }

  inputTodo.value = "";
  inputTodo.focus();
});

document.addEventListener("click", (e) => {
  const targetElement = e.target;
  const targetElementParent = targetElement.closest("div");
  //console.log(targetElement);

  const containsFinishClass = targetElement.classList.contains("finish-todo");
  const containsRemoveClass = targetElement.classList.contains("remove-todo");
  if (containsFinishClass) {
    //console.log(todoContainerElement);
    targetElementParent.classList.toggle("todo-done");
    //console.log("finish", containsFinishClass);
  }
  if (containsRemoveClass) {
    //console.log(targetElementParent);
    targetElementParent.remove();
    //console.log("remove", containsRemoveClass);
  }
});
