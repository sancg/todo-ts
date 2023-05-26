import { useEffect, useState } from "react";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import { AddButton } from "./components/AddTodoButton";
import "./App.css";

export type Todo = {
    text: string;
    completed?: boolean;
}[];

const is_todo = localStorage.getItem("TODO_V1");
let initialized: Todo = [];
if (typeof is_todo === "string") {
    initialized = JSON.parse(is_todo);
}

function App() {
    const [todos, setTodos] = useState<Todo>(initialized);
    const [search, setSearch] = useState("");

    /** A copy of the current state was created in the FilterTodos variable
     * And this would be pass throughout the components on the prop.
     * @returns {Todo}
     */
    const filterTodos: Todo = todos.filter((task) => {
        const searchText = search.toLocaleLowerCase();
        const taskToFind = task.text.toLocaleLowerCase();
        return taskToFind.includes(searchText);
    });

    const saveOnLocalStorage = (list: Todo) => {
        localStorage.setItem("TODO_V1", JSON.stringify(list));
        setTodos(list);
    };

    const is_add_available = filterTodos.length < 2 ? false : true;
    const addTodo = () => {
        if (!search) return alert("Please enter a Todo");
        saveOnLocalStorage([...todos, { text: search, completed: false }]);
        setSearch("");
    };

    /* retrieving the input from user */
    const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    const handleCompleted = (text: string) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);

        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveOnLocalStorage(newTodos);
    };

    const handleDelete = (text: string) => {
        const newTodos = todos.filter((todo) => todo.text !== text);
        saveOnLocalStorage(newTodos);
    };

    return (
        <div className='App'>
            <TodoCounter tasks={todos} />

            <TodoSearch search={search} onChange={handleChangeSearch} onKeyPress={addTodo} />
            <TodoList>
                {filterTodos.map((task, i) => (
                    <TodoItem
                        key={i + "-" + task.text}
                        text={task.text}
                        completed={task.completed}
                        onCompleted={() => handleCompleted(task.text)}
                        onDelete={() => handleDelete(task.text)}
                    />
                ))}
            </TodoList>

            <AddButton isTask={is_add_available} onClick={addTodo} />
        </div>
    );
}

export default App;
