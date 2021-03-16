import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import SyncStorage from 'sync-storage';
export default function NovaMercadoria({ navigation }) {

    const [nome, setNome] = useState()
    const [precoCompra, setPrecoCompra] = useState()
    const [precoVenda, setPrecoVenda] = useState()
    const [showSuccess,setShowSuccess] = useState(false);

    const salvaMercadoria = async () => {
        if (nome && precoCompra && precoVenda) {
            const result = await fetch("https://baldosplasticosapi.herokuapp.com/mercadoria", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nome: nome, precoVenda: precoVenda, precoCompra: precoCompra, token: SyncStorage.get("token") })
            })
            const json = await result.json();
            if(json.success){
                setShowSuccess(true)
                setTimeout(() => {
                    setShowSuccess(false)
                },3000)
            }
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: "85%" }}>
                <Text style={{ fontSize: 25, textAlign: 'center', fontFamily: "Ubuntu-Bold" }}>Nova Mercadoria</Text>
                <View style={{ flexDirection: "row", marginTop: 30, flexWrap: "wrap", justifyContent: "space-between", width: "100%" }}>
                    <TextInput style={{ backgroundColor: "white", width: "100%", borderRadius: 5, paddingLeft: 14 }} placeholder="Nome" onChangeText={text => setNome(text)} />
                    <TextInput style={{ backgroundColor: "white", marginTop: 15, width: "48%", borderRadius: 5, paddingLeft: 14 }} placeholder="Preço Compra" onChangeText={text => setPrecoCompra(text)} />
                    <TextInput style={{ backgroundColor: "white", marginTop: 15, width: "48%", borderRadius: 5, paddingLeft: 14 }} placeholder="Preço Venda" onChangeText={text => setPrecoVenda(text)} />
                </View>
                <View style={{ flexDirection: "row", marginTop: 30, flexWrap: "wrap", justifyContent: "flex-end", width: "100%" }}>
                    <Text style={{ backgroundColor: "#FB212F", color: "#fff", width: "25%", textAlign: "center", paddingTop: 8, paddingBottom: 8, borderRadius: 5, marginRight: 20 }} onPress={() => navigation.navigate("Mercadoria")}>Voltar</Text>
                    <Text style={{ backgroundColor: "#2ECC71", color: "#fff", width: "25%", textAlign: "center", paddingTop: 8, paddingBottom: 8, borderRadius: 5 }} onPress={() => salvaMercadoria()}>Salvar</Text>
                    {showSuccess && (
                        <Text style={{backgroundColor: "#2ECC71",width:"100%",paddingTop:8,paddingBottom:8,borderRadius:5,textAlign:"center",color:"#fff",marginTop:25}}>Mercadoria Salva</Text>
                    )}
                </View>
            </View>
        </View>
    )
}