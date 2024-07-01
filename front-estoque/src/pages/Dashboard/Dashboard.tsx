import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Navigate, Router, useNavigate } from "react-router-dom";
import { getToken } from "../../helpers/auth";

const Dashboard = () => {
    type Product = {
        id: number;
        name: string;
        description: string;
    }
    const [errors, setErrors] = useState<string[]>([])
    const [products, setProducts] = useState<Product[]>([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProducts = async function() {
            try{
                const fetchProducts = await fetch('http://localhost:3000/product', {
                    mode: "cors",
                    credentials: "same-origin",
                    headers: {
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
        
                if(fetchProducts.status == 401){
                    navigate("/login");
                    return;
                }
                const allProducts = await fetchProducts.json()
                setProducts(allProducts.data);
                return fetchProducts;
            }catch(e){
                setErrors((prevErrors) => [...prevErrors, "Erro ao buscar produtos"]);
                console.error("Error fetching products", e);
            }
        }

        if(!getToken()){
            navigate("/login");
        }
        fetchProducts();
        
    }, [navigate])

    return (
        <>
            
          <h1>Bem vindo(a)</h1>
          {products.map((p: Product) => {
            return (
                <div key={p.id}>
                    <h1>{p.name}</h1>
                    <p>{p.description}</p>
                </div>
            )
          })}

        </>
    )
}

export default Dashboard;