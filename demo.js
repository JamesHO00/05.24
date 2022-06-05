const todoListData = JSON.parse(localStorage.getItem('todoListData')) ?? [];
const todoList = document.querySelector('.todo-list');
const todoForm = todoList.querySelector('.todo-list__form');
const todoFormButton = todoForm.querySelector('button');
const todoTabs = todoList.querySelector('.todo-list__tabs');
const todoItems = todoList.querySelector('.todo-list__items');

const renderTodoList = () => {
  let todoListUI = todoListData.map(
    (element) =>
      `<li>
      <h2>${element.title}</h2>
      <span>${element.status}</span>
      </li>`,
  );
  todoItems.innerHTML = todoListUI.length
    ? todoListUI.join(' ')
    : '<div class="todo-list__not-found">目前無內容</div>';
};
todoFormButton.onclick = function (event) {
  event.preventDefault();
  todoListData.push({ title: 'ssss', status: 'status' });
  localStorage.setItem('todoList', JSON.stringify(todoListData));
  renderTodoList();
};
renderTodoList();
// localStorage.setItem('todoList', JSON.stringify(todoList));
// let todo = JSON.parse(localStorage.getItem('todoList'));
// console.log(todo);
