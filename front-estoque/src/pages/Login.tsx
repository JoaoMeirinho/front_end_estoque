import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [errors, setErrors] = useState<string[]>([])

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const data = {
            email: formData.email,
            password: formData.password
        }
        console.log(data)

        const response = await fetch("http://localhost:3000/user/login", {
            method: "POST",
            mode: "cors",
            credentials: "same-origin",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const responseData = await response.json()

        if(responseData.error){
            setErrors([responseData.message])
            return
        }

        localStorage.setItem("token", responseData.data)
        

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
                                            <label htmlFor="email" className="form-label">Email</label>
                                            <input 
                                            required
                                            name="email"
                                            type="email" 
                                            className="form-control" 
                                            id="email" placeholder="Digite seu email"
                                            onChange={(e) => handleChange(e)}/>
                                            
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="senha" className="form-label">Senha</label>
                                            <input 
                                            required
                                            name="password"
                                            type="password" 
                                            className="form-control" 
                                            id="senha" 
                                            placeholder="Digite sua senha"
                                            onChange={(e) => handleChange(e)} />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-block" >Login</button>
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