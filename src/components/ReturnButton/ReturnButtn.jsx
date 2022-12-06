import returnButton from '../../assets/img/ReturnButton.png'
import './styles.css'

function ReturnButton(){
    return(
           <div className="component-return-button">
            <img src={returnButton} alt="" />
           </div>
    );
}

export default ReturnButton;