type Props = {
    text: string;
    completed?: boolean;
    onCompleted: () => void;
    onDelete: () => void;
};
const TodoItem = ({ text, completed, onCompleted, onDelete }: Props) => {
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
        >
            <span onClick={onCompleted}>{`${completed ? "✅" : "⭕️"}`}</span>
            <p>{text}</p>
            <span onClick={onDelete}>x</span>
        </li>
    );
};

export default TodoItem;
