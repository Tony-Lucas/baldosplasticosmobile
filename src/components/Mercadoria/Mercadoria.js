import React, { useState } from 'react'
import { Text, SafeAreaView, View } from 'react-native'
import Menu from '../Header/Menu';
import { useFocusEffect } from '@react-navigation/native';
import SyncStorage from 'sync-storage';
import Svg, { G, Circle, Path } from "react-native-svg"
import { ScrollView, TextInput } from 'react-native-gesture-handler';
export default function Resumo({ navigation }) {

    const [mercadorias, setMercadorias] = useState([])
    const [limite, setLimite] = useState(15);
    const [pulos, setPulos] = useState(0);
    const [texto, setTexto] = useState();
    

    useFocusEffect(
        React.useCallback(() => {
            fetch(`https://baldosplasticosapi.herokuapp.com/mercadoria/limite/${15}/${0}/${SyncStorage.get("token")}`).then((result) => {
                return result.json()
            }).then((result) => {
                setMercadorias(result.mercadoria[0])
            })

            return () => {
                setMercadorias([])
                setLimite(0)
                setPulos(0)
            };
        }, [])
    );

    const carregaMaisDez = async () => {

        const result = await fetch(`https://baldosplasticosapi.herokuapp.com/mercadoria/limite/${15}/${(pulos + 15)}/${SyncStorage.get("token")}`);
        const json = await result.json();
        setMercadorias(mercadorias.concat(json.mercadoria[0]))
        setPulos(pulos + 15)

    }

    const procuraMercadoria = async (texto) => {
        if (texto.length > 2) {
            const result = await fetch(`https://baldosplasticosapi.herokuapp.com/mercadoria/busca/${texto}/${SyncStorage.get("token")}`);
            const json = await result.json();
            setMercadorias(json.mercadorias)
        } else {
            const result = await fetch(`https://baldosplasticosapi.herokuapp.com/mercadoria/limite/${15}/${0}/${SyncStorage.get("token")}`);
            const json = await result.json();
            setMercadorias(json.mercadoria[0])
        }
    }

    return (
        <ScrollView>
            <SafeAreaView >
                <Menu titulo="Mercadorias" toggleDrawer={() => navigation.toggleDrawer()} />
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 15 }}>
                    <View style={{ width: "85%", flexDirection: "row", flexWrap: "wrap", marginTop: 7, alignItems: "center" }}>
                        <View style={{ flexDirection: "row", width: "50%", alignItems: "center" }}>
                            <Text style={{ paddingLeft: 7, fontFamily: "Ubuntu-Regular", color: "#9B9B9B" }}>Exibindo {mercadorias.length} Resultados</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: "50%", marginTop: 15, justifyContent: "flex-end" }}>
                            <Text style={{ paddingTop: 7, paddingBottom: 7, paddingLeft: 17, paddingRight: 17, color: "#fff", backgroundColor: "#FFA300", borderRadius: 5 }}>Novo</Text>
                        </View>

                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 10 }}>
                    <View style={{ width: "85%", flexDirection: "row", flexWrap: "wrap", marginTop: 7, alignItems: "center" }}>
                        <View style={{ flexDirection: "row", width: "100%", alignItems: "center" }}>
                            <TextInput placeholder="Buscar mercadoria" style={{ backgroundColor: "#fff", width: "100%", paddingLeft: 15, borderRadius: 5 }} onChangeText={texto => procuraMercadoria(texto)} />
                        </View>
                    </View>
                </View>
                <View style={{ width: "100%", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: 7 }}>
                    {mercadorias != undefined && (
                        mercadorias.map(item => {
                            return (
                                <View style={{ borderBottomWidth: 1, borderBottomColor: "#D8D8D8", borderStyle: "solid", paddingTop: 20, paddingBottom: 20, paddingLeft: 7, flexDirection: "row", flexWrap: "wrap", width: "85%" }}>
                                    <View style={{ flexDirection: "row", flexWrap: "wrap", width: "100%" }}>
                                        <Text style={{ fontFamily: "Ubuntu-Bold", color: "#9B9B9B", width: "50%", color: "#333333" }}>{item.nome}</Text>

                                    </View>
                                    <View style={{ flexDirection: "row", flexWrap: "wrap", width: "100%"}}>
                                        <Text style={{ fontFamily: "Ubuntu-Regular", color: "#9B9B9B", width: "50%", marginTop: 10 }}>Preço Compra: {item.precoCompra}</Text>
                                        <Text style={{marginTop: 7 ,width: "50%"}}>
                                            
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: "row", flexWrap: "wrap", width: "100%" }}>
                                        <Text style={{ fontFamily: "Ubuntu-Regular", color: "#9B9B9B", width: "50%", marginTop: 10 }}>Preço Venda: {item.precoVenda}</Text>
                                    </View>

                                </View>
                            )
                        })
                    )}
                </View>
                <View style={{ flexDirection: "row", marginBottom: 20, justifyContent: "center", marginTop: 20 }}>
                    <Text onPress={() => carregaMaisDez()} style={{ width: "85%", color: "#fff", backgroundColor: "#0079FF", padding: 8, borderRadius: 5, textAlign: "center", marginBottom: 10 }}>Carregar mais 15</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}