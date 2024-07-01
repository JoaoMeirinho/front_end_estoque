import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import Input from "../../components/Input/Input";
import { Card } from "../../components/Card/Card";

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
  

        
        navigate("/");
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
            <div className="main">
                <Card>
                    <img src="/logo2.png" width="100px"/>
                    <h1 className="text-4xl font-bold my-2">Fazer Login</h1>
                    <p className="text-base text-gray-500">Realize o acesso do seu estoque!</p>
                    <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
                    {
                        errors.map((e, index) => {
                            return (
                            <div className="alert alert-danger" role="alert" key={index}>
                                {e}
                            </div>
                            )
                        })
                    }
                    <Input
                        labelFor="email"
                        labelText="Email"
                        isRequired={true}
                        name="email"
                        type="email"
                        id="email"
                        placeholder="Digite seu Email"
                        handleChange={(e) => handleChange(e)}
                    />
                    <Input
                        labelFor="senha"
                        labelText="Senha"
                        isRequired={true}
                        name="password"
                        type="password"
                        id="senha"
                        placeholder="Digite sua senha"
                        handleChange={(e) => handleChange(e)}
                    />
                        <button type="submit" className="transition transition-border ease-in-out delay-0 bg-rose-500 rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-purple-600 duration-300 text-white w-80 max-[800px]:w-40 px-2 py-2 my-2 ">Login</button>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default Login;