// Selectors
// Use query selector to retrieve element reference to form elements
// Call addEventListener to register handleSubmitForm fx to handle submit event
// Use query selector to retrieve elemtn reference to ul elements
// Call addEventListener to register handleclickdeleteorcheck fx to handle icon clicks
document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.getElementById('clearAll').addEventListener('click', handleClearAll);
// Event Handler
// e.preventDefault prevents default form submit behavior
// Retrieve input using Query Selector and store as element reference
// Can retrieve input value using input.value
// if input value is not empty, addTodo helper function is called and current input value
// is passed to that function as a parameter
// Finallly input value is reset to empty string
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input.value != '')
        addTodo(input.value);
    input.value = '';
}

function handleClickDeleteOrCheck(e) {
    if (e.target.name == 'checkButton')
        checkTodo(e);

    if (e.target.name == 'deleteButton')
        deleteTodo(e);
}

function handleClearAll(e) {
    document.querySelector('ul').innerHTML = '';
}

// Helper functions
// Reference to ul element is retrieved
// List element is created by doucment.createElement method, stored in li variable
// li element will contain output which is done for every todo elements
// Insert innerHTML code of li element by assigning code string to property innerHTML of li element
// Output consists of todo text, check button and delete Button
function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    //  3 list elements created
    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;
    // create a class for the li element
    li.classList.add('todo-list-item');
    // Finally, new li element is added as a child to the ul element, so that it becomes visible in browser
    ul.appendChild(li);
}

function checkTodo(e) {
    let item = e.target.parentNode;
    if (item.style.textDecoration == 'line-through')
        item.style.textDecoration = 'none';
    else
        item.style.textDecoration = 'line-through';
}

function deleteTodo(e) {
    let item = e.target.parentNode;
    item.addEventListener('transitionend', function() {
        item.remove();
    })
    item.classList.add('todo-list-item-fall');
}
