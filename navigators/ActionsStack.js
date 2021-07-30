import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import Actions from '../screens/Actions';
import ActionDetails from '../screens/ActionDetails';
import { NavigationContainer } from '@react-navigation/native';



// home stack navigator screens
const Stack = createStackNavigator();

export default function ActionsStack() {
  return(
    
    <Stack.Navigator
    
    screenOptions={{headerTintColor: '#444',
    headerStyle: { backgroundColor: '#a3c3d9', height: 60 }}}
    >
    <Stack.Screen
      name="Actions"
      component={Actions}
      options={({ navigation }) => {
        return {
          headerTitle: () => <Header title='Ações Solidárias' navigation={navigation} />
        }
      }}
    />
    <Stack.Screen
      name="ActionDetails"
      component={ActionDetails}
      options={{ title: 'Detalhes da Ação' }}
    />
  </Stack.Navigator>
 
);
}