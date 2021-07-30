import React, {useState, useEffect} from 'react';
import { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
  Image,
  Button,
  Platform,
} from 'react-native';

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

import {useTheme} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import FlatButton from '../shared/button';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

//import ImagePicker from 'react-native-image-crop-picker';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


import AsyncStorage from '@react-native-async-storage/async-storage';

import { CredentialsContext } from './../components/CredentialsContext';

const EditProfileScreen = ({navigation}) => {

  const [image, setImage] = useState(null);

  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  const { name, email, photoUrl, username } = storedCredentials;

  //const [image, setImage] = useState('https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png');
  const {colors} = useTheme();



  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImageLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setStoredCredentials({...storedCredentials, photoUrl: result.uri});
      console.log(result.uri);
      console.log(photoUrl);
    }
  };

  const pickImageCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
      setStoredCredentials({...storedCredentials, photoUrl: result.uri});
      console.log(result.uri);
      console.log(photoUrl);
    }
  };

  

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Publica a tua Fotografia</Text>
        <Text style={styles.panelSubtitle}>Escolhe a tua Fotografia de Perfil</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={pickImageCamera}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        <Text style={styles.panelButtonTitle}>Tira uma Fotografia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={pickImageLibrary}>
        <Text style={styles.panelButtonTitle}>Escolhe a partir da Biblioteca</Text>
      </TouchableOpacity>
    </View>  
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[280, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
    }}>
      
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ImageBackground
                source={{uri : photoUrl} ? {uri : photoUrl} : require('../assets/img/pp.png')}
                style={{height: 100, width: 100}}
                imageStyle={{borderRadius: 15}}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon
                    name="camera"
                    size={35}
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: '#fff',
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
            {username}
          </Text>
        </View>
        <View style={{marginTop: 5}}>
        <View style={styles.action}>
          <FontAwesome name="at" color="#993955" size={25} />
          <TextInput
            placeholder="Username"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setStoredCredentials({...storedCredentials, username: txt})}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#993955" size={25} />
          <TextInput
            placeholder="Nome Completo"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => AsyncStorage.setItem('name', JSON.stringify({...storedCredentials, name: txt})).then(() => {setStoredCredentials({...storedCredentials, name: txt})})}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color="#993955" size={25} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            keyboardType="email-address"
            autoCorrect={false}
            onChangeText={(txt) => setStoredCredentials({...storedCredentials, email: txt})}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="phone" color="#993955" size={25} />
          <TextInput
            placeholder="Número de telémovel"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setStoredCredentials({...storedCredentials, number: txt})}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" color="#993955" size={25} />
          <TextInput
            placeholder="Localização"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setStoredCredentials({...storedCredentials, location: txt})}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="book" color="#993955" size={25} />
          <TextInput
            placeholder="Biografia"
            placeholderTextColor="#666666"
            autoCorrect={false}
            onChangeText={(txt) => setStoredCredentials({...storedCredentials, bio: txt})}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        </View>
        
            <FlatButton text='Submeter'  onPress={() => navigation.navigate('Profile')}/>
      </Animated.View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecf5'
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 70,
  },
  panel: {
    padding: 20,
    backgroundColor: '#e9ecf5',
    paddingTop: 20,
    
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#ccd6eb',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#e9ecf5',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#993955',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#e9ecf5',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccd6eb',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
});