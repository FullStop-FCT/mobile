import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/card';
import FlatButton from '../shared/button';
import { NavigationEvents } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt from 'jwt-decode'; 
import MapView, {Marker, Callout, Polyline} from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

import {
  Avatar,
  WelcomeImage,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  WelcomeContainer,
  ButtonText,
  Line,
} from './../components/styles';
import { api } from '../services/api';

export default function ActionDetails({ route, navigation }) {
  const {ID, title, location, category, description, date, startHour, endHour, activityOwner, lat, lon, totalParticipants, participants, waypoints} = route.params;
  const [participating, setParticipating] = useState(false);
  const GOOGLE_MAPS_APIKEY = 'AIzaSyCjPbKuYh5RpnNU0MmVJmhI1kcINuug5Jo';

  let points = [];

  if(waypoints.length > 0){
    console.log('waypoints',waypoints);

     for(var i= 0; i < waypoints.length; i+=2 ){
       console.log(waypoints[i])
      points.push(
        {
          
          latitude: parseFloat(waypoints[i]),
          longitude: parseFloat(waypoints[i+1]),
          
        }
      )
    }
    

  }
  console.log('points', points)
  const [coordinates] = useState([
    {
      latitude: parseFloat(lat),
      longitude: parseFloat(lon),
    },
    {
      latitude: 38.675983,
      longitude: -9.163844,
    },
  ]);

  useEffect(() => {
    whenStarting();
  }, [])

  async function whenStarting() {
    const token = await AsyncStorage.getItem('token');
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    await api.get('activities/isjoined/'+ID, config).then(response => setParticipating(response.data));
  }
  async function fetchAndNavigate() {
    const token = await AsyncStorage.getItem('token');
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      }
    }
    const decoded = jwt(token);
    if(!participating) {
      await api.post('activities/join/'+ID+'/'+activityOwner, decoded.iss, config).then(response => console.log(response.data));
    }
    else {
      await api.post('activities/leave/'+ID+'/'+activityOwner, decoded.iss, config).then(response => console.log(response.data));
    }
    setParticipating(!participating);
    navigation.navigate("Actions");
  }

  return (
    <ScrollView style={globalStyles.container}>
    <View >
      <Card>
        <Text style={globalStyles.titleText}>
          {title}
        </Text>
        <View style={{flexDirection:'row'}}>
          <Text>Organizado por </Text>
          <Text style={{fontWeight: 'bold', color:'blue'}} /*onPress={() => navigation.navigate("UserProfile")}*/>{activityOwner == null ? 'ti' : activityOwner}</Text>
        </View>
        <View>
        <Text>Categoria: {category}</Text>
        <Text>Localização: {location}</Text>
        <Text>Data e hora: {date} das {startHour} às {endHour}</Text>
        {<Text>Latitude: {lat} Longitude: {lon}</Text>}
        <Text>Participantes: {participants == null ? '0' : participants} / {totalParticipants}</Text>
        <View style={styles.location}>
          <Text>{description}</Text>
        </View>
        </View>
      </Card>
      <FlatButton text={participating ? 'Cancelar participação' : 'Participar nesta ação' }  onPress={() => fetchAndNavigate()}> </FlatButton>
      <Line />  

      <View style={{marginBottom: 10}}>
        <MapView
            style = {styles.map}
            loadingEnabled = {true}
            region ={{ 
                latitude: parseFloat(lat),
                longitude: parseFloat(lon),
                latitudeDelta: 0.055,
                longitudeDelta: 0.0521
            }}    
        >

                    <MapViewDirections
                    origin={{
                      latitude: parseFloat(lat),
                      longitude: parseFloat(lon),
                    }} 
                    destination={points[0]} 
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                    />

                    <MapViewDirections
                    waypoints={points.slice(1,-1)}
                    origin={points[0]} 
                    destination={points[points.length-1]} 
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                    />

                    {points.map((coordinate, index) =>
                      <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} title={"Etapa nº " + index}/>
                    )}

                    <Marker 
                    coordinate={{
                        latitude: parseFloat(lat),
                        longitude: parseFloat(lon),
                    }}
                    title={"Ponto de Partida"}
                    description={lat + ", " + lon}
                    image={require('../assets/img/markerOrigem.png')}
                    > 
                    </Marker>

                    
        </MapView>
          
        </View>
        <Line />  

    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 300, 
    width: 500,
},
  location: {
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e9ecf5',
  }
});