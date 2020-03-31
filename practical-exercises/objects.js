// Store array on an object
var todoList = {
    todos: ['item 1', 'item 2', 'item 3'],
    // Display method 
    displayTodos: function () { 
        console.log('My todos:', this.todos); 
    },
    // 3. Add method
    addTodo: function (todo) {
       this.todos.push(todo); // using 'this' will refer to todos property
        this.displayTodos(); // useing 'this' with displayTodos will refer to display function
    },
    // Change method
    changeTodo: function (position, newValue) {
        this.todos[position] = newValue; 
        this.displayTodos();
    },
    // Delete method
    deleteTodo: function (position) {
        this.todos.splice(position, 1); 
        this.displayTodos();
    }
};
// here will call our functions and will try to display, add, change and delete things
todoList.displayTodos(); // My todos: ['item 1', 'item 2', 'item 3']
todoList.addTodo('plunker'); // My todos: ['item 1', 'item 2', 'item 3', 'plunker']
todoList.changeTodo(0, 'first'); // My todos: ['first', 'item 2', 'item 3', 'plunker']
todoList.deleteTodo(1); // My todos: ['first', 'item 3', 'plunker']