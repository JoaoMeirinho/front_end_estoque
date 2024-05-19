import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        verifyPassword: "",
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            name: formData.name,
            email: formData.email,
            password: formData.password
        }
        console.log(data)

        const response = await fetch("http://localhost:3000/user", {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        console.log(await response.json());
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = (e.target as HTMLInputElement).value;
        setFormData({
          ...formData,
          [(e.target as HTMLInputElement).name]: value
        });
      }
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h2 className="text-center mb-4">Cadastro de Usuário</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group mb-3">
                                            <label htmlFor="nome" className="form-label">Nome</label>
                                            <input 
                                            name="name"
                                            type="text" 
                                            className="form-control" 
                                            id="nome" 
                                            placeholder="Digite seu nome" 
                                            onChange={(e) => handleChange(e)}/>
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input 
                                            name="email"
                                            type="email" 
                                            className="form-control" 
                                            id="email" placeholder="Digite seu email"
                                            onChange={(e) => handleChange(e)}/>
                                            
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="senha" className="form-label">Senha</label>
                                            <input 
                                            name="password"
                                            type="password" 
                                            className="form-control" 
                                            id="senha" 
                                            placeholder="Digite sua senha"
                                            onChange={(e) => handleChange(e)} />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="confirmar-senha" className="form-label">Confirmar Senha</label>
                                            <input 
                                            name="verifyPassword" 
                                            type="password" 
                                            className="form-control"
                                            id="confirmar-senha" 
                                            placeholder="Confirme sua senha"
                                            onChange={(e) => handleChange(e)} />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block" >Cadastrar</button>
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