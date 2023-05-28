import { theme } from '../../../constants/theme'

const TodoElement = ({ todo }) => {
    return (
        <li
            style={{
                backgroundColor: theme.secondary,
                padding: '.1rem',
                listStyle: 'none',
                marginTop: '1rem',
                borderRadius: '15px',
            }}
        >
            <h3>{todo.content}</h3>
        </li>
    )
}

export default TodoElement