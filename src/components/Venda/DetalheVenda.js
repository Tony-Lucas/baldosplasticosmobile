import React, { useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import SyncStorage from 'sync-storage';
import { ScrollView } from 'react-native-gesture-handler';

export default function DetalheVenda({ navigation, route }) {

    const [cliente, setCliente] = useState(route.params.cliente);
    const [total, setTotal] = useState(route.params.total.toString().replace('.', ','));
    const [mercadoriaVendida, setMercadoriaVendida] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            fetch(`https://baldosplasticosapi.herokuapp.com/vendas/${route.params.id}/${SyncStorage.get("token")}`).then((result) => {
                return result.json()
            }).then((resultVenda) => {
                for (let i = 0; i < resultVenda.vendas.length; i++) {
                    fetch(`https://baldosplasticosapi.herokuapp.com/mercadoria/${resultVenda.vendas[i].id_mercadoria}/${SyncStorage.get("token")}`).then((resultMercadoria) => {
                        return resultMercadoria.json()
                    }).then((resultMercadoria) => {
                        const venda = {
                            nome: resultMercadoria.mercadoria.nome,
                            quantidade: resultVenda.vendas[i].quantidade,
                            preco: resultMercadoria.mercadoria.precoVenda,
                            total: (parseInt(resultVenda.vendas[i].quantidade) * parseFloat(resultMercadoria.mercadoria.precoVenda)).toFixed(2).toString().replace(".", ',')
                        }
                        setMercadoriaVendida(mercadoriaVendida => [...mercadoriaVendida, venda])
                    })
                }
            })
            return () => {
                setMercadoriaVendida([])
            };
        }, [])
    );

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", width: "80%" }}>
                <Text style={{ fontFamily: "Ubuntu-Bold", fontSize: 25, color: "#001E40", marginBottom: 20 }}>Detalhe Nota</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", width: "80%" }}>
                <Text style={{ fontFamily: "Ubuntu-Bold", fontSize: 17, color: "#001E40" }}>Cliente: {cliente}</Text>
                <Text style={{ fontFamily: "Ubuntu-Bold", fontSize: 17, color: "#001E40" }}>R$ {total}</Text>
            </View>
            <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", width: "80%", marginTop: 25 }}>
                <Text style={{ fontFamily: "Ubuntu-Bold", fontSize: 17, color: "#777777" }}>Mercadorias</Text>
            </View>
            <View style={{ width: "80%", height: "60%", backgroundColor: "#fff", borderWidth: 1, borderColor: 'rgba(119,119,119,0.2)', borderRadius: 8, marginTop: 25, padding: 5 }}>
                <ScrollView>
                    {mercadoriaVendida != undefined && (

                        mercadoriaVendida.map(item => {
                            return (
                                <View style={{ flexDirection: "row", paddingBottom: 10, marginTop: 10, justifyContent: "center" }}>
                                    <View style={{ borderBottomColor: "#C4C4C4", borderBottomWidth: 1, width: "85%", paddingBottom: 12, flexDirection: "row", flexWrap: "wrap" }}>
                                        <Text style={{ fontFamily: "Ubuntu-Bold", padding: 5, width: "100%", color: "black" }}>{item.nome}</Text>
                                        <Text style={{ fontFamily: "Ubuntu-Regular", padding: 5, width: "100%" }}>Preço: {item.preco}</Text>
                                        <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap" }}>
                                            <Text style={{ fontFamily: "Ubuntu-Regular", padding: 5, width: "55%" }}>Quantidade: {item.quantidade}</Text>
                                            <Text style={{ fontFamily: "Ubuntu-Regular", padding: 5, width: "45%" }}>Total: {item.total}</Text>
                                        </View>

                                    </View>
                                </View>
                            )
                        })

                    )}
                </ScrollView>
                
            </View>
            <View style={{ width: "80%", marginTop: 20 ,justifyContent: "flex-end",flexDirection: "row"}}>
                <Text style={{paddingTop:7,paddingBottom:7,paddingLeft:17,paddingRight:17, color:"#fff",backgroundColor:"#FB212F",borderRadius:5}} onPress={() => navigation.navigate("Venda")}>Voltar</Text>
            </View>
        </SafeAreaView >
    )
}