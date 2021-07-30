import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
export default function About() {
  return (
    <View style={globalStyles.container}>
      <Image source={require('../assets/img/HxP2.png')} style={{height:100, width:null, resizeMode: 'contain'}} />
      <Card>
      <Text>A Fullstop surgiu a partir de um grupo de alunos do MIEI da FCT-UNL. A Helping XPerience é a nossa primeira aplicação. Esperemos que gostem.</Text>
      </Card>
    </View>
  );
}