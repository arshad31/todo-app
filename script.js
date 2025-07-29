const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let todos = [];

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = todo;

    const updateBtn = document.createElement("button");
    updateBtn.className = "btn btn-success btn-sm me-2";
    updateBtn.textContent = "Update";

    updateBtn.addEventListener("click", () => {
      updateTodo(index);
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
      deleteTodo(index);
    });

    li.appendChild(updateBtn);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}


function addTodo(todoText) {
  if (todoText.trim() === '') return;

  todos.push(todoText.trim());
  renderTodos();
  todoInput.value = '';
}

todoForm.addEventListener('submit', function(e) {
  e.preventDefault();
  addTodo(todoInput.value);
});

function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

function updateTodo(index) {
  const updatedText = prompt("Update todo:", todos[index]);
    todos[index] = updatedText.trim();
    renderTodos();
}


