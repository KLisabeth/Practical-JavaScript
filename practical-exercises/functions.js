// Stored todos
var todos = ['item 1', 'item 2', 'item 3'];

// Display function
function displayTodos() {
    console.log('My todos:', todos);
}
displayTodos();
// My todos: ['item 1', 'item 2', 'item 3'];


// Add function
function addTodo(todo) {
    todos.push(todo);
    displayTodos(); // used to display function
}
addTodo('hello there');
// My todos: ['item 1', 'item 2', 'item 3', 'hello there'];

// Change function
function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}
changeTodo(0, 'changed');
// My todos: ['changed', 'item 2', 'item 3', 'hello there'];

// Delete function
function deleteTodo(position) {
    todos.splice(position, 1); // one stands for how many items to be deleted
    displayTodos()
}
deleteTodo(0) // zero assigned for position (which is 'item 1')
// My todos: ['item 2', 'item 3', 'hello there'];