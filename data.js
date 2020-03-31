var todoList = {
  todos: [], // it's empty because we will be adding text

    addTodo: function (todoText) {
       this.todos.push({
            todoText: todoText, // first todoText refers to an object, 
            completed: false
        });
    },
    changeTodo: function (positionToChange, todoText) {
        this.todos[positionToChange].todoText = todoText; // second todoText refers to todoText as a parameter and can vary based on what we pass in
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    },
    toggleCompleted: function (positionToModify) { 
        var todo = this.todos[positionToModify];
        todo.completed = !todo.completed;
    },
    toggleAll: function () { 
        var totalTodos = this.todos.length;
        var completedTodos = 0;

        this.todos.forEach(function (todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });

        this.todos.forEach(function (todo) {
            if (completedTodos === totalTodos) { // If everything's true, make everything false.
                todo.completed = false;
            } else { // Otherwise, make everything true.
                todo.completed = true;
            }
        });
    }
};