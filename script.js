// CONST
const domSelectors = {
  todolistHeader: ".todolist__header",
  todolistContent: ".todolist__content",
};

// DOM elements
const todolistHeaderElement = document.querySelector(
  domSelectors.todolistHeader
);

//data
const title = "My To Do List";
const submitText = "Add";
let todos = [
  {
    userId: 1,
    id: 1,
    title: "Practice Coding",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "Gocery Shopping",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "Pay Bill",
    completed: true,
  },
  {
    userId: 1,
    id: 4,
    title: "Go to Gym",
    completed: false,
  },
];

function deletTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
}

function generateHeaderContent(title, submitText) {
  return `<h1 class="todolist__header__title">${title}</h1>
  <div class="input-bar">
    <!--Reuseable input bar-->
    <input class="input-bar__input" type="text" />
    <button class="input-bar__submit">${submitText}</button>
  </div>`;
}

function generateTodoItem(todo) {
  return `<li class="todolist__content__row">
  <span class="todolist__content__item">${todo.title}</span>
  <button id="todo-${todo.id}"class="todolist__content__action">x</button>
</li>`;
}

function generateTodoList(todo) {
  return todos.map((todo) => generateTodoItem(todo)).join("");
}

generateTodoList(todos);

function renderHeader(title, submitText) {
  const ele = document.querySelector(domSelectors.todolistHeader);
  const tmp = generateHeaderContent(title, submitText);
  render(ele, tmp);
}

function renderTodoList(todos) {
  const tmp = generateTodoList(todos);
  const ele = document.querySelector(domSelectors.todolistContent);
  render(ele, tmp);
}

function render(element, template) {
  element.innerHTML = template;
}

function setUpEvent() {
  document
    .querySelector(domSelectors.todolistContent)
    .addEventListener("click", (e) => {
      if (isDeleteButton(e.target)) {
        const id = getTodoIdFromBtn(e.target);
        deletTodo(id);
        console.log(todos);
      }
    });
}

function getTodoIdFromBtn(btnElement) {
  return +btnElement.parentElement.id.substring(5);
}

function isDeleteButton(element) {
  return element.classList.contains("todolist__content__action");
}

// generateHeaderContent(title, submitText);

// init
renderHeader(title, submitText);
renderTodoList(todos);

//init Event
setUpEvent();
