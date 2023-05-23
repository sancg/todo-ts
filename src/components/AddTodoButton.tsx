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
        <div className='newTask'>
            <input
                type='text'
                value={titleTask}
                placeholder='Write a new task'
                onChange={(event) => {
                    setTitleTask(event.currentTarget.value);
                }}
                style={{
                    borderRadius: "18px",
                    width: "240px",
                    padding: "10px 30px",
                    border: "2px solid #f3f3f3",
                    margin: "10px 0",
                }}
            />
            <button onClick={handler} style={{
                background: "var(--p-main)",
                color: "white",
                padding: '5px',
                border: '1px #f3f3f3 solid'
            }}>
                +
            </button>
        </div>
    );
};

export { AddButton };
