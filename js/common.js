let count = 0;

const calculateCount = () => {
  let totalCount = document.getElementsByClassName('total-items');
  totalCount[0].innerHTML = 'Total Items : ' + count;
};

const addTodoList = (e) => {
  // To Do List Div
  let todolist = document.getElementById('todolist');

  // Input field - to get user input
  let inputName = document.getElementById('input-box');
  if (inputName.value === '') {
    alert('please Insert Some Text!');
    return;
  }
  count = count + 1;
  const id = `todo-${count}`;
  let newNode = document.createElement('div');
  newNode.setAttribute(
    'class',
    'flex flex-row gap-4 todo-div justify-between align-center bg-forth'
  );
  newNode.setAttribute('id', id);

  let checkIconNode = document.createElement('i');
  checkIconNode.setAttribute(
    'class',
    'fa-regular fa-square-check todo-icon color-primary'
  );
  checkIconNode.addEventListener('click', () => checkTODO(id));

  let todoNameNode = document.createElement('span');
  todoNameNode.innerText = inputName.value;
  todoNameNode.setAttribute('class', 'todo-name grow');

  let deleteIconNode = document.createElement('i');
  deleteIconNode.setAttribute(
    'class',
    'fa-solid fa-trash todo-icon color-primary'
  );
  deleteIconNode.addEventListener('click', () => deleteNode(id));

  newNode.appendChild(checkIconNode);
  newNode.appendChild(todoNameNode);
  newNode.appendChild(deleteIconNode);

  todolist.append(newNode);

  inputName.value = '';
  calculateCount();
};

const checkTODO = (id) => {
  let currentNode = document.getElementById(id);
  const checkIconNode = currentNode.firstElementChild;
  if (
    checkIconNode.className ===
    'fa-regular fa-square-check todo-icon color-primary'
  ) {
    currentNode.className =
      'flex flex-row gap-4 todo-div justify-between align-center bg-secondary';
    checkIconNode.className =
      'fa-solid fa-square-check todo-icon color-primary';
  } else {
    currentNode.className =
      'flex flex-row gap-4 todo-div justify-between align-center bg-forth';
    checkIconNode.className =
      'fa-regular fa-square-check todo-icon color-primary';
  }
};

const deleteNode = (id) => {
  console.log(id);
  let currentNode = document.getElementById(id);
  currentNode.remove();
  count = count - 1;
  calculateCount();
};
