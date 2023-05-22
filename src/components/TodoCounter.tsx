import { ReactNode, useState } from "react";

type Props = {
    totalTasks?: React.JSX.Element[] | number;
    completed?: number;
};
const TodoCounter = ({ completed = 0, totalTasks = 0 }: Props) => {
    return (
        <h1>
            Completed tasks {completed} / {totalTasks}
        </h1>
    );
};

export default TodoCounter;
