
import React, { useState, useEffect } from "react";
import { cjsPostCssConfigFile } from "tailwindcss/lib/constants";
import ExibirUsuario from '../components/exibirUsuario'
import api from '../services/api'

export default function Usuarios(){
    function HandleDelete(id){
        console.log(id)
    //   api.delete("usuarios/"+id);
      // usuariosList=usuariosList.filter(u=>u.id==id)
    }
    let [usuariosList, setUsuariosList] = useState([{}]);
    useEffect(()=>{
      api.get("/usuarios").then(({data})=>{
          

           const newData = data.map((dado) => ({
              id:dado.id,
              nome: dado.nome,
              email: dado.email,
              telefonePcontato: dado.telefonePcontato,
              nascimento: dado.nascimento
            }));
            setUsuariosList(newData)
      })
    
  },[])

    return (
        <div>
             <section>
            <table class="table-auto">

           
            {
                usuariosList.map((usuario,index)=>(
                    <>
                    <tr  className="bg-blue-200">
                    <th>Nome de Usuario</th>
                    <th>Email</th>
                    <th>Nascimento</th>
                    <th>
                    </th>
                    <th></th>
                    </tr>
                    <tr className="hover:bg-blue-300 duration-150">
                    <td>{usuario.nome}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.nascimento}</td>
                    <td><button className="rounded	w-auto h-auto bg-blue-500 hover:bg-green-700">Adicionar Atividades</button></td>
                    <td><button onClick={HandleDelete(usuario)} className="rounded	w-auto h-auto bg-red-500 hover:bg-red-700">Excluir</button></td>
                </tr>
                </>
                ))
            }
             </table>
        </section>
       
        </div>
    )

}