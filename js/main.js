const todoForm = document.querySelector("#todoForm");
const inputTodo = document.querySelector("#inputTodo");
const todoList = document.querySelector("#todoList");

function saveTodoInContainer(todoText) {
  console.log(`salvo: ${todoText}`);

  const todoContainerElement = document.createElement("div");
  todoList.appendChild(todoContainerElement);

  const todoTextElement = document.createElement("p");
  todoTextElement.textContent = todoText;
  todoContainerElement.appendChild(todoTextElement);

  const buttonFinishTodoElement = document.createElement("button");
  buttonFinishTodoElement.innerHTML = '<i class="bi bi-check-lg">';
  todoContainerElement.appendChild(buttonFinishTodoElement);

  const buttonRemoveTodoElement = document.createElement("button");
  buttonRemoveTodoElement.innerHTML = '<i class="bi bi-x-lg">';
  todoContainerElement.appendChild(buttonRemoveTodoElement);

  console.log(`Container: ${todoList.innerHTML}`);
}

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (inputTodo.value) {
    saveTodoInContainer(inputTodo.value);
    console.log(inputTodo.value);
  }

  inputTodo.value = "";
  inputTodo.focus();
});
