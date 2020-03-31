// Store array on an object
var todoList = {
    todos: [], // it's empty because we will be adding text
    // // `.displayTodo` should show `.todoText`
    // displayTodos: function () { 
    //     console.log('My todos:'); 
    //     for (var i= 0; i < this.todos.length; i++) {
    //         console.log(this.todos[i].todoText);
    //     }
    // }, // this function will display My todos: with todoText that we insert in our todoText
    // // `.displayTodo` should tell you if `.todos` is empty
    // displayTodos: function () {
    //     if (this.todos.length === 0) { // condition if it equals to 0 will display a message
    //         console.log('Your todo list is empty!');
    //     }else { // will display normal
    //         console.log('My todos:'); 
    //         for (var i= 0; i < this.todos.length; i++) {
    //             console.log(this.todos[i].todoText);
    //         }
    //     }
    // },
    // // `.displayTodo` should show `.completed`
     displayTodos: function () {
        if (this.todos.length === 0) { // condition if it equals to 0 will display a message
            console.log('Your todo list is empty!');
        }else { 
            console.log('My todos:'); 
            for (var i= 0; i < this.todos.length; i++) {
                if(this.todos[i].completed === true) { // if dotos are completed it will return (x) else  id will be unchecked 
                    console.log('(x)', this.todos[i].todoText);
                } else {
                    console.log('( )', this.todos[i].todoText); 
                }
            }
        }
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
        this.todos[position].todoText = todoText; // second todoText refers to todoText as a parameter and can vary based on what we pass in
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
todoList.addTodo('first'); // My todos: 'first'
todoList.addTodo('second'); // My todos: ( )'first' ( )'second'
todoList.toggleCompleted(1); // My todos: ( )'first' (x)'second' - will print out completed 
// if you toggle it again 
todoList.toggleCompleted(1); // My todos: ( )'first' ( )'second' - will print out like it's not completed