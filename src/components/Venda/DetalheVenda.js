import React, { useState } from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import SyncStorage from 'sync-storage';
import { ScrollView } from 'react-native-gesture-handler';
import RNPrint from 'react-native-print';

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

    const geraPDF = async (id) => {
        const resultNotas = await fetch(`https://baldosplasticosapi.herokuapp.com/notas/${id}/${SyncStorage.get("token")}`);
        const jsonNotas = await resultNotas.json();
        const resultVendas = await fetch(`https://baldosplasticosapi.herokuapp.com/vendas/${jsonNotas.notas.id}/${SyncStorage.get("token")}`);
        const jsonVendas = await resultVendas.json();
        let mercadorias = [];
        for(let i = 0 ; i < jsonVendas.vendas.length ; i++){
            const result = await fetch (`https://baldosplasticosapi.herokuapp.com/mercadoria/${jsonVendas.vendas[i].id_mercadoria}/${SyncStorage.get("token")}`)
            const json = await result.json();
            mercadorias.push(json.mercadoria)
        }
        let dia = jsonNotas.notas.data.slice(8, 10);
        let mes = jsonNotas.notas.data.slice(5, 7);
        let ano = jsonNotas.notas.data.slice(0, 4);
        let dataFormated = dia + '/' + mes + '/' + ano
        let corpo = `<h3 style="text-align: center;margin-top:25px;margin-bottom:15px">Bal Dos Plasticos</h3>
        <h5 style="text-align: center">${jsonNotas.notas.cliente}</h5>
        <h5 style="text-align: center">Data: ${dataFormated}</h5>
        <table style="border:1px solid;border-collapse: collapse;font-size:10px;margin: 0 auto;">
        <thead>
            <tr>
                <td style="border:1px solid;padding:7px">Nome da mercadoria</td>
                <td style="border:1px solid;padding:7px">Preço</td>
                <td style="border:1px solid;padding:7px">Quantidade</td>
                <td style="border:1px solid;padding:7px">Desconto</td>
                <td style="border:1px solid;padding:7px">Total</td>
            </tr>   
        <thead>
        <tbody>`
        for (let i = 0; i < jsonVendas.vendas.length; i++) {
            if(parseFloat(jsonVendas.vendas[i].desconto) > 0){
                const desconto = (parseFloat(mercadorias[i].precoVenda).toFixed(2) - parseFloat(jsonVendas.vendas[i].desconto).toFixed(2)).toFixed(2)
                const linha = `
                    <tr>
                        <td style="padding: 10px;border: 1px solid black">${mercadorias[i].nome}</td>
                        <td style="padding: 10px;border: 1px solid black">${mercadorias[i].precoVenda.toString().replace('.',',')}</td>
                        <td style="padding: 10px;border: 1px solid black">${jsonVendas.vendas[i].quantidade}</td>
                        <td style="padding: 10px;border: 1px solid black">${desconto.toString().replace(".",',')}</td>
                        <td style="padding: 10px;border: 1px solid black">${((parseFloat(mercadorias[i].precoVenda).toFixed(2) - desconto) * jsonVendas.vendas[i].quantidade).toFixed(2).toString().replace(".",',')}</td>
                    </tr>
                
                `
                corpo += linha
                console.log(corpo)  
            }else{
                const linha = `
                    <tr>
                        <td style="padding: 10px;border: 1px solid black">${mercadorias[i].nome}</td>
                        <td style="padding: 10px;border: 1px solid black">${jsonVendas.vendas[i].precoDia.toString().replace('.',',')}</td>
                        <td style="padding: 10px;border: 1px solid black">${jsonVendas.vendas[i].quantidade}</td>
                        <td style="padding: 10px;border: 1px solid black">${jsonVendas.vendas[i].desconto.toFixed(2).replace(".",",")}</td>
                        <td style="padding: 10px;border: 1px solid black">${(parseFloat(mercadorias[i].precoVenda).toFixed(2) * jsonVendas.vendas[i].quantidade).toFixed(2).toString().replace(".",",")}</td>
                    </tr>
                
                `
                corpo += linha
            }
        }
        corpo += `
            </tbody>
            </table>
            <h5 style="margin-top:30px;text-align:center">Subtotal: ${parseFloat(jsonNotas.notas.total).toFixed(2).toString().replace(".", ",")}</h5>
            `
        RNPrint.print({
            html:corpo
        })
    }

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
                <Text style={{paddingTop:7,paddingBottom:7,paddingLeft:17,paddingRight:17, color:"#fff",backgroundColor:"#0079FF",borderRadius:5,marginRight:18}} onPress={() => geraPDF(route.params.id)}>PDF</Text>
                <Text style={{paddingTop:7,paddingBottom:7,paddingLeft:17,paddingRight:17, color:"#fff",backgroundColor:"#FB212F",borderRadius:5}} onPress={() => navigation.navigate("Venda")}>Voltar</Text>
            </View>
        </SafeAreaView >
    )
}