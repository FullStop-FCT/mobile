import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';


import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



const HomeScreen = ({navigation}) => {
  

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.sliderContainer}>
        <Swiper
          autoplay
          horizontal={false}
          height={200}
          activeDotColor="#e9ecf5">
          <View style={styles.slide}>
            <Image
              source={require('../assets/img/1.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/img/2.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
          <View style={styles.slide}>
            <Image
              source={require('../assets/img/3.jpg')}
              resizeMode="cover"
              style={styles.sliderImage}
            />
          </View>
        </Swiper>
      </View>

      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('Actions')
          }>
          <View style={styles.categoryIcon}>
          <MaterialCommunityIcons name="hand-heart" size={35} color="#993955" />
          </View>
          <Text style={styles.categoryBtnTxt}>Participa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>navigation.navigate('Organizations')}>
          <View style={styles.categoryIcon}>
          <FontAwesome name="group" color="#993955" size={35} />
            
          </View>
          <Text style={styles.categoryBtnTxt}>Organizações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Explore')}>
          <View style={styles.categoryIcon}>
          <Fontisto name="map-marker-alt" size={35} color="#993955" />
          </View>
          <Text style={styles.categoryBtnTxt}>Mapa</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.categoryContainer, {marginTop: 10}]}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Rankings')}>
          <View style={styles.categoryIcon}>
            <FontAwesome name="trophy" size={35} color="#993955" />
          </View>
          <Text style={styles.categoryBtnTxt}>Rankings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('About')}>
          <View style={styles.categoryIcon}>
            <FontAwesome name="info" size={35} color="#993955" />
          </View>
          <Text style={styles.categoryBtnTxt}>Sobre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => navigation.navigate('Settings')}>
          <View style={styles.categoryIcon}>
            <MaterialIcons name="support-agent" size={35} color="#993955" />
          </View>
          <Text style={styles.categoryBtnTxt}>Suporte</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecf5'
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 45,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#ccd6eb',
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#993955',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
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
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
