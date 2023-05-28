import TodoCounter from "./components/TodoCounter";
import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";
import { AddButton } from "./components/AddTodoButton";
import { TodoContext, TodoProvider } from "./context/TodoContext";
import "./App.css";

function App() {
    return (
        <TodoProvider>
            <TodoContext.Consumer>
                {({
                    todos,
                    search,
                    addTodo,
                    filterTodos,
                    handleCompleted,
                    handleDelete,
                    handleSearch: handleChangeSearch,
                    is_add: is_add_available,
                }) => (
                    <div className='App'>
                        <TodoCounter tasks={todos} />
                        <TodoSearch
                            search={search}
                            onChange={handleChangeSearch}
                            onKeyPress={addTodo}
                        />
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
                )}
            </TodoContext.Consumer>
        </TodoProvider>
    );
}

export default App;
