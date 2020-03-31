// Store array on an object
var todoList = {
    todos: [], // it's empty because we will be adding text
    // Display method 
    displayTodos: function () { 
        console.log('My todos:', this.todos); // will display 0 array 
    },
    // 3. Add method
    addTodo: function (todoText) {
       this.todos.push({
           todoText: todoText, // first todoText refers to an object, 
           completed: false    //second todoText refers to todoText as a parameter and can vary based on what we pass in
       }); 
        this.displayTodos();
    },
    // Change method
    changeTodo: function (position, todoText) {
        this.todos[position].todoText = todoText; // 
        this.displayTodos();
    },
    // Delete method
    deleteTodo: function (position) {
        this.todos.splice(position, 1); 
        this.displayTodos();
    },
    // toggle Completed method
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodos();
    }
};

// here will call our functions and will try to add, change and delete things
todoList.addTodo('first try'); // My todos: ['first try']
todoList.changeTodo(0, 'second try'); // My todos: ['second try']
todoList.toggleCompleted(0); // My todos: [] - empty