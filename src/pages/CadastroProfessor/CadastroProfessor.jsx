import logoAluno from '../../assets/img/logoStudent.png'
import logoProfessor from '../../assets/img/logoTeacher.png'
import logoResponsavel from '../../assets/img/logoFamily.png'
import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import ReturnButton from '../../components/ReturnButton/ReturnButtn';

import CearaLogo from '../../assets/img/cearaLogo.png'

import './styles.css';

function CadastroProfessor() {
    return (
        <div className="teacher-registration-page">

            <div className="teacher-card">
                
                <div className="teacher-return-button">
                    <ReturnButton />
                </div>

                <div className="teacher-h1">
                    <h1>Cadastro</h1>
                </div>

                <div className="teacher-card-container">

                    <div className="teacher-img-container">

                        <div className="teacher-img">
                            <img src={logoAluno} alt="" />
                            <span>Aluno</span>
                        </div>

                        <div className="teacher-img">
                            <img src={logoProfessor} alt="" />
                            <span>Professor</span>
                        </div>

                        <div className="teacher-img">
                            <img src={logoResponsavel} alt="" />
                            <span>Responsável</span>
                        </div>
                    </div>

                    <div className="teacher-form">
                        <form>

                            <div className="teacher-form-container">

                                <div className="teacher-input">
                                    <label>Nome:</label>
                                    <TextField
                                        type='text'
                                        placeholder='Nome Completo' />
                                </div>

                                <div className="teacher-input">
                                    <label>CPF:</label>
                                    <TextField
                                        type='text'
                                        placeholder='CPF' />
                                </div>

                                <div className="teacher-input">
                                    <label>Telefone:</label>
                                    <TextField
                                        type='text'
                                        placeholder='Telefone' />
                                </div>

                                <div className="teacher-input">
                                    <label>Email:</label>
                                    <TextField
                                        type='text'
                                        placeholder='Email' />
                                </div>

                                <div className="teacher-input">
                                    <label>Senha:</label>
                                    <TextField
                                        type='text'
                                        placeholder='Senha' />
                                </div>

                                <div className="teacher-button">
                                    <Button
                                        text='Cadastrar' />
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </div>

            <div className="teacher-ceara-logo">
                <img src={CearaLogo} alt="" />

            </div>
        </div>
    );
}

export default CadastroProfessor;