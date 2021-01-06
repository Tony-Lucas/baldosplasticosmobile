import React from 'react'

export const getLucro = async (periodo,token) => {
    if (periodo === "Hoje") {
        const Data = new Date();
        const result = await fetch(`http://bdpapiserver-com.umbler.net/vendas/${Data.getFullYear()}-${Data.getMonth() + 1}-${Data.getDate()}/${token}`);
        const json = await result.json();   
        
    }
}