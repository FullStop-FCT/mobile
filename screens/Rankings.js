import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Modal,
  TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';
import { MaterialIcons } from '@expo/vector-icons';
import Card from '../shared/card';
import ActionForm from './ActionForm';
import ActionDetails from './ActionDetails';
//import { Token, listAtivitiesProps, AtivitiesProps } from "../types";
import { api } from "../services/api";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Rankings({ navigation }) {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    fetcher();
  }, [])

  async function fetcher() {
    const token = await AsyncStorage.getItem('token');
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    await api.get('users/user/hours', config).then(response => setRankings(response.data));
  }

  return (
    <View style={globalStyles.container}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#993955',
          }}>
          Top 25 utilizadores
        </Text>

      <FlatList data={rankings} renderItem={({ item }) => (
        //<TouchableOpacity onPress={() => navigation.navigate('User', item.username)}>
          <Card>
            <Text style={styles.cardTitle}>{item.name} ({item.username})</Text>
            <Text style={styles.cardDetails}>Contribuição social: {Math.floor(item.hoursDone/60)} horas e {item.hoursDone%60} minutos</Text>
          </Card>
        //</TouchableOpacity>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    color: '#993955',
    fontSize: 18,
  },
  cardDetails: {
    fontSize: 14,
    color: '#333',
  },
});