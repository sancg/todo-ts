import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import LoadingSkeleton from "./components/LoadingSkeleton/LoadingSkeleton";
import { AddButton } from "./components/AddTodoButton";
import { TodoContext } from "./context/TodoContext";
import "./App.css";
import { useContext } from "react";

function App() {
    const {
        todos,
        search,
        addTodo,
        filterTodos,
        handleCompleted,
        handleDelete,
        handleSearch: handleChangeSearch,
        is_add: is_add_available,
        isLoading,
    } = useContext(TodoContext);
    return (
        <div className='App'>
            <TodoCounter tasks={todos} />
            <TodoSearch search={search} onChange={handleChangeSearch} onKeyPress={addTodo} />
            {isLoading && (
                <div>
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                    <LoadingSkeleton />
                </div>
            )}
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

            {!isLoading && <AddButton isTask={is_add_available} onClick={addTodo} />}
        </div>
    );
}

export default App;
