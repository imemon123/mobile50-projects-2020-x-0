const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  //Taking input from user
  classNames.TODO_TEXT = prompt("Add Todo");

  //Creating <li>
  classNames.TODO_ITEM = document.createElement("li");

  //Creating checkbox
  classNames.TODO_CHECKBOX = document.createElement("input");
  classNames.TODO_CHECKBOX.type = "checkbox";
  classNames.TODO_CHECKBOX.name = "todo";

  //To make sure the update of every checked on clicking checkbox
  classNames.TODO_CHECKBOX.setAttribute("onclick", "updateCount()");
  classNames.TODO_ITEM.appendChild(classNames.TODO_CHECKBOX);

  //Creating Text node for TODO's
  var todo_list = document.createTextNode(classNames.TODO_TEXT);
  classNames.TODO_ITEM.appendChild(todo_list);

  var removeBtn = document.createElement("input");
  removeBtn.type = "button";
  removeBtn.value = "Remove";
  removeBtn.onclick = remove;
  classNames.TODO_ITEM.appendChild(removeBtn);
  list.appendChild(classNames.TODO_ITEM);

  itemCountSpan.innerHTML = list.getElementsByTagName("li").length;

  var countunchecked = document.querySelectorAll('input[type="checkbox"]').length
  uncheckedCountSpan.innerHTML = countunchecked;

  //Creating iife function to update the checked boxes on every adding TODO
  (function() {
      var x = document.querySelectorAll('input[type="checkbox"]:checked').length;
      uncheckedCountSpan.innerHTML = countunchecked-x;
  })();
}

function remove(e) {
  var el = e.target;
  el.parentNode.remove();
  itemCountSpan.innerHTML = list.getElementsByTagName("li").length;

  var countunchecked = document.querySelectorAll('input[type="checkbox"]').length
  uncheckedCountSpan.innerHTML = countunchecked;

  //Creating iife function to update the checked boxes on every removing of item
  (function() {
      var x = document.querySelectorAll('input[type="checkbox"]:checked').length;
      uncheckedCountSpan.innerHTML = countunchecked-x;
  })();
}
//Function triggered if click on checkboxes
window.updateCount = function() {
  var countunchecked = document.querySelectorAll('input[type="checkbox"]').length
    var x = document.querySelectorAll('input[type="checkbox"]:checked').length;
    uncheckedCountSpan.innerHTML = countunchecked-x;
};
