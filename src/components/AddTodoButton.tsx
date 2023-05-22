import { useState } from "react";
import TodoItem from "./TodoItem";

const AddButton = () => {
    const [task, setTask] = useState<React.JSX.Element[]>([]);
    const [titleTask, setTitleTask] = useState("");
    const handler = (event: React.MouseEvent<HTMLElement>) => {
        if (!titleTask) return alert("Please enter title");
        console.log(titleTask);
        setTask([...task, <TodoItem task={titleTask} />]);
        setTitleTask("");
        console.log(task);
    };
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

export { AddButton };
