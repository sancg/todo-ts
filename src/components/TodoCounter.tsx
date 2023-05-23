type Props = {
    totalTasks?: React.JSX.Element[] | number;
    completed?: number;
};
const TodoCounter = ({ completed = 0, totalTasks = 0 }: Props) => {
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
                {completed}
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
