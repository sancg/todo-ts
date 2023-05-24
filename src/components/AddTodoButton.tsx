type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isTask: boolean;
};

const AddButton = ({ onClick, isTask }: Props) => {
    return (
        <div className='newTask'>
            {!isTask && (
                <button
                    disabled={isTask}
                    onClick={onClick}
                    style={{
                        background: "var(--p-main)",
                        color: "white",
                        padding: "10px 0",
                        fontSize: "20px",
                        border: "1px #f3f3f3 solid",
                        width: "100%",
                    }}
                >
                    +
                </button>
            )}
        </div>
    );
};

export { AddButton };
