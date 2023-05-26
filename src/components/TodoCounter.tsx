import { Todo } from "../models/model_todo";

type Props = {
    tasks: Todo;
};

type RenderProps = {
    completedTasks: number;
    totalTasks: number;
};

const RenderScore = ({ completedTasks, totalTasks }: RenderProps) => {
    return (
        <p>
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
        </p>
    );
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
            {totalTasks == 0 && "🌱 Create your Todos 🌱"}
            {totalTasks > 0 && (
                <RenderScore completedTasks={completedTasks} totalTasks={totalTasks} />
            )}
        </h1>
    );
};

export default TodoCounter;
