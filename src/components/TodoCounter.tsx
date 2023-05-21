import { ReactNode, useState } from "react";

type Props = {
    tasks: React.JSX.Element[];
};
const TodoCounter = (props: Props) => {
    return (
        <h1>
            Completed tasks {0} / {props.tasks.length}
        </h1>
    );
};

export default TodoCounter;
