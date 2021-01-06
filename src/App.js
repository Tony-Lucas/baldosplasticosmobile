import React, { useState } from 'react';
import { Text, View } from 'react-native';
import SyncStorage from 'sync-storage'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/Login/Login';
import LogadoNavigation from './components/AppNavigation/LogadoNavigation'
import NomeClienteVenda from './components/Venda/NomeClienteVenda';
import CarrinhoVenda from './components/Venda/CarrinhoVenda';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="LogadoNavigation" component={LogadoNavigation} />
        <Stack.Screen name="NomeClienteVenda" component={NomeClienteVenda} />
        <Stack.Screen name="CarrinhoVenda" component={CarrinhoVenda} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}





