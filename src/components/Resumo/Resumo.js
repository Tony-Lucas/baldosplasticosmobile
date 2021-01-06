import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import Menu from '../Header/Menu';
import Svg, { G, Circle, Path } from "react-native-svg"
import { getLucro } from './Services';
import { useFocusEffect } from '@react-navigation/native';
import SyncStorage from 'sync-storage';

export default function Resumo({ navigation }) {

    useFocusEffect(
        React.useCallback(() => {
            getLucro("Hoje", SyncStorage.get("token"))
            return () => {

            };
        }, [])
    );

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
            <Menu titulo="Resumo" toggleDrawer={() => navigation.toggleDrawer()} />
            <View style={{ backgroundColor: "#0079FF", flexDirection: "row", justifyContent: "center", paddingBottom: 50 }} >
                <View style={{
                    backgroundColor: "#fff", width: "87%", position: "absolute", top: 8, borderRadius: 5, flexDirection: "row", shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84,
                    elevation: 5
                }}>
                    <View style={{ flexDirection: "column", padding: 27, width: "50%" }}>
                        <Text style={{ fontFamily: "Ubuntu-Bold", color: "#001E40", fontSize: 15 }}>Lucro</Text>
                        <Text style={{ marginTop: 10, fontFamily: "Ubuntu-Bold", fontSize: 19, color: "#0079FF" }}>R$ 1755,30</Text>
                        
                    </View>

                    <View style={{ flexDirection: "column", padding: 27, width: "50%" }}>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
                            <Text style={style.focusButtonCard}>Hoje</Text>
                            <Text style={{ fontFamily: "Ubuntu-Regular", alignItems: "flex-end" }}>Semana</Text>
                        </View>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 13, alignItems: "center", justifyContent: "center" }}>
                            <Text style={{ fontFamily: "Ubuntu-Regular", marginRight: 12, width: "50%" }}>Mês</Text>
                            <Text style={{ fontFamily: "Ubuntu-Regular" }}>Ano</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ marginTop: "23%", width: "87%", padding: 10, flexDirection: "row", flexWrap: "wrap" }}>
                    <Text style={{ fontFamily: "Ubuntu-Bold", fontSize: 22, color: "#001E40" }}>Resumo Vendas</Text>
                    <Text style={style.focusButton}>Hoje</Text>
                    <View style={{ width: "100%", height: 2, backgroundColor: "#F0F0F0", marginTop: "7%" }}>
                        <Text>{""}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                <View style={{ width: "87%", padding: 10, flexDirection: 'row' }}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", width: "50%" }}>
                        <Text>
                            <Svg
                                width={32}
                                height={49}
                                viewBox="0 0 25 42"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M16.667 18.9H8.333a4.15 4.15 0 01-2.946-1.23 4.217 4.217 0 01-1.22-2.97c0-1.114.439-2.182 1.22-2.97a4.15 4.15 0 012.946-1.23H18.75c.552 0 1.082.221 1.473.615.39.394.61.928.61 1.485s.22 1.091.61 1.485a2.075 2.075 0 002.947 0c.39-.394.61-.928.61-1.485 0-1.67-.659-3.273-1.83-4.455A6.225 6.225 0 0018.75 6.3h-4.167V2.1c0-.557-.22-1.091-.61-1.485a2.075 2.075 0 00-2.946 0c-.39.394-.61.928-.61 1.485v4.2H8.333a8.3 8.3 0 00-5.892 2.46A8.434 8.434 0 000 14.7c0 2.228.878 4.364 2.44 5.94a8.3 8.3 0 005.893 2.46h8.334a4.15 4.15 0 012.946 1.23 4.217 4.217 0 011.22 2.97 4.217 4.217 0 01-1.22 2.97 4.15 4.15 0 01-2.946 1.23H6.25a2.075 2.075 0 01-1.473-.615 2.108 2.108 0 01-.61-1.485c0-.557-.22-1.091-.61-1.485a2.075 2.075 0 00-2.947 0C.22 28.31 0 28.843 0 29.4c0 1.67.658 3.273 1.83 4.455A6.225 6.225 0 006.25 35.7h4.167v4.2c0 .557.22 1.091.61 1.485a2.075 2.075 0 002.946 0c.39-.394.61-.928.61-1.485v-4.2h2.084a8.3 8.3 0 005.892-2.46A8.434 8.434 0 0025 27.3a8.434 8.434 0 00-2.44-5.94 8.3 8.3 0 00-5.893-2.46z"
                                    fill="#001E40"
                                />
                            </Svg>
                        </Text>
                        <View style={{ flexDirection: "column", padding: 4, marginLeft: 10 }}>
                            <Text style={{ fontFamily: "Ubuntu-Bold", color: "#001E40", fontSize: 16 }}>Total</Text>
                            <Text style={{ fontFamily: "Ubuntu-Bold", color: "#0079FF", fontSize: 16, marginTop: 6 }}>R$ 3556,35</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", width: "50%", alignItems: "center", justifyContent: "flex-end" }}>
                        <View style={{ flexDirection: "column", marginRight: 10, padding: 4 }}>
                            <Text style={{ fontFamily: "Ubuntu-Bold", color: "#001E40", fontSize: 16 }}>Vendas</Text>
                            <Text style={{ fontFamily: "Ubuntu-Bold", color: "#0079FF", fontSize: 16, marginTop: 6, textAlign: "right" }}>10</Text>
                        </View>
                        <Text style={{}}>
                            <Svg
                                width={36}
                                height={53}
                                viewBox="0 0 40 44"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"

                            >
                                <Path
                                    d="M15.556 13.2h13.333c.59 0 1.155-.232 1.571-.644a2.188 2.188 0 000-3.112A2.233 2.233 0 0028.89 8.8H15.556c-.59 0-1.155.232-1.572.644a2.19 2.19 0 00-.65 1.556c0 .584.234 1.143.65 1.556.417.412.982.644 1.572.644zM11.11 22H28.89c.59 0 1.155-.232 1.571-.644a2.188 2.188 0 000-3.112 2.233 2.233 0 00-1.571-.644H11.11c-.59 0-1.154.232-1.571.644a2.189 2.189 0 000 3.111c.417.413.982.645 1.571.645zm0 8.8H28.89c.59 0 1.155-.232 1.571-.644a2.188 2.188 0 000-3.112 2.233 2.233 0 00-1.571-.644H11.11c-.59 0-1.154.232-1.571.644a2.189 2.189 0 000 3.111c.417.413.982.645 1.571.645zM37.778 0H2.222C1.632 0 1.068.232.651.644.234 1.057 0 1.617 0 2.2v39.6c0 .409.115.81.332 1.157.217.347.527.628.896.81a2.24 2.24 0 002.328-.207l4.6-3.41 4.577 3.41a2.237 2.237 0 002.667 0l4.6-3.41 4.6 3.41a2.237 2.237 0 002.667 0l4.577-3.41 4.6 3.41a2.236 2.236 0 002.334.198c.366-.183.674-.463.89-.808.216-.346.33-.744.332-1.15V2.2c0-.583-.234-1.143-.65-1.556A2.234 2.234 0 0037.777 0zm-2.222 37.4l-2.378-1.76a2.237 2.237 0 00-2.667 0l-4.578 3.41-4.6-3.41a2.237 2.237 0 00-2.666 0l-4.6 3.41-4.578-3.41a2.237 2.237 0 00-2.667 0L4.444 37.4v-33h31.112v33z"
                                    fill="#001E40"
                                />
                            </Svg>
                        </Text>
                    </View>
                </View>
                <View style={{ width: "87%", padding: 10, flexDirection: 'row', marginTop: 15 }}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", width: "50%" }}>
                        <Text>
                            <Svg
                                width={38}
                                height={45}
                                viewBox="0 0 38 45"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M38 12.513a.431.431 0 010-.18.387.387 0 010-.16v-.203l-.135-.34a1.084 1.084 0 00-.203-.248l-.202-.181h-.113l-8.865-5.633L20.11.365a1.91 1.91 0 00-.653-.34h-.18a1.835 1.835 0 00-.607 0h-.225a2.535 2.535 0 00-.743.294L.894 10.84l-.203.158-.202.181-.225.159-.113.136-.135.339v.339a1.57 1.57 0 000 .453v19.75a2.271 2.271 0 001.058 1.922l16.877 10.497.337.136h.18c.38.121.79.121 1.17 0h.18l.338-.136 16.741-10.338a2.257 2.257 0 001.058-1.923v-19.75s.045-.158.045-.249zM18.896 4.934L22.9 7.423l-12.579 7.828-4.028-2.489 12.602-7.828zm-2.25 33.935L4.268 31.267V16.811l12.376 7.692V38.87zm2.25-18.347l-4.298-2.602 12.579-7.85 4.32 2.692-12.601 7.76zM33.522 31.2l-12.376 7.737V24.503l12.376-7.692V31.2z"
                                    fill="#001E40"
                                />
                            </Svg>
                        </Text>
                        <View style={{ flexDirection: "column", padding: 4, marginLeft: 10 }}>
                            <Text style={{ fontFamily: "Ubuntu-Bold", color: "#001E40", fontSize: 16 }}>Mercadorias</Text>
                            <Text style={{ fontFamily: "Ubuntu-Bold", color: "#0079FF", fontSize: 16, marginTop: 6 }}>142</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ width: "87%", padding: 10, flexDirection: "row", flexWrap: "wrap" }}>
                    <View style={{ width: "100%", height: 2, backgroundColor: "#F0F0F0", marginTop: "2%" }}>
                        <Text>{""}</Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                <View style={{ width: "87%", padding: 10, flexDirection: 'row' }}>
                    <Text style={{ fontFamily: "Ubuntu-Bold", fontSize: 19, color: "#001E40" }}>Métodos de pagamento</Text>
                </View>
                <View style={{ width: "87%", padding: 10, flexDirection: 'row' }}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", width: "50%", alignItems: "center" }}>
                        <Text>
                            <Svg
                                width={38}
                                height={38}
                                viewBox="0 0 38 38"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M28.5 11.083h4.75a1.583 1.583 0 011.583 1.584v19a1.584 1.584 0 01-1.583 1.583H4.75a1.583 1.583 0 01-1.583-1.583V6.333A1.583 1.583 0 014.75 4.75H28.5v6.333zM6.333 14.25v15.833h25.334V14.25H6.333zm0-6.333v3.166h19V7.917h-19zM23.75 20.583h4.75v3.167h-4.75v-3.167z"
                                    fill="#001E40"
                                />
                            </Svg>
                        </Text>
                        <View style={{ flexDirection: "column", padding: 4, marginLeft: 10 }}>
                            <Text style={{ fontFamily: "Ubuntu-Bold", color: "#001E40", fontSize: 16 }}>Espécie</Text>
                            <Text style={{ fontFamily: "Ubuntu-Bold", color: "#0079FF", fontSize: 16, marginTop: 6 }}>R$ 2000,00</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", width: "50%", justifyContent: "flex-end", alignItems: "center" }}>
                        <View style={{ flexDirection: "column", marginRight: 10, padding: 4 }}>
                            <Text style={{ fontFamily: "Ubuntu-Bold", color: "#001E40", fontSize: 16, textAlign: "right" }}>Cartão</Text>
                            <Text style={{ fontFamily: "Ubuntu-Bold", color: "#0079FF", fontSize: 16, marginTop: 6, textAlign: "right" }}>R$ 2556,35</Text>
                        </View>
                        <Text style={{}}>
                            <Svg
                                width={36}
                                height={36}
                                viewBox="0 0 36 36"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <Path
                                    d="M4.5 4.5h27A1.5 1.5 0 0133 6v24a1.5 1.5 0 01-1.5 1.5h-27A1.5 1.5 0 013 30V6a1.5 1.5 0 011.5-1.5zm25.5 12H6v12h24v-12zm0-3v-6H6v6h24zm-9 9h6v3h-6v-3z"
                                    fill="#09121F"
                                />
                            </Svg>
                        </Text>
                    </View>

                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                <View style={{ width: "87%", padding: 10, flexDirection: 'row' }}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap", width: "50%", alignItems: "center" }}>
                        <Text>
                            <Svg
                                height={48}
                                viewBox="0 0 512 512"
                                width={48}
                                fill="#09121F"
                                xmlns="http://www.w3.org/2000/svg"

                            >
                                <Circle cx={502} cy={234} r={10} />
                                <Path d="M508.997 123.999C507.163 122.166 504.663 121 502 121H10c-5.313 0-10 4.485-10 10v250c0 5.449 4.551 10 10 10h492c5.451 0 10-4.551 10-10V279c0-5.521-4.49-10-10-10s-10 4.479-10 10v92H20V141h472v48c0 5.51 4.49 10 10 10s10-4.49 10-10v-58c0-2.668-1.169-5.168-3.003-7.001z" />
                                <Path d="M310 226H50c-5.523 0-10 4.478-10 10s4.477 10 10 10h260c5.523 0 10-4.478 10-10s-4.477-10-10-10zM280 266H50c-5.523 0-10 4.478-10 10s4.477 10 10 10h230c5.523 0 10-4.478 10-10s-4.477-10-10-10zM50 186h60c5.523 0 10-4.478 10-10s-4.477-10-10-10H50c-5.523 0-10 4.478-10 10s4.477 10 10 10zM411.998 226h30c5.523 0 10-4.478 10-10s-4.477-10-10-10h-15v-10c0-5.522-4.477-10-10-10s-10 4.478-10 10v10.425c-14.169 2.388-25 14.737-25 29.575 0 16.542 13.458 30 30 30h10c5.514 0 10 4.486 10 10s-4.486 10-10 10h-30c-5.523 0-10 4.478-10 10s4.477 10 10 10h15v10c0 5.522 4.477 10 10 10s10-4.478 10-10v-10.425c14.169-2.388 25-14.737 25-29.575 0-16.542-13.458-30-30-30h-10c-5.514 0-10-4.486-10-10s4.485-10 10-10z" fill="#09121F" />
                            </Svg>
                        </Text>
                        <View style={{ flexDirection: "column", padding: 4, marginLeft: 10 }}>
                            <Text style={{ fontFamily: "Ubuntu-Bold", color: "#001E40", fontSize: 16 }}>Cheque</Text>
                            <Text style={{ fontFamily: "Ubuntu-Bold", color: "#0079FF", fontSize: 16, marginTop: 6 }}>R$ 0,00</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView >
    )
}

const style = StyleSheet.create({
    focusButtonCard: {
        fontFamily: "Ubuntu-Regular",
        color: "#fff",
        fontSize: 15,
        backgroundColor: "#0079FF",
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 4,
        textAlign: "center"
    },
    focusButton: {
        fontFamily: "Ubuntu-Regular",
        color: "#fff",
        fontSize: 15,
        backgroundColor: "#0079FF",
        paddingBottom: 5,
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 4,
        textAlign: "center",
        marginLeft: 15
    }
})