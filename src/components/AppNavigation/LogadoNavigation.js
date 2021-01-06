import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import Resumo from '../Resumo/Resumo'
import Mercadoria from '../Mercadoria/Mercadoria'
import Venda from '../Venda/Venda'
import Relatorio from '../Relatorio/Relatorio'
const Drawer = createDrawerNavigator();

import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
import SyncStorage from 'sync-storage';
import { getToken } from '../../utils/TokenHandle';
const token = getToken();
import Login from '../Login/Login';


export default function LogadoNavigation({navigation}) {

    const logout = async () => {
        SyncStorage.remove("token");
        navigation.navigate("Login")
    }

    if (token._W != null) {
        return (
            
                <Drawer.Navigator drawerContent={props => {
                    return (
                        <View style={{ flex: 1, padding: 20 }}>
                            <DrawerContentScrollView >
                                <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: "space-between", alignItems: "center" }}>
                                    <Text style={{ fontFamily: "Ubuntu-Medium", color: "#9B9B9B", fontSize: 24, width: "50%" }}>Olá!</Text>
                                    <Text styte={{ width: "50%" }}>
                                        <Svg
                                            width={22}
                                            height={22}
                                            viewBox="0 0 22 22"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            {...props}
                                        >
                                            <G
                                                clipPath="url(#prefix__clip0)"
                                                stroke="#9B9B9B"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <Path d="M11 13.75a2.75 2.75 0 100-5.5 2.75 2.75 0 000 5.5z" />
                                                <Path d="M17.783 13.75a1.513 1.513 0 00.303 1.668l.055.055a1.834 1.834 0 11-2.594 2.594l-.055-.055a1.512 1.512 0 00-1.669-.302 1.512 1.512 0 00-.916 1.384v.156a1.834 1.834 0 01-3.667 0v-.082a1.512 1.512 0 00-.99-1.385 1.513 1.513 0 00-1.668.303l-.055.055a1.834 1.834 0 11-2.595-2.594l.055-.055a1.513 1.513 0 00.303-1.669 1.513 1.513 0 00-1.384-.916H2.75a1.833 1.833 0 010-3.667h.082a1.512 1.512 0 001.385-.99 1.512 1.512 0 00-.303-1.668l-.055-.055a1.833 1.833 0 112.594-2.595l.055.055a1.512 1.512 0 001.669.303h.073a1.513 1.513 0 00.917-1.384V2.75a1.833 1.833 0 113.666 0v.082a1.513 1.513 0 00.917 1.385 1.512 1.512 0 001.668-.303l.055-.055a1.834 1.834 0 112.594 2.594l-.055.055a1.512 1.512 0 00-.302 1.669v.073a1.513 1.513 0 001.384.917h.156a1.833 1.833 0 010 3.666h-.082a1.512 1.512 0 00-1.385.917v0z" />
                                            </G>
                                            <Defs>
                                                <ClipPath id="prefix__clip0">
                                                    <Path fill="#fff" d="M0 0h22v22H0z" />
                                                </ClipPath>
                                            </Defs>
                                        </Svg>
                                    </Text>
                                </View>
                                <Text style={{ fontFamily: "Ubuntu-Bold", marginTop: 10, fontSize: 20, color: "#0079FF" }}>Tony Lucas</Text>
                                <View style={{ backgroundColor: "#C4C4C4", width: "100%", height: 1, marginTop: 25, opacity: 0.3 }}>
                                    <Text>{ }</Text>
                                </View>
                                <View style={{ marginTop: 25, flex: 1 }}>
                                    <View style={{ flexWrap: "wrap", flexDirection: "row", alignItems: "center" }}>
                                        <Text>
                                            <Svg
                                                width={30}
                                                height={30}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                {...props}
                                            >
                                                <Path
                                                    d="M10 4a1 1 0 00-1 1v10a1 1 0 102 0V5a1 1 0 00-1-1zm-5 6a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm10-2a1 1 0 00-1 1v6a1 1 0 002 0V9a1 1 0 00-1-1zm2-8H3a3 3 0 00-3 3v14a3 3 0 003 3h14a3 3 0 003-3V3a3 3 0 00-3-3zm1 17a1 1 0 01-1 1H3a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v14z"
                                                    fill="#9B9B9B"
                                                />
                                            </Svg>
                                        </Text>
                                        <Text style={{ fontFamily: "Ubuntu-Medium", color: "#9B9B9B", fontSize: 17, marginLeft: 17 }} onPress={() => props.navigation.navigate("Resumo")}>Resumo</Text>
                                    </View>
                                    <View style={{ flexWrap: "wrap", flexDirection: "row", alignItems: "center", marginTop: 25 }}>
                                        <Text>
                                            <Svg
                                                width={30}
                                                height={30}
                                                viewBox="0 0 17 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                {...props}
                                            >
                                                <Path
                                                    d="M16.887 5.531a.19.19 0 010-.08.169.169 0 010-.07v-.09l-.06-.15a.48.48 0 00-.09-.11l-.09-.08h-.05l-3.94-2.49-3.72-2.3a.85.85 0 00-.29-.15h-.08a.82.82 0 00-.27 0h-.1a1.13 1.13 0 00-.33.13l-7.47 4.65-.09.07-.09.08-.1.07-.05.06-.06.15v.15a.69.69 0 000 .2v8.73a1 1 0 00.47.85l7.5 4.64.15.06h.08a.86.86 0 00.52 0h.08l.15-.06 7.44-4.57a1 1 0 00.47-.85v-8.73s.02-.07.02-.11zm-8.49-3.35l1.78 1.1-5.59 3.46-1.79-1.1 5.6-3.46zm-1 15l-5.5-3.36v-6.39l5.5 3.4v6.35zm1-8.11l-1.91-1.15 5.59-3.47 1.92 1.19-5.6 3.43zm6.5 4.72l-5.5 3.42v-6.38l5.5-3.4v6.36z"
                                                    fill="#9B9B9B"
                                                />
                                            </Svg>
                                        </Text>
                                        <Text style={{ fontFamily: "Ubuntu-Medium", color: "#9B9B9B", fontSize: 17, marginLeft: 17 }} onPress={() => props.navigation.navigate("Mercadoria")}>Mercadorias</Text>
                                    </View>
                                    <View style={{ flexWrap: "wrap", flexDirection: "row", alignItems: "center", marginTop: 25 }}>
                                        <Text>
                                            <Svg
                                                width={30}
                                                height={30}
                                                viewBox="0 0 18 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                {...props}
                                            >
                                                <Path
                                                    d="M7 6h6a1 1 0 100-2H7a1 1 0 000 2zm-2 4h8a1 1 0 100-2H5a1 1 0 000 2zm0 4h8a1 1 0 000-2H5a1 1 0 000 2zM17 0H1a1 1 0 00-1 1v18a1 1 0 001.6.8l2.07-1.55 2.06 1.55a1 1 0 001.2 0L9 18.25l2.07 1.55a1 1 0 001.2 0l2.06-1.55 2.07 1.55a1 1 0 001.45-.277A1 1 0 0018 19V1a1 1 0 00-1-1zm-1 17l-1.07-.8a1 1 0 00-1.2 0l-2.06 1.55L9.6 16.2a1 1 0 00-1.2 0l-2.07 1.55-2.06-1.55a1 1 0 00-1.2 0L2 17V2h14v15z"
                                                    fill="#9B9B9B"
                                                />
                                            </Svg>
                                        </Text>
                                        <Text style={{ fontFamily: "Ubuntu-Medium", color: "#9B9B9B", fontSize: 17, marginLeft: 17 }} onPress={() => props.navigation.navigate("Venda")}>Vendas</Text>
                                    </View>
                                    <View style={{ flexWrap: "wrap", flexDirection: "row", alignItems: "center", marginTop: 25 }}>
                                        <Text>
                                            <Svg
                                                width={30}
                                                height={30}
                                                viewBox="0 0 20 20"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                {...props}
                                            >
                                                <Path
                                                    d="M5.5 14A1.5 1.5 0 007 12.5a.77.77 0 000-.15l2.79-2.79h.46l1.61 1.61v.08a1.5 1.5 0 103 0v-.08L18.5 7.5A1.5 1.5 0 1017 6a.767.767 0 000 .15l-3.61 3.61h-.16L11.5 8a1.5 1.5 0 10-3 0l-3 3a1.5 1.5 0 100 3zM19 18H2V1a1 1 0 00-2 0v18a1 1 0 001 1h18a1 1 0 000-2z"
                                                    fill="#9B9B9B"
                                                />
                                            </Svg>
                                        </Text>
                                        <Text style={{ fontFamily: "Ubuntu-Medium", color: "#9B9B9B", fontSize: 17, marginLeft: 17 }} onPress={() => props.navigation.navigate("Relatorio")}>Relatórios</Text>
                                    </View>

                                </View>
                            </DrawerContentScrollView>
                            <View style={{ flexWrap: "wrap", flexDirection: "row", alignItems: "center" }}>
                                <Text>
                                    <Svg
                                        width={30}
                                        height={30}
                                        viewBox="0 0 16 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        {...props}
                                    >
                                        <Path
                                            d="M0 10a1 1 0 001 1h7.59l-2.3 2.29a1 1 0 00.325 1.639 1 1 0 001.095-.219l4-4a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33l-4-4a1.004 1.004 0 10-1.42 1.42L8.59 9H1a1 1 0 00-1 1zM13 0H3a3 3 0 00-3 3v3a1 1 0 002 0V3a1 1 0 011-1h10a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1v-3a1 1 0 10-2 0v3a3 3 0 003 3h10a3 3 0 003-3V3a3 3 0 00-3-3z"
                                            fill="#9B9B9B"
                                        />
                                    </Svg>
                                </Text>
                                <Text style={{ justifyContent: "flex-end", fontFamily: "Ubuntu-Medium", color: "#9B9B9B", fontSize: 17, marginLeft: 17 }} onPress={() => logout()}>Sair</Text>
                            </View>
                        </View>
                    )
                }}>

                    <Drawer.Screen name="Resumo" component={Resumo} />
                    <Drawer.Screen name="Mercadoria" component={Mercadoria} />
                    <Drawer.Screen name="Venda" component={Venda} />
                    <Drawer.Screen name="Relatorio" component={Relatorio} />
                </Drawer.Navigator>
            
        )
    } 
}
