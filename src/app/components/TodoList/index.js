import TodoElement from "./components/TodoElement"

const TodoList = ({ todos }) => {
    return (
        <div>
            <ul
                style={{
                    padding: '0'
                }}
            >
                {todos.map(todo => 
                    <TodoElement
                        key={todo.id}
                        todo={todo}
                    />
                )}
            </ul>
        </div>
    )
}

export default TodoList