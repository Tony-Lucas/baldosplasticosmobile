import React from 'react';
import SyncStorage from 'sync-storage';

export const formataData = (data) => {
    const ano = data.slice(0, 4);
    const mes = data.slice(5,7)
    const dia = data.slice(8,10)
    const novaData = dia + '/' + mes + '/' + ano
    return novaData;
}

export const procuraMercadoria = async (nome) => {
    if(nome.length > 2){
        const result = await fetch(`http://bdpapiserver-com.umbler.net/mercadoria/busca/${nome}/${SyncStorage.get("token")}`)
        const json = await result.json()
        console.log(json)
    }
}