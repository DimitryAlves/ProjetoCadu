import './styles.css'

function TextField(props){
    return(
            <input
            className="text-field-component" 
            type={props.type}
            placeholder={props.placeholder}
            required={props.required}
             />
       
    );
}

export default TextField