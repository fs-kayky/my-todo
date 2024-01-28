import { MdDelete } from 'react-icons/md';
import React, { useState } from 'react';
import './App.css';

function App() {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [todos, setTodos] = useState([]);
    const [value, setValue] = useState('');
    const erase = () => {
        setValue('');
    };
    const submit = () => {
        erase();

        setTodos([
            ...todos,
            { id: new Date().getTime(), title: value, checked: false },
        ]);
    };
    const onChange = (event) => {
        setValue(event.target.value);
    };
    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY) {
            submit();
        } else if (event.which === ESCAPE_KEY) {
            erase();
        }
    };

    const onRemove = (todo) => {
        setTodos(todos.filter((obj) => obj.id !== todo.id));
    };

    const onToggle = (todo) => {
        setTodos(
            todos.map((obj) =>
                obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
            )
        );
    };

    return (
        <section id="app" className="container">
            <header>
                <h1 className="tittle">To-do</h1>
            </header>
            <section className="main">
                <input
                    className="new-todo"
                    placeholder="O que precisa ser feito?"
                    value={value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                />
                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id.toString()}>
                            <span
                                onClick={() => onToggle(todo)}
                                role="button"
                                onKeyPress={() => onToggle(todo)}
                                className={[
                                    'todo',
                                    todo.checked ? 'checked' : '',
                                ].join(' ')}
                                tabIndex={0}
                            >
                                {todo.title}
                            </span>
                            <button
                                onClick={() => onRemove(todo)}
                                aria-label="Save"
                                className="remove"
                                type="button"
                            >
                                <MdDelete size={28} />
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}

export default App;
