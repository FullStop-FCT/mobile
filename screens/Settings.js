import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function SettingsScreen() {
  return (
    <View style={globalStyles.container}>
      <Image source={require('../assets/img/HxP2.png')} style={{height:100, width:null, resizeMode: 'contain'}} />
      <Card>
      <Text>Para qualquer questão, pedido de ajuda, ou contacto pode nos enviar um email no endereço hxp@fullstop.website</Text>
      <Text>Nós garantimos o melhor apoio e assistência.</Text>
      </Card>
    </View>
  );
}