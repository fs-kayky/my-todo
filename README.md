# ToDo List React App

A React application for managing your to-do list. Keep track of tasks, mark them as completed, and remove items as needed.

##

![Screenshot App](https://i.imgur.com/7jyQiKe.png)

## How to Use

### Adding a To-Do

To add a new task to your to-do list:

1. Type your task in the input field with the placeholder "O que precisa ser feito?"
2. Press Enter to submit the task.
3. Your new task will be added to the list.

### Marking a To-Do as Completed

To mark a task as completed:

- Click on the task you want to mark. Alternatively, you can use the keyboard and press Enter while the task is selected.

### Removing a To-Do

To remove a task from the list:

- Click the trashcan icon (🗑️) next to the task you want to delete.

### Clear Input

To clear the input field without adding a task:

- Press the Escape key (Esc).

## Technologies Used

- React
- React Icons
- CSS

## Code Highlights

### 1. Adding a To-Do

```jsx
const submit = () => {
    erase();

    setTodos([
        ...todos,
        { id: new Date().getTime(), title: value, checked: false },
    ]);
};
```

This function adds a new to-do item to the list when the user submits a task.

### 2. Toggling To-Do Status

```jsx
const onToggle = (todo) => {
    setTodos(
        todos.map((obj) =>
            obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
        )
    );
};
```

This function toggles the status of a to-do item when clicked, demonstrating concise state updates and immutability principles in React.

Feel free to [test the application](#) and explore its features!
