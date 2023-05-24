import { useState } from "react";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import { AddButton } from "./components/AddTodoButton";
import "./App.css";

type Todo = {
    text: string;
    completed?: boolean;
}[];

const defaultTodos: Todo = [
    { text: "Project Kindle to Notes", completed: false },
    { text: "Learn React + TS", completed: false },
    { text: "FrontEnd path", completed: true },
];

function App() {
    const [tasks, setTasks] = useState<Todo>(defaultTodos);
    const [search, setSearch] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value);
        setSearch(e.currentTarget.value);
    };

    /** It was created a copy of the current state of Tasks
     * And this would be render on the prop
     *
     */
    const searchTodos: Todo = tasks.filter((task) => {
        const searchText = search.toLocaleLowerCase();
        const taskToFind = task.text.toLocaleLowerCase();
        return taskToFind.includes(searchText);
    });

    const completedTask = tasks.filter((item) => item.completed).length;
    const totalTask = tasks.length;
    return (
        <div className='App'>
            <TodoCounter completed={completedTask} totalTasks={totalTask} />

            <TodoSearch search={search} onChange={handleChange} />
            <TodoList>
                {searchTodos.map((task) => (
                    <TodoItem key={task.text} task={task.text} />
                ))}
            </TodoList>

            <AddButton />
        </div>
    );
}

export default App;
