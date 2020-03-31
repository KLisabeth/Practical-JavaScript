// Created an Array and now we can store todos
var todos = ['item 1', 'item 2', 'item3']; 

// Display todos
console.log(todos); // Array(3) ['item 1', 'item 2', 'item3']; 

// Add new todos 
todos.push('item 4'); 
todos.push('item 5'); // Add another todos 
console.log('My Todos:', todos); // Call to display changes

// My Todos: ['item 1', 'item 2', 'item3', 'item 4', 'item 5'];

// Change todos
todos[0] = 'item 1 updated'; 
console.log('My Todos:', todos); // Call to display changes

// My Todos: ['item 1 updated', 'item 2', 'item3', 'item 4', 'item 5'];

//Delete todos 
todos.splice(0, 1); // Deleting first item
console.log('My Todos:', todos); // Call to display changes

// My Todos: ['item 2', 'item3', 'item 4', 'item 5'];


todos.splice(2, 1); // Deleting todos 'item 4' 
console.log('My Todos:', todos); // Call to display changes

// My Todos: ['item 2', 'item3', 'item 5'];