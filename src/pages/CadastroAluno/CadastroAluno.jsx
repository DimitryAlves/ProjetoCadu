import './styles.css'
import logoAluno from '../../assets/img/logoStudent.png'
import logoProfessor from '../../assets/img/logoTeacher.png'
import logoResponsavel from '../../assets/img/logoFamily.png'
import cearaLogo from '../../assets/img/cearaLogo.png'
import TextField from '../../components/TextField/TextField'
import Button from '../../components/Button/Button'
import ReturnButton from '../../components/ReturnButton/ReturnButtn'

function CadastroAluno() {
    return (
        <div className="student-registration-page">

            <div className="student-card">

                <div className="student-return-button">
                    <ReturnButton />
                </div>

                <div className="student-h1">
                    <h1>Cadastro</h1>
                </div>

                <div className="student-card-container">

                    <div className="student-img-container">

                        <div className="student-img">
                            <img src={logoAluno} alt="" />
                            <span>Aluno</span>
                        </div>

                        <div className="student-img">
                            <img src={logoProfessor} alt="" />
                            <span>Professor</span>
                        </div>

                        <div className="student-img">
                            <img src={logoResponsavel} alt="" />
                            <span>Responsável</span>
                        </div>

                    </div>

                    <div className="student-form">
                        <form>
                            <div className="student-form-container">
                                <div className="student-input">
                                    <label>Nome</label>
                                    <TextField
                                        type='text'
                                        placeholder='Nome completo'
                                        required={true}
                                    />
                                </div>

                                <div className="cpf-year-container">
                                    <div className="student-input">
                                        <label>CPF:</label>
                                        <TextField
                                            type='text'
                                            placeholder='CPF'
                                            required={true}
                                        />
                                    </div>



                                    <div className="student-input">
                                        <label>Ano de entrada</label>
                                        <TextField
                                            type='text'
                                            placeholder='Ano de entrada'
                                            required={true}
                                        />
                                    </div>
                                </div>

                                <div className="student-input">
                                    <label>Turma</label>
                                    <TextField
                                        type='text'
                                        placeholder='Turma'
                                        required='true'
                                    />
                                </div>

                                <div className="student-input">
                                    <label>Email</label>
                                    <TextField
                                        type='email'
                                        placeholder='Email'
                                        required={true}
                                    />
                                </div>

                                <div className="student-input">
                                    <label>Senha</label>
                                    <TextField
                                        type='password'
                                        placeholder='Senha'
                                        required={true}
                                    />
                                </div>
                                <div className="student-button">
                                    <Button
                                        text='Cadastrar'
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="student-ceara-logo">
                <img src={cearaLogo} alt="" />
            </div>

        </div>
    )
}

export default CadastroAluno