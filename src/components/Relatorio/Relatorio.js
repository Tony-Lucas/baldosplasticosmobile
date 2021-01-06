import React from 'react'
import { Text } from 'react-native'
import Menu from '../Header/Menu';
export default function Resumo({ navigation }) {
    return (
        <Menu titulo="Relatório" toggleDrawer={() => navigation.toggleDrawer()} />
    )
}