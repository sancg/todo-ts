import { useState } from "react";
import "./App.css";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
    const [task, setTask] = useState([<TodoItem task='Learning React + TS' />]);
    const [titleTask, setTitleTask] = useState("");
    const handler = (event: React.MouseEvent<HTMLElement>) => {
        if (!titleTask) return alert("Please enter title");
        console.log(titleTask);
        setTask([...task, <TodoItem task={titleTask} />]);
        setTitleTask("");
    };
    const AddButton = () => {
        return (
            <>
                <input
                    type='text'
                    value={titleTask}
                    placeholder='New task to add'
                    onChange={(event) => {
                        // setTimeout(() => console.log(event.currentTarget.value), 100);
                        setTitleTask(event.currentTarget.value);
                    }}
                />
                <button type='submit' onClick={handler}>
                    Add Task
                </button>
            </>
        );
    };
    return (
        <div className='App'>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {task.map((list, index) => (
                    <div key={index}>{list}</div>
                ))}
            </TodoList>

            <AddButton />
        </div>
    );
}

export default App;
