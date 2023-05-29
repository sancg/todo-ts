import React from "react";
import { Todo } from "../models/model_todo";

export const useLocalStorage = (key: string, initialValue: Todo | []) => {
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState<Todo>(initialValue);
    React.useEffect(() => {
        setTimeout(() => {
            const is_todo = localStorage.getItem(key);

            let initialized = initialValue;
            if (typeof is_todo === "string") {
                initialized = JSON.parse(is_todo);
            }

            setItem(initialized);
            console.log("TimeOut -> has passed");
            setLoading(false);
        }, 1000);
    }, []);

    const saveOnLocalStorage = (list: Todo | []) => {
        localStorage.setItem(key, JSON.stringify(list));
        setItem(list);
    };

    return {
        item,
        saveOnLocalStorage,
        loading,
        setLoading,
    };
};
