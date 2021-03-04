import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Svg, { Path } from "react-native-svg"
import SyncStorage from 'sync-storage';

export default function Login({ navigation }) {

    const signIn = async (usuario, senha) => {
        const formData = new FormData();
        formData.append('usuario', usuario)
        formData.append('senha', senha)
        const result = await fetch("https://baldosplasticosapi.herokuapp.com/login", {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ usuario: usuario, senha: senha })
        });
        const json = await result.json();
        if (json.success) {
            SyncStorage.set("token", json.token)
            navigation.navigate("LogadoNavigation")
        }
    }

    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
            <View style={{ width: "65%", padding: 15 }}>
                <Text style={{ fontFamily: "Ubuntu-Bold", color: "#001E40", fontSize: 23, marginBottom: 15 }}>Bem Vindo</Text>
                <Text style={{ fontFamily: "Ubuntu-Light", color: "#001E40", fontSize: 23 }}>Login</Text>
                <TextInput placeholder="Usuario" style={{ borderBottomWidth: 1, marginTop: 25, borderBottomColor: "#C4C4C4", fontFamily: "Ubuntu-Light" }} onChangeText={text => setUsuario(text)} />
                <TextInput secureTextEntry={true} placeholder="Senha" style={{ borderBottomWidth: 1, marginTop: 12, borderBottomColor: "#C4C4C4", fontFamily: "Ubuntu-Light" }} onChangeText={text => setSenha(text)} />
                <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 35, backgroundColor: "#0079FF", alignItems: "center", width: 100, justifyContent: "center", alignSelf: "flex-end" }} >
                    <Text style={{ fontFamily: "Ubuntu-Light", paddingTop: 10, paddingBottom: 10, color: "#fff" }} onPress={() => signIn(usuario, senha)}>Entrar</Text>
                    <Text style={{ marginLeft: 10 }}>
                        <Svg
                            width={12}
                            height={13}
                            viewBox="0 0 12 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <Path
                                d="M11.92 5.624a1 1 0 00-.21-.33l-5-5a1.004 1.004 0 00-1.42 1.42l3.3 3.29H1a1 1 0 000 2h7.59l-3.3 3.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l5-5a1 1 0 00.21-.33 1 1 0 000-.76z"
                                fill="#fff"
                            />
                        </Svg>
                    </Text>
                </View>
            </View>
        </View>
    )
}