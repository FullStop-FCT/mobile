import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import Settings from '../screens/Settings';



const Stack = createStackNavigator();

export default function SettingsStack() {
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTintColor: '#444',
        headerStyle: { backgroundColor: '#a3c3d9', height: 60 }}}
      >
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({ navigation }) => {
            return {
              headerTitle: () => <Header title='Suporte' navigation={navigation} />
            }
          }}
        />
      </Stack.Navigator>
    );
}