import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import {View, SafeAreaView, StyleSheet, Image, ScrollView,} from 'react-native';
import FlatButton from '../shared/button';

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Card from '../shared/card';

// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

import Cookie from 'js-cookie';


const ProfileScreen = ({navigation}) => {

  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const { name, email, photoUrl, bio, location, username} = storedCredentials;
  const uri = {uri : photoUrl};
  const pp = require('../assets/img/pp.png');

  const [profile, setProfile] = useState(
    {name: 'JohnDoe26',
    hashedPassword:'dqwdwqduiSA21skiqwsx',
    description: 'Sou muito misterioso.\nAdoro comer batatas fritas.\nMas também gosto de amendoins!', 
    registerDate: 'O inicio dos tempos',
    picture: 'require(../assets/avatar-2.png)',
    experience: 9001});

  

  const clearLogin = () => {
    Cookie.remove('token');
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('Credentials')
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };


  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
        <Image source={uri ? uri : pp} style={styles.profile}/>
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{username}</Title>
            <Caption style={styles.caption}>Voluntário</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="account" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{name ? name : "Nome"}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{email ? email : "Email"}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>{location ? location : "Localização"}</Text>
        </View>
        <Card >
          <Text style={{marginLeft: 20}}>{bio ? bio : "Edite o perfil para atualizar a sua biografia"}</Text>
        </Card>
      </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>0</Title>
            <Caption>Ações</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>0</Title>
            <Caption>Horas</Caption>
          </View>
      </View>

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => navigation.navigate('UserActions')}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#993955" size={25}/>
            <Text style={styles.menuItemText}>As tuas Ações</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => navigation.navigate('Rankings')}>
          <View style={styles.menuItem}>
            <Icon name="medal-outline" color="#993955" size={25}/>
            <Text style={styles.menuItemText}>O teu Rank</Text>
          </View>
        </TouchableRipple>
        
      </View>

      <View style={styles.signout}>
        <FlatButton text='Sign Out'  onPress={clearLogin}  />
        </View>
    </ScrollView>
    
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecf5'
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  signout: {
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#ccd6eb',
    borderBottomWidth: 1,
    borderTopColor: '#ccd6eb',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 80,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccd6eb',
    
  },
  menuWrapper: {
    marginTop: 7,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  profile: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#993955'
},
});