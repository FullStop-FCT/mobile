import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Header from '../shared/header';
import UserActions from '../screens/UserActions';
import ActionDetails from '../screens/ActionDetails';



const Stack = createStackNavigator();

export default function uActionsStack() {
    return(
        <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerTintColor: '#444',
        headerStyle: { backgroundColor: '#a3c3d9', height: 60 }}}
      >
        <Stack.Screen
          name="userActions"
          component={UserActions}
          options={({ navigation }) => {
            return {
              headerTitle: () => <Header title='As Minhas Ações' navigation={navigation} />
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