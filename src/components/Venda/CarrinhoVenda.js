import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Svg, { Path } from "react-native-svg"
import SyncStorage from 'sync-storage';
export default function CarrinhoVenda({ navigation, route }) {

    const [carrinho, setCarrinho] = useState([]);
    const [mercadoriasBusca, setMercadoriasBusca] = useState();
    const [showMercadorias, setShowMercadorias] = useState(false)
    const [textoBusca, setTextoBusca] = useState();

    const procuraMercadoria = async (nome) => {
        setTextoBusca(nome)
        if (nome.length > 2) {
            const result = await fetch(`http://bdpapiserver-com.umbler.net/mercadoria/busca/${nome}/${SyncStorage.get("token")}`)
            const json = await result.json()
            setMercadoriasBusca(json.mercadorias)
            setShowMercadorias(true)
        } else if (nome.length < 2) {
            setMercadoriasBusca([]);
            setShowMercadorias(false)
        }
    }

    const addCarrinho = async (id) => {
        const result = await fetch(`http://bdpapiserver-com.umbler.net/mercadoria/${id}/${SyncStorage.get("token")}`)
        const json = await result.json()
        setCarrinho(carrinho.concat(json.mercadoria));
        setTextoBusca('')
        setShowMercadorias(false)
    }

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", height: "100%", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }} onPress={() => console.log("Apertou")}>
            <View style={{ borderRadius: 5, width: "65%", flexDirection: "row", flexWrap: "wrap", marginTop: 50 }}>
                <View style={{ backgroundColor: 'rgba(196,196,196,0.13)', flexDirection: "row", alignItems: "center" }}>
                    <Text style={{ paddingRight: 10, paddingLeft: 15, width: "20%" }}>
                        <Svg
                            width={21}
                            height={21}
                            viewBox="0 0 21 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M15.777 14.54l3.748 3.747-1.238 1.238-3.747-3.748A7.84 7.84 0 019.625 17.5 7.878 7.878 0 011.75 9.625 7.878 7.878 0 019.625 1.75 7.878 7.878 0 0117.5 9.625a7.84 7.84 0 01-1.723 4.915zm-1.755-.65a6.105 6.105 0 001.728-4.265A6.123 6.123 0 009.625 3.5 6.123 6.123 0 003.5 9.625a6.123 6.123 0 006.125 6.125 6.105 6.105 0 004.266-1.728l.13-.131z"
                                fill="#9B9B9B"
                            />
                        </Svg>
                    </Text>
                </View>
                <TextInput placeholder="Procurar Mercadoria" style={{ backgroundColor: 'rgba(196,196,196,0.13)', paddingRight: 10, width: "80%" }} onChangeText={texto => procuraMercadoria(texto)} value={textoBusca} />
                <View style={{ width: "100%" }}>
                    {showMercadorias && (
                        <View style={{ backgroundColor: "#fff", position: "absolute", elevation: 2, width: "100%" }}>
                            <ScrollView style={{ height: 250 }}>
                                {mercadoriasBusca != undefined && (
                                    mercadoriasBusca.map(item => {
                                        return (
                                            <Text onPress={() => addCarrinho(item.id)} style={{ fontFamily: "Ubuntu-Regular", paddingLeft: 12, paddingRight: 12, paddingBottom: 12, paddingTop: 18 }}>{item.nome}</Text>
                                        )
                                    })
                                )}
                            </ScrollView>
                        </View>
                    )}
                </View>
            </View>

            <View style={{ borderRadius: 5, width: "65%", flexDirection: "row", flexWrap: "wrap", marginTop: 35, justifyContent: "center" }}>
                <Text style={{ fontSize: 24, fontFamily: "Ubuntu-Bold" }}>Carrinho</Text>
            </View>
            {carrinho === undefined && (
                <View style={{ width: "100%", flexDirection: "row", marginTop: 24 }}>
                    <Text style={{ fontSize: 18, fontFamily: "Ubuntu-Bold", color: "#9B9B9B" }}>carrinho vazio</Text>
                </View>
            )}
            {carrinho != undefined && (
                <View style={{ width: "75%", marginTop: 22 }}>
                    {carrinho.map(item => {
                        return (
                            <View style={{ flexDirection: "row", marginTop: 20, borderBottomWidth: 1, paddingBottom: 15, borderBottomColor: "#C4C4C4" }}>
                                <View style={{ width: "80%" }}>
                                    <Text style={{ fontFamily: "Ubuntu-Bold", color: "#333333" }}>{item.nome}</Text>
                                    <Text style={{ fontFamily: "Ubuntu-Regular", color: "#333333", marginTop: 8 }}>R$ {item.precoVenda}</Text>
                                </View>
                                <View style={{ width: "40%" }}>
                                    <Text>
                                        <Svg
                                            width={33}
                                            height={33}
                                            viewBox="0 0 33 33"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <Path
                                                d="M11.344 4.125h10.312a1.031 1.031 0 100-2.063H11.344a1.031 1.031 0 100 2.063zM27.844 6.188H5.156a1.031 1.031 0 100 2.062h1.032v18.563a2.065 2.065 0 002.062 2.062h16.5a2.064 2.064 0 002.063-2.063V8.25h1.03a1.031 1.031 0 000-2.063zM14.437 21.655a1.031 1.031 0 11-2.062 0v-8.25a1.031 1.031 0 112.063 0v8.25zm6.188 0a1.031 1.031 0 11-2.063 0v-8.25a1.031 1.031 0 112.063 0v8.25z"
                                                fill="#FB212F"
                                            />
                                        </Svg>
                                    </Text>
                                </View>
                            </View>
                        )
                    })}
                </View>

            )}
        </SafeAreaView>
    )
}