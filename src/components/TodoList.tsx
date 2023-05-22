type Props = {
    children: React.ReactNode;
};
const TodoList = ({ children }: Props) => {
    return <ul>{children}</ul>;
};

export default TodoList;
