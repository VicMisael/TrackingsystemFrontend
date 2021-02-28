import React, { useState, useEffect } from "react";
import api from "../services/api"

export default function ExibirUsuario({id}){
    const [usuario, setUsuario] = useState([{}]);
    const [atividades,setAtividades]=useState([])

    useEffect(()=>{
      api.get("/usuarios/"+id).then(({data})=>{
            setUsuario(data)
            setAtividades(data.atividades)
      })
  },[])

  function HandleDelete(atividade){
      console.log(atividade)
        api.get("/atividades/delete/"+id);
    }
return (
    <section>
        <div name="dadosUsuarios"> 
        <label>{usuario.nome} </label>
        <label>{usuario.email}</label>
        <label>{usuario.nascimento}</label>
        </div>
        <div name="atividade">
            <table>
            {
                atividades.map((atividade)=>(
                <>
                 <tr>
                <th>Atividade</th>
                <th>Horas</th>
                <th>Descrição</th>
                <th>Instituicao</th>
                <th></th>
                </tr>
                <tr>
                <td>{atividade.nome}</td>
                <td>{atividade.horas}</td>
                <td>{atividade.descricao}</td>
                <td>{atividade.instituicao.nomeInstituicao}</td>
                <td><button onClick={HandleDelete(atividade.id)} class="rounded	w-auto h-auto bg-red-500 hover:bg-red-700">Excluir</button></td>
                </tr>
                </>
                ))
            }
               </table>
        </div>
        <button>Voltar</button>
    </section>
)
}