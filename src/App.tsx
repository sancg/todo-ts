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

const is_todo = localStorage.getItem("tasks");
let initialized: Todo = [];
if (typeof is_todo === "string") {
    initialized = JSON.parse(is_todo);
}

function App() {
    const [tasks, setTasks] = useState<Todo>(initialized);
    const [search, setSearch] = useState("");

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    /** It was created a copy of the current state of Tasks
     * And this would be render on the prop
     *
     */
    const filterTodos: Todo = tasks.filter((task) => {
        const searchText = search.toLocaleLowerCase();
        const taskToFind = task.text.toLocaleLowerCase();
        return taskToFind.includes(searchText);
    });

    const isTask = filterTodos.length < 2 ? false : true;
    const addTodo = () => {
        if (!search) return alert("Please enter a Todo");
        setTasks([...tasks, { text: search, completed: false }]);
        setSearch("");
    };

    const handleCompleted = (text: string) => {
        const newTodos = [...tasks];
        const todoIndex = newTodos.findIndex((todo) => todo.text === text);

        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        setTasks(newTodos);
    };

    const handleDelete = (text: string) => {
        const newTodos = tasks.filter((todo) => todo.text !== text);
        setTasks(newTodos);
    };

    return (
        <div className='App'>
            <TodoCounter tasks={tasks} />

            <TodoSearch search={search} onChange={handleChange} onKeyPress={addTodo} />
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

            <AddButton isTask={isTask} onClick={addTodo} />
        </div>
    );
}

export default App;
