import React from 'react'

export const getLucro = async (periodo, token) => {
    
    if (periodo === "Hoje") {
        let lucro = 0
        const Data = new Date();
        const result = await fetch(`http://bdpapiserver-com.umbler.net/notas/${Data.getFullYear()}-${Data.getMonth() + 1}-${Data.getDate()}/${Data.getFullYear()}-${Data.getMonth() + 1}-${Data.getDate()}/${token}`);
        const json = await result.json();
        for (let i = 0; i < json.notas.length; i++) {
            lucro += json.notas[i].total;
        }
        
        return lucro
    }
}