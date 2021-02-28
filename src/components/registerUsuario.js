import React, { useState, useEffect } from "react";
import api from "../services/api";
export default function RegisterUsuario(){
    const [usuarios, setUsuarios] = useState([{}]);
    function HandleSubmit(event){
        event.preventDefault()
        console.log(event.target)
        const {nome,email,nascimento,telefonePcontato}=event.target.elements
        console.log(nome.value,email.value,nascimento.value,telefonePcontato.value)
        const newUser={
            nome: nome.value,
            email: email.value,
            telefonePcontato: telefonePcontato.value,
            nascimento: nascimento.value
        }
        setUsuarios(newUser)
        api.post("/usuarios",usuarios).then(res=>console.log)  
        console.log(usuarios)

    }   
    return (
        <section>
            <div>
            <form onSubmit={HandleSubmit} className="bg-gray-300">
              <label>Nome:</label>  <input name="nome" type="text" placeholder="Seu nome" />
              <label>E-mail:</label> <input name="email" type="email" placeholder="Email" />
              <label>Data de Nascimento:</label>  <input name="nascimento" type="date" placeholder="data" />
              <label>Telefone:</label><input name="telefonePcontato" type="text" placeholder="telefone" />
                <button type="submit" className="bg-blue">Cadastrar</button>
                </form>
            </div>
        </section>
    )
}