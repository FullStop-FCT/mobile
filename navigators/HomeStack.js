import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import Home from '../screens/Home';


const Stack = createStackNavigator();

export default function HomeStack() {
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTintColor: '#444',
        headerStyle: { backgroundColor: '#a3c3d9', height: 60 }}}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={({ navigation }) => {
            return {
              headerTitle: () => <Header title='Início' navigation={navigation} />
            }
          }}
        />
        

        
      </Stack.Navigator>
    );
}