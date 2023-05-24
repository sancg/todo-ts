type Props = {
    search: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const TodoSearch = (props: Props) => {
    return (
        <input
            id='searchTask'
            placeholder='Add a todo'
            value={props.search}
            onChange={props.onChange}
            style={{
                borderRadius: "18px",
                width: "300px",
                padding: "10px 30px",
                border: "2px solid #f3f3f3",
                margin: "20px 0",
            }}
        ></input>
    );
};

export default TodoSearch;
