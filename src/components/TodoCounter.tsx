import { Todo } from "../App";

type Props = {
    tasks: Todo;
};

const TodoCounter = ({ tasks }: Props) => {
    // Scores
    const completedTasks = tasks.filter((item) => item.completed).length;
    const totalTasks = tasks.length;

    return (
        <h1
            style={{
                marginTop: "20px",
                fontSize: "24px",
                fontWeight: 400,
            }}
        >
            Completed tasks{" "}
            <span
                style={{
                    color: "#4ec600",
                }}
            >
                {completedTasks}
            </span>{" "}
            /{" "}
            <span
                style={{
                    color: "#6273fd",
                }}
            >
                {totalTasks}
            </span>
        </h1>
    );
};

export default TodoCounter;
