import React, { useState } from 'react'
import { SafeAreaView, Text, View, StyleSheet } from 'react-native'
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import { TextInput } from 'react-native-gesture-handler';
import ConfirmaAcao from '../../utils/ConfirmaAcao';
import SyncStorage from 'sync-storage';

export default function FinalizarVenda({ navigation, route }) {

    const [formaPagamentoV, setFormaPagamentoV] = useState("dinheiro");
    const [descontoV, setDescontoV] = useState("0");
    const [subtotal, setSubtotal] = useState(route.params.subtotal)
    const [showConfirma, setShowConfirma] = useState(false)

    const finalizaNota = async () => {

        fetch(`https://baldosplasticosapi.herokuapp.com/notas`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ total: subtotal, cliente: route.params.cliente, desconto: String(descontoV), formaPagamento: String(formaPagamentoV), token: SyncStorage.get("token") })
        }).then(resultNota => {
            return resultNota.json();
        }).then(async(resultNota) => {
            for (let i = 0; i < route.params.carrinho.length; i++) {
                
                const resultMercadoria = await fetch(`https://baldosplasticosapi.herokuapp.com/mercadoria/${route.params.carrinho[i].id}/${SyncStorage.get("token")}`)
                const jsonMercadoria = await resultMercadoria.json()
                const resultVenda = await fetch(`https://baldosplasticosapi.herokuapp.com/vendas`,{
                    method:"POST",
                    headers:{ 'Content-Type': 'application/json'},
                    body: JSON.stringify({id_mercadoria:jsonMercadoria.mercadoria.id,quantidade:route.params.carrinho[i].quantidade,notaId:resultNota.id,desconto:route.params.carrinho[i].desconto,precoDia:jsonMercadoria.mercadoria.precoVenda,token:SyncStorage.get("token")})
                })


            }
            navigation.navigate("Venda")
        })

    }

    const cancelaAcao = () => {
        setShowConfirma(false)
    }



    const calculaDesconto = (text) => {
        setDescontoV(text)
        setSubtotal((route.params.subtotal - ((parseInt(text) / 100) * route.params.subtotal)).toFixed(2))
    }

    return (
        <React.Fragment>
            <SafeAreaView style={{ padding: 10, flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F7F7F7" }}>
                <View style={{ width: "90%", marginTop: 30 }}>
                    <Text style={{ fontFamily: "Ubuntu-Bold", marginBottom: 20, fontSize: 19, alignSelf: "flex-start" }}>Forma de pagamento</Text>
                    <DropDownPicker
                        items={[
                            { label: 'Dinheiro', value: 'dinheiro' },
                            { label: 'Cartão', value: 'cartao' },
                            { label: 'Cheque', value: 'cheque' },
                        ]}
                        defaultValue='dinheiro'
                        containerStyle={{ height: 52 }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        labelStyle={{
                            fontSize: 14,
                            textAlign: 'left',
                            color: '#777777'
                        }}
                        onChangeItem={item => setFormaPagamentoV(item.value)}
                    />

                </View>


                <View style={{ width: "90%", flexDirection: "row", flexWrap: "wrap", alignItems: "center" }}>
                    <Text style={{ fontFamily: "Ubuntu-Bold", marginTop: 30, fontSize: 19, marginBottom: 15, width: "100%" }}>Desconto</Text>

                    <TextInput value={descontoV} onChangeText={text => calculaDesconto(text)} placeholder="" style={{ width: "13%", backgroundColor: '#fff', borderRadius: 5, paddingTop: 8, paddingBottom: 8, paddingLeft: 10, paddingRight: 15, fontFamily: "Ubuntu-Regular" }} />
                    <Text style={{ marginLeft: 7 }}>
                        <Svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M19 5L5 19M17.5 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM6.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                stroke="#000"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </Svg>
                    </Text>
                </View>
                <View style={{ width: "90%", flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
                    {descontoV != '' && descontoV != "0" && (
                        <View width="100%">
                            <Text style={{ width: "100%", textAlign: "right", fontFamily: "Ubuntu-Bold" }}>Desconto : {descontoV} %</Text>
                            <Text style={{ width: "100%", textAlign: "right", marginTop: 12, fontFamily: "Ubuntu-Bold", textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>Total : {route.params.subtotal}</Text>
                            <Text style={{ width: "100%", textAlign: "right", marginTop: 12, fontFamily: "Ubuntu-Bold", fontSize: 17 }}>Subtotal: {(route.params.subtotal - ((parseInt(descontoV) / 100) * route.params.subtotal)).toFixed(2)}</Text>
                        </View>
                    )}
                    {descontoV === '' || descontoV === "0" && (
                        <View width="100%">
                            <Text style={{ width: "100%", textAlign: "right", marginTop: 12, fontFamily: "Ubuntu-Bold", fontSize: 17 }}>Subtotal: {route.params.subtotal}</Text>
                        </View>
                    )}


                </View>

                <View style={{ width: "90%", marginTop: 30, flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-end" }}>
                    <Text onPress={() => navigation.navigate("CarrinhoVenda")} style={{ fontFamily: "Ubuntu-regular", backgroundColor: "#FB212F", paddingBottom: 8, paddingTop: 8, paddingLeft: 19, paddingRight: 19, borderRadius: 5, color: "#fff", alignSelf: "flex-end", marginRight: 15 }}>Voltar</Text>
                    <Text onPress={() => setShowConfirma(true)} style={{ fontFamily: "Ubuntu-regular", backgroundColor: "#2ECC71", paddingBottom: 8, paddingTop: 8, paddingLeft: 19, paddingRight: 19, borderRadius: 5, color: "#fff", alignSelf: "flex-end" }}>Finalizar</Text>
                </View>

            </SafeAreaView>
            {showConfirma && (
                <ConfirmaAcao acaoMethod={finalizaNota} cancelaAcao={cancelaAcao} parametros={{id:null}}/>
            )}
        </React.Fragment >
    )
}

const style = StyleSheet.create({
    descontoAtivo: {

    },
    descontoPadrao: {
        backgroundColor: "#fff", paddingTop: 8, paddingBottom: 8, paddingLeft: 15, paddingRight: 15, borderRadius: 5, marginLeft: 15, fontFamily: "Ubuntu-Regular"
    }
})