import './styles.css'

function Button(props) {
    return (
        <button className='button-component'>
            {props.text}
        </button>
    );
}

export default Button;