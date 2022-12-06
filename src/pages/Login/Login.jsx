import './styles.css'

import User from '../../assets/img/imgUser.png'
import inputUser from '../../assets/img/inputUser.png'
import inputPassWord from '../../assets/img/inputPassword.png'
import cearaLogo from '../../assets/img/cearaLogo.png'
import Button from '../../components/Button/Button'
import TextField from '../../components/TextField/TextField'


function Login() {
    return (
        <div className="login-page">

            <div className="login-card">

                <div className="login-user-container">
                    <div className="login-image-user">
                        <img src={User} alt="" />
                    </div>
                </div>



                <form>
                    <div className="login-form">

                        <div className="login-input-group-user">
                            <TextField
                                type='text'
                                placeholder='Usuário' />
                            <img src={inputUser} alt="" />
                        </div>

                        <div className="login-input-group-password">
                            <TextField
                                type='text'
                                placeholder='Senha' />
                            <img src={inputPassWord} alt="" />
                        </div>
                        
                        <div className="login-button">
                            <Button text='Entrar' />
                            <a href="">Cadastrar-se</a>
                        </div>
                    </div>
                </form>

            </div>


            <div className="login-ceara-logo">
                <img src={cearaLogo} alt="" />
            </div>

        </div>
    );
}

export default Login;