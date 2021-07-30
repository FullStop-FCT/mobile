import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Animated,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
  } from "react-native";
import MapView, {Marker, Callout, Polyline} from 'react-native-maps'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "../services/api";
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';
import { GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const height = Dimensions.get('window').height

const origin = {latitude: 38.616691, longitude: -9.215686};
const destination = {latitude: 38.675983, longitude: -9.163844};
const GOOGLE_MAPS_APIKEY = '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';

  const state = {
    coordinates: [
      { title: 'Limpar praia', latitude: 38.616691, longitude: -9.215686, time:'Amanhã às 9:00'},
      { title: 'Apoio aos idosos', latitude: 38.675983, longitude: -9.163844, time:'Domingo às 15:00' },
      { title: 'Distribuição Alimentar', latitude: 38.712192, longitude: -9.144961, time:'Sexta feira às 19:00'},
    ]
  }
  
const Map = ({navigation}) => {
//export default function Map({navigation}) {

  

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [actions, setActions] = useState([]);

  useEffect(() => {
    fetcher();
  }, [])


  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);


  async function fetcher() {
    const token = await AsyncStorage.getItem('token');
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
    console.log(config);
    api.get('activities/listmobile', config).then(response => setActions(response.data));
    
  }

console.log(actions);

 
    return (
        <View>
        <MapView
            style = {styles.map}
            loadingEnabled = {true}
            region ={{ 
                latitude:  location ? location.coords.latitude : 38.616691,
                longitude:  location ? location.coords.longitude : -9.281076,
                latitudeDelta: 0.455,
                longitudeDelta: 0.4521
            }}    
        >
                    
                    <Marker 
                    coordinate={{
                        latitude:  location ? location.coords.latitude : 38.754158,
                        longitude:  location ? location.coords.longitude : -9.281076,
                    }}
                    title={"A sua localização"}
                    image={require('../assets/img/marker.png')}
                    > 
                    </Marker>
            { 
                actions.map(marker => (
                    <Marker 
                    key={marker.title}
                    coordinate={{
                        latitude: parseFloat(marker.lat) ? parseFloat(marker.lat): 38.754158,
                        longitude: parseFloat(marker.lon)? parseFloat(marker.lon): -9.281076,
                    }}
                    title={marker.title}
                    description={"Dia: " + marker.date + ", Hora: " + marker.startHour}
                    image={require('../assets/img/map_marker.png')}
                    > 
                    </Marker>
                ))
            }
        </MapView>
            <View style={styles.searchBox}>
              <GooglePlacesAutocomplete
              placeholder="Procure aqui"
              placeholderTextColor="#993955"
              autoCapitalize="none"
              styles={{flex:1,padding:0}}
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
                
              }}
              query={{
                key: 'AIzaSyCjPbKuYh5RpnNU0MmVJmhI1kcINuug5Jo',
                language: 'en',
              }}
              />
              <Ionicons name="ios-search" size={20} style={{marginLeft:20,marginTop:10}} color="#993955"/>
            </View>
        </View>

        

    )
}

export default Map;

const styles = StyleSheet.create({
    map: {
        height
    },
    searchBox: {
        flex:1,
        position:'absolute', 
        marginTop: Platform.OS === 'ios' ? 40 : 60, 
        flexDirection:"row",
        backgroundColor: '#e9ecf5',
        width: '90%',
        alignSelf:'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
      },
})

//export default Map