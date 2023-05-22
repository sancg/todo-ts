type Props = {
    children: React.ReactNode;
};
const TodoList = ({ children }: Props) => {
    return <ul className='TodoList'>{children}</ul>;
};

export default TodoList;
