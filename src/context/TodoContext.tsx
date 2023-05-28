import React from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";
import { Todo } from "../models/model_todo";

interface TodoInterface {
    todos: Todo;
    search: string;
    filterTodos: Todo;
    is_add: boolean;
    addTodo: () => void;
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleCompleted: (text: string) => void;
    handleDelete: (text: string) => void;
}

const defaultValue: TodoInterface = {
    todos: [],
    search: "",
    addTodo: () => {
        return;
    },
    filterTodos: [],
    handleCompleted: () => {
        return;
    },
    handleDelete: () => {
        return;
    },
    handleSearch: () => {
        return;
    },
    is_add: true,
};
const TodoContext = React.createContext(defaultValue);

type Props = {
    children: React.ReactNode;
};
const TodoProvider = ({ children }: Props) => {
    const { item: todos, saveOnLocalStorage } = useLocalStorage("TODO_V2", []);
    const [search, setSearch] = React.useState("");
    /** A copy of the current state was created in the FilterTodos variable
     * And this would be pass throughout the components on the prop.
     * @returns {Todo}
     */
    const filterTodos: Todo = todos.filter((task) => {
        const searchText = search.toLocaleLowerCase();
        const taskToFind = task.text.toLocaleLowerCase();
        return taskToFind.includes(searchText);
    });

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
        <TodoContext.Provider
            value={{
                todos,
                search,
                addTodo,
                filterTodos,
                handleCompleted,
                handleDelete,
                handleSearch: handleChangeSearch,
                is_add: is_add_available,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };
