import React, { useState } from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import Menu from '../Header/Menu';
import { getLucro } from './Services';
import SyncStorage from 'sync-storage';
import ResumoHoje from "./components/ResumoHoje"
import DropDownPicker from 'react-native-dropdown-picker';

export default function Resumo({ navigation }) {

    const [lucro, setLucro] = useState(0)
    const [total, setTotal] = useState()
    const [periodo, setPeriodo] = useState()
    const [showDropdon, setShowDropdown] = useState(false)
    const [dropdownValue, setDropdownValue] = useState("hoje")

    return (
        <SafeAreaView style={{ backgroundColor: "#fff", height: "100%" }}>
            <Menu titulo="Resumo" toggleDrawer={() => navigation.toggleDrawer()} />

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ marginTop: "5%", width: "87%", padding: 10, flexDirection: "row", flexWrap: "wrap" }}>

                    <View style={{ width: "100%", flexDirection: "row", flexWrap: "nowrap", alignItems: "center" }}>
                        <View style={{ width: "65%" }}>
                            <Text style={{ fontFamily: "Ubuntu-Bold", fontSize: 22, color: "#001E40" }}>Resumo Vendas</Text>
                        </View>
                        <View style={{ width: "35%" }}>

                            <DropDownPicker
                                items={[
                                    { label: 'Hoje', value: 'hoje' },
                                    { label: 'Semana', value: 'semana' },
                                    { label: 'Mês', value: 'mes' },]}
                                defaultValue='hoje'
                                containerStyle={{ height: 52 }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                labelStyle={{
                                    fontSize: 14,
                                    textAlign: 'left',
                                    color: '#777777'
                                }}
                                onChangeItem={item => setDropdownValue(item.value)}
                            />
                        </View>
                    </View>
                    <View style={{ width: "100%", height: 2, backgroundColor: "#F0F0F0", marginTop: "7%" }}>
                        <Text>{""}</Text>
                    </View>
                </View>
            </View>
            {dropdownValue === "hoje" && (
                <ResumoHoje />
            )}
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