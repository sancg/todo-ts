type Props = {
    task: string;
    completed?: boolean;
};
const TodoItem = ({ task, completed }: Props) => {
    return (
        <li
            style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "15px 0",
                backgroundColor: "#fff",
                padding: "10px 30px",
                borderRadius: "18px",
                boxShadow: "2px 5px 7px 0px #dadada",
            }}
            className=""
        >
            <span>V </span>
            <p>{task}</p>
            <span> x</span>
        </li>
    );
};

export default TodoItem;
