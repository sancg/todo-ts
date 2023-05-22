import { ReactNode, useState } from "react";

type Props = {
    totalTasks?: React.JSX.Element[] | number;
    completed?: number;
};
const TodoCounter = ({ completed = 0, totalTasks = 0 }: Props) => {
    return (
        <h1
            style={{
                fontSize: "24px",
                fontWeight: 400,
            }}
        >
            Completed tasks{" "}
            <span
                style={{
                    fontWeight: 700,
                    color: "green",
                }}
            >
                {completed}
            </span>{" "}
            /{" "}
            <span
                style={{
                    fontWeight: 700,
                    color: "blue",
                }}
            >
                {totalTasks}
            </span>
        </h1>
    );
};

export default TodoCounter;
