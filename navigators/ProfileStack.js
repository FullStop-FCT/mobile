import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import Profile from '../screens/Profile';
import UserActions from '../screens/UserActions';
import ActionDetails from '../screens/ActionDetails';
import RankingsStack from './RankingsStack';
import EditProfile from '../screens/EditProfile.js';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createStackNavigator();


export default function ProfileStack() {
  const {colors} = useTheme();
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTintColor: '#444',
        headerStyle: { backgroundColor: '#a3c3d9', height: 60 }}}
      >
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({ navigation }) => {
            return {
              headerTitle: () => <Header  title='Meu Perfil' navigation={navigation} />,
              headerRight: () => (
                <View style={{marginRight: 15}}>
                  <MaterialCommunityIcons.Button
                    name="account-edit"
                    size={20}
                    backgroundColor={'#e9ecf5'}
                    color="#993955"
                    onPress={() => navigation.navigate('EditProfile')}
                    
                  />
                </View>
              ),
            }
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ title: 'Edita o Perfil'}}
        />

        <Stack.Screen
          name="UserActions"
          component={UserActions}
          options={{ title: 'As Minhas Ações'}}
        />

        <Stack.Screen
          name="ActionDetails"
          component={ActionDetails}
          options={{ title: 'Detalhes da Ação' }}
        />
        
      </Stack.Navigator>
    );
}
