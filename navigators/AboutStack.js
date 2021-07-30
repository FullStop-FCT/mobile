import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import About from '../screens/About';



const Stack = createStackNavigator();

export default function AboutStack() {
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTintColor: '#444',
        headerStyle: { backgroundColor: '#a3c3d9', height: 60 }}}
      >
        <Stack.Screen
          name="About"
          component={About}
          options={({ navigation }) => {
            return {
              headerTitle: () => <Header title='Sobre nós' navigation={navigation} />
            }
          }}
        />
      </Stack.Navigator>
    );
}