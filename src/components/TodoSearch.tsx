const TodoSearch = () => {
    return (
        <input
            id='searchTask'
            placeholder='Search for todo'
            style={{
                borderRadius: "18px",
                width: "300px",
                padding: "10px 30px",
                border: "2px solid #f3f3f3",
                margin: "10px 0",
            }}
        ></input>
    );
};

export default TodoSearch;
