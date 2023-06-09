type Props = {
    search: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyPress: () => void;
};
const TodoSearch = ({ search, onChange, onKeyPress }: Props) => {
    return (
        <input
            id='searchTask'
            placeholder='Add a todo'
            value={search}
            onChange={onChange}
            onKeyDown={(e) => {
                if (e.key === "Enter") {
                    onKeyPress();
                }
            }}
            style={{
                borderRadius: "18px",
                padding: "10px 30px",
                border: "2px solid #f3f3f3",
                margin: "20px 0",
            }}
        ></input>
    );
};

export default TodoSearch;
