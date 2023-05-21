type Props = {
    task: string;
};
const TodoItem = ({ task }: Props) => {
    return (
        <li>
            <span>V </span>
            {task}
            <span> x</span>
        </li>
    );
};

export default TodoItem;
