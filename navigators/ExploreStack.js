import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import Explore from '../screens/Explore';
import Profile from '../screens/Profile';
import Map from '../components/Map';

const Stack = createStackNavigator();

export default function ExploreStack() {
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTintColor: '#444',
        headerStyle: { backgroundColor: '#a3c3d9', height: 60 }}}
      >
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={({ navigation }) => {
            return {
              headerTitle: () => <Header title='Explora' navigation={navigation} />
            }
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
        />

        <Stack.Screen
          name="Map"
          component={Map}
        />

      </Stack.Navigator>
      
    );
}