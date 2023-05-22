type Props = {
    task: string;
};
const TodoItem = ({ task }: Props) => {
    return (
        <li
            style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "15px 5px",
                backgroundColor: "#fff",
                width: "300px",
                padding: "10px 30px",
                borderRadius: "18px",
                boxShadow: "2px 5px 7px 0px #dadada",
            }}
        >
            <span>V </span>
            {task}
            <span> x</span>
        </li>
    );
};

export default TodoItem;
