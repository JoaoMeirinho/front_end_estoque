import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {


    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h2 className="text-center mb-4">Cadastro de Usuário</h2>
                        <form>
                            <div className="form-group mb-3">
                                <label htmlFor="nome" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="nome" placeholder="Digite seu nome" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Digite seu email" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="senha" className="form-label">Senha</label>
                                <input type="password" className="form-control" id="senha" placeholder="Digite sua senha" />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="confirmar-senha" className="form-label">Confirmar Senha</label>
                                <input type="password" className="form-control" id="confirmar-senha" placeholder="Confirme sua senha" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Login;