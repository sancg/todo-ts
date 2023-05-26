import { Todo } from "../models/model_todo";

const useLocalStorage = () => {
    const is_todo = localStorage.getItem("TODO_V1");

    let initialized: Todo = [];
    if (typeof is_todo === "string") {
        initialized = JSON.parse(is_todo);
    }
};
