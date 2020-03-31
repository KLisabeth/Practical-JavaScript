# Practical-JavaScript: Todo List

Build this app with one step at a time with a practical video tutorial by Gordon Zhu

## 0. Setup

- Create all separate files  
   * `practical-exercises` - with exercises
   * `index.html` 
   * `log.js`- with log
   * `init.js` - with windows on load function
   * `data.js` 
   * `handlers.js` 
   * `views.js`
   * `style.css` 


## 1. User Story: As a user I want to be able to add items in my Todo List

- In `index.html` will create < input > with `id` "addTodoTextInput", a < button > with `onclick` action to trigger `addTodo` handler.

- In `data.js` will initialize `addTodo` function to `push` new `todoText` in todoList.

- In `handlers.js` will initialize `addTodo` function to assign new value for todoList.

- In `views.js` will initialize `displayTodos` function to add new todo in < li> forEach in todoList.



## 2. User Story: As a user I want to be able to change items in my Todo List

- In `index.html` will create a < button > with `onclick` action to trigger `changeTodo` handler & two < input > with `id` "changeTodoPositionInput" and type="number" & with `id` "changeTodoTextInput" with type="text".

- In `handlers.js` will initialize `changeTodo` function to be able to change value in 'changeTodoPositionInput' and 'changeTodoTextInput' for todoList.

- In `data.js` will initialize `changeTodo` function to change `todoText` for todoList .



## 3. User Story: As a user I want to be able to check completed items in my Todo List if it's done

- In `index.html` will create a < button > with `onclick` action to trigger `toggleCompleted` handler, and an < input > with `id` "toggleCompletedPositionInput". 
- In `handlers.js` will initialize `toggleCompleted` function to change value in todoList.

- In `data.js` will initialize `toggleCompleted` function for todoList to modify position of completed object.

- In `views.js` will initialize `displayTodos` function to add new todo in < li> forEach and if it's completed to check or uncheck items in todoList.


## 4. User Story: As a user I want to be able to toggle All items in my Todo List if it's done or otherwise.

- In `index.html` will create a < button > with `onclick` action to trigger `toggleAll` handler.

- In `handlers.js` will initialize `toggleAll` function in todoList.

- In `data.js` will initialize `toggleAll` function for todoList to `.toggleAll`: If everything is `true`, make everything `false` otherwise make everything `true`.

- In `views.js` will initialize `displayTodos` function to add new todo in < li> forEach and if it's completed to check or uncheck items in todoList.

## 4. User Story: As a user I want to be able to delete items from my created List

- In `handlers.js` will initialize `deleteTodo` function in todoList.

- In `data.js` will initialize `deleteTodo` function to `splice` items position in todoList.

- In `views.js` will initialize `createDeleteButton` function to add new 'Delete' button for each created item in < li> and  `setUpEventListeners` function for our 'Delete' button to delete each clicked on delete button item.

## 5. User Story: As a user I want to see beautiful Todo List

- In `style.css` will style `body`, `#container`,`h1`,`input` and `input` for text and number types separately, `button`

## 6. User Story: As a user I don't care about beautiful Todo List and just want it very plain

- Than i can skip creating `style.css` file.