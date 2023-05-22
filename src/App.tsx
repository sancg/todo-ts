import "./App.css";
import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import { AddButton } from "./components/AddTodoButton";

type Todo = {
    text: string;
    completed: boolean;
}[];

const defaultTodos: Todo = [
    { text: "Project Kindle to Notes", completed: false },
    { text: "Learn React + TS", completed: false },
    { text: "FrontEnd path", completed: false },
    { text: "Project Kindle to Notes", completed: false },
];

function App() {
    return (
        <div className='App'>
            <TodoCounter completed={0} totalTasks={defaultTodos.length} />

            <TodoSearch />
            <TodoList>
                {defaultTodos.map((task) => (
                    <TodoItem key={task.text} task={task.text} />
                ))}
            </TodoList>

            <AddButton />
        </div>
    );
}

export default App;
