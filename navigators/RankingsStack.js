import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import Rankings from '../screens/Rankings';



const Stack = createStackNavigator();

export default function RankingStack() {
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTintColor: '#444',
        headerStyle: { backgroundColor: '#a3c3d9', height: 60 }}}
      >
        <Stack.Screen
          name="Rankings"
          component={Rankings}
          options={({ navigation }) => {
            return {
              headerTitle: () => <Header title='Rankings' navigation={navigation} />
            }
          }}
        />
      </Stack.Navigator>
    );
}