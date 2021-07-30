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
import jwt from 'jwt-decode';


export default function Actions({ navigation }) {

  const [actions, setActions] = useState([]);

  useEffect(() => {
    fetcher();
  }, [])

  async function fetcher() {
    const token = await AsyncStorage.getItem('token');
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }
    const decoded = jwt(token);
    await api.get('activities/listJoinedActivitiesMobile?username='+decoded.iss, config).then(response => setActions(response.data));
    // await api.get('activities/listJoinedActivitiesMobile?username='+decoded.iss, config).then(response => console.log(response.data));
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
        </Text>

      <FlatList data={actions} renderItem={({ item }) => (
        //<TouchableOpacity onPress={() => navigation.navigate('ActionDetails', item)}>
          <Card>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDetails}> {item.done ? 'Ação Completa' : 'Ação por completar'} </Text>
          </Card>
        //</TouchableOpacity>
      )} />

    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#993955',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
    backgroundColor: '#e9ecf5',
  },
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
    fontSize: 12,
    color: '#444',
  },
});