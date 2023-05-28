import React from "react";
import { Todo } from "../models/model_todo";

export const useLocalStorage = (key: string, initialValue: Todo | []) => {
    const is_todo = localStorage.getItem(key);

    let initialized = initialValue;
    if (typeof is_todo === "string") {
        initialized = JSON.parse(is_todo);
    }

    const [item, setItem] = React.useState(initialized);

    const saveOnLocalStorage = (list: Todo | []) => {
        localStorage.setItem(key, JSON.stringify(list));
        setItem(list);
    };

    return {
        item,
        saveOnLocalStorage,
    };
};
