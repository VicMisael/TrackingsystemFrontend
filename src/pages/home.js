import React, { useState, useEffect } from "react";
import RegisterAtividades from "../components/registerAtividades";

import RegisterUsuario from "../components/registerUsuario"

export default function Home(){
    const [atividades, setAtividades] = useState([{}]);

    // useEffect(()=>{
    //     api.get("/usuarios").then(({data})=>{
    //         console.log(data)
    //     })
    // },[])
    return (
        <div class="min-h-screen bg-red-100 py-6 flex flex-col justify-center sm:py-12 ">
            <div class ="bg-white relative py-3 sm:max-w-xl sm:mx-auto">
            <RegisterUsuario/>
            <RegisterAtividades/>

          </div>
        </div>
    )
    
}