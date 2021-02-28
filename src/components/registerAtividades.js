import React, { useState, useEffect } from "react";
import api from "../services/api";
export default function RegisterAtividades(){
    const [instituicoes,setInstituicoes]=useState([{}])
    const [atividades,setAtividades]=useState([{}])
    useEffect(()=>{
        api.get("/instituicoes").then(({data})=>{
             const newData = data.map((dado) => ({
                id:dado.id,
                nome:dado.nomeInstituicao
              }));
              setInstituicoes(newData)
        })
      
    },[])
    function HandleSubmit(event){
        event.preventDefault()
        console.log(event.target)
        const {nomeAtividade,horas,descricao,instituicoes}=event.target.elements
        console.log(nomeAtividade.value,horas.value,descricao.value,instituicoes.value)
        const newAtividade={
            nomeAtividade:nomeAtividade.value,
            horas:horas.value,
            descricao:descricao.value,
            usuarios:[],
            instituicoes:{id:instituicoes.value}
        
        }
        setAtividades(newAtividade)
        console.log(atividades)
        api.post("/atividades",atividades).then(res=>console.log)  
      
    }
    return (
        <section>
            <form onSubmit={HandleSubmit} className="bg-gray-300">
                <label>Nome Atividade:</label><input name="nomeAtividade" type="text" placeholder="Nome da Atividade"/>
                <label>Horas:</label><input name="horas" type="number" placeholder="00"/>
                <label>Descrição:</label><input name="descricao" type="text" placeholder=""/>
                <label>Instituição</label>
                <select  name="instituicoes">
                    {
                        instituicoes.map((instituicao,index)=>(
                        <>
                        <option value={instituicao.id}>{instituicao.nome}</option>
                        </>
                        ))

                    }
                </select>
                <button type="submit">Inserir</button>
            </form>
        </section>
    )

}
