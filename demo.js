// 去取得localStorage上方的資料若沒有則回傳結果null
//原本是使用兩個空陣列指空值合併運算符

// const todoListData = JSON.parse(localStorage.getItem('todoList')) ?? [];

// 三元運算式寫法，當localStorage存在todoList的資料轉成Object，不存在則給[]
const todoListData = localStorage.getItem('todoList')
  ? JSON.parse(localStorage.getItem('todoList'))
  : [];

// 去取得DOM上面的class名稱是todoList的節點
const todoList = document.querySelector('.todo-list');

// 去取得todoList上面的class名稱是todo-list__form的節點
const todoForm = todoList.querySelector('.todo-list__form');

// 去取得todoForm中第一個button的節點
const todoFormButton = todoForm.querySelector('button');

// 去取得todoForm中第一個input的節點
const todoFormInput = todoForm.querySelector('input');

// 去取得todoList上面的class名稱是todo-list__tabs的節點
const todoTabs = todoList.querySelector('.todo-list__tabs');

// 去取得todoLis上面的class名稱是todo-list__items的節點
const todoItems = todoList.querySelector('.todo-list__items');

// 建立一個協助我們渲染頁面 todo-list的函式
const renderTodoList = () => {
  // 宣告一個將要被渲染到html的變數
  // 讓要被渲染到html的物件，指定成一個map出來的新陣列，此處要回傳一個html的模板
  let todoListUI = todoListData.map(
    (element) =>
      `<li>
      <h2>${element.title}</h2>
      <span>${element.status}</span>
      </li>`,
  );
  // 這裡可以個別將todoListUI與todoListData列印出來，並觀察其中的差異
  console.log(todoListData);
  console.log(todoListUI);

  // 這裡會將todoItems這個node節點所在的html置換成下方的一種方式
  // 藉由三元運算式，去判斷陣列是否含有內容(用長度去判斷)，沒有內容則增加提示區塊
  todoItems.innerHTML = todoListUI.length
    ? todoListUI.join(' ')
    : '<div class="todo-list__not-found">目前無內容</div>';
};

//幫todoFormButton增加點擊事件
todoFormButton.onclick = function (event) {
  // 因為button式放在form中因此點擊時會送出表單，這裡是讓此操作停止
  event.preventDefault();

  // 從todoFormInput上方取得輸入值
  const inputValue = todoFormInput.value;

  // 判斷inputValue，在被剪裁去空格後，是否還有內容值，若變為空字串則會轉換成false
  if (!inputValue.trim()) {
    // 將todoFormInput的數值改成空字串
    todoFormInput.value = ' ';
    // 將函式進行return，後續程式不在運作
    return;
  }

  // 將todoFormInput的數值改成空字串
  todoFormInput.value = ' ';

  // 新增一筆資料到todoListData這個array上
  todoListData.push({ title: inputValue, status: 'status' });
  // 將新增的資料轉成JSON上傳至localStorage
  localStorage.setItem('todoList', JSON.stringify(todoListData));
  // 觸發畫面更新函式，此時localStorage上已經新增一筆資料，畫面上可以增加一筆項目
  renderTodoList();
};

// 初始化操做，沒有執行的話，預設內容會是空白
renderTodoList();
// localStorage.setItem('todoList', JSON.stringify(todoList));
// let todo = JSON.parse(localStorage.getItem('todoList'));
// console.log(todo);
