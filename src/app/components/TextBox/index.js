const TextBox = () => {
    return (
        <div>
            <input 
                type="text" 
                placeholder="Add a task" 
                id="taskInput"
                style={{
                    padding: '1rem',
                    outline: 'none',
                    border: '3px solid red',
                    _hover: {
                        border: '3px solid blue',
                        backgroundColor: 'lightblue'
                    
                    }
                }}
            />
        </div>
    )
}

export default TextBox;