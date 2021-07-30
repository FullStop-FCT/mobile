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



export default function Organizations({ navigation }) {
  const [orgs, setOrgs] = useState([]);

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
    // await api.get('users/listorg', config).then(response => console.log(response.data));
    await api.get('users/listorg', config).then(response => setOrgs(response.data));
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
          Lista de organizações
        </Text>

      <FlatList data={orgs} renderItem={({ item }) => (
        //<TouchableOpacity onPress={() => navigation.navigate('User', item.username)}>
          <Card>
            <Text style={styles.cardTitle}>{item.name} ({item.username})</Text>
            <Text style={styles.cardDetails}>Organizou {item.createdActivities} ações solidárias</Text>
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