import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SyncStorage from 'sync-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login/Login';
import LogadoNavigation from './components/AppNavigation/LogadoNavigation'
import NomeClienteVenda from './components/Venda/NomeClienteVenda';
import CarrinhoVenda from './components/Venda/CarrinhoVenda';
import DetalheVenda from './components/Venda/DetalheVenda.js';
import VendaData from './components/Venda/VendaData';
import InformacoesMercadoria from './components/Venda/components/InfomacoesMercadoria'
import FinalizarVenda from './components/Venda/FinalizarVenda';
import NovaMercadoria from './components/Mercadoria/NovaMercadoria';
import DetalheMercadoria from './components/Mercadoria/DetalheMercadoria';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LogadoNavigation" component={LogadoNavigation} />
        <Stack.Screen name="NomeClienteVenda" component={NomeClienteVenda} />
        <Stack.Screen name="CarrinhoVenda" component={CarrinhoVenda} />
        <Stack.Screen name="DetalheVenda" component={DetalheVenda} />
        <Stack.Screen name="VendaData" component={VendaData} />
        <Stack.Screen name="InformacoesMercadoria" component={InformacoesMercadoria} />
        <Stack.Screen name="FinalizarVenda" component={FinalizarVenda} />
        <Stack.Screen name="NovaMercadoria" component={NovaMercadoria} />
        <Stack.Screen name="DetalheMercadoria" component={DetalheMercadoria} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}





