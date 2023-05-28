import { theme } from '../../constants/theme'
const TextBox = ({ onsubmit }) => {

    const handleSubmit = (e) => {
        if(e.code === 'Enter') {
            onsubmit(e.target.value)
            e.target.value = ''
        }
    }

    return (
        <div>
            <input 
                onKeyUp={handleSubmit}
                type="text" 
                placeholder="Add a task" 
                id="taskInput"
                style={{
                    padding: '1rem',
                    outline: 'none',
                    border: `3px solid ${theme.secondary}`,
                    backgroundColor: theme.primary,
                    borderRadius: '10px',
                    color: theme.text.primary,
                    transition: 'all .2s ease',
                    _hover: {
                        borderColor: 'rgba(255,255,255,0.1)',
                    },
                    _placeholder: {
                        color: theme.text.secondary
                    }
                }}
            />
        </div>
    )
}

export default TextBox;