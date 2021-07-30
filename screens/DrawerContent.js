import React from 'react';
import { useContext } from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import{ CredentialsContext } from '../components/CredentialsContext';

export function DrawerContent(props) {

    const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

    const { name, email, photoUrl, username } = storedCredentials;

    const paperTheme = useTheme();

    const { signOut, toggleTheme } = React.useContext(CredentialsContext);

    const img = require('./../assets/img/profile.png');

    return(
        <View style={{flex:1}} backgroundColor={'#e9ecf5'}>
            <DrawerContentScrollView {...props} backgroundColor={'#e9ecf5'}>
                <View style={styles.drawerContent}>
                <ImageBackground source={require('../assets/img/bg.jpg')} style={{marginTop: -30, height: 180}}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 50}}>
                            <Image source={{uri : photoUrl} ? {uri : photoUrl} : require('../assets/img/pp.png')} style={styles.profile}/>
                            <View style={{marginLeft:15, flexDirection:'column', marginTop: -4}}>
                                <Title style={styles.title}>{username}</Title>
                                <Caption style={styles.caption}>{email}</Caption>
                            </View>
                        </View>

                        <View style={{flexDirection:'row', marginTop: 30}}>
                            <View style={styles.section} >
                                <Paragraph style={[styles.paragraph, styles.caption]}>0</Paragraph>
                                <Caption style={styles.caption}>Ações</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>0</Paragraph>
                                <Caption style={styles.caption}>Pontos</Caption>
                            </View>
                        </View>
                    </View>
                </ImageBackground>   
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Início"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Perfil"
                            onPress={() => {props.navigation.navigate('Profile')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="medal-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Rankings"
                            onPress={() => {props.navigation.navigate('Rankings')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="information-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Sobre"
                            onPress={() => {props.navigation.navigate('About')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon
                                name="account-settings-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Suporte"
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                        
                    </Drawer.Section>
                    
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
            </Drawer.Section>
        </View>
    );

}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      backgroundColor: '#e9ecf5'
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color: '#e9ecf5'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color: '#e9ecf5'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
      
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 20,
      marginTop: -15,
      
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
      
    },
    drawerSection: {
      marginTop: 15,
      
    },
    bottomDrawerSection: {
        marginBottom:0,
        borderColor: '#f4f4f4',
        borderTopWidth: 0,
        borderBottomWidth: 0
        
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    profile: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 3,
        borderColor: '#e9ecf5'
    },
  });