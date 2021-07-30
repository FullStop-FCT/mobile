import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import Organizations from '../screens/Organizations';



const Stack = createStackNavigator();

export default function OrganizationsStack() {
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTintColor: '#444',
        headerStyle: { backgroundColor: '#a3c3d9', height: 60 }}}
      >
        <Stack.Screen
          name="Organizations"
          component={Organizations}
          options={({ navigation }) => {
            return {
              headerTitle: () => <Header title='Organizações' navigation={navigation} />
            }
          }}
        />
      </Stack.Navigator>
    );
}