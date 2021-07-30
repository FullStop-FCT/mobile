import React from 'react';

//colors
import { Colors } from './../components/styles';
const { darkLight, brand, primary, tertiary, secondary } = Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';

// screens
import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import ActionDetails from './../screens/ActionDetails';

import Actions from '../screens/Actions';

import Drawer from './Drawer';


const Stack = createStackNavigator();

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

const RootStack = () => {
  return (
    <CredentialsContext.Consumer>
      {({ storedCredentials }) => (
        <NavigationContainer style={{ backgroundColor: 'red' }}>
          <Stack.Navigator
          initialRouteName="RootDrawer"
            screenOptions={{
              headerStyle: {
                backgroundColor: 'transparent',
              },
              headerTintColor: tertiary,
              headerTransparent: true,
              headerTitle: '',
              headerLeftContainerStyle: {
                paddingLeft: 20,
              },
            }}
          >
            {storedCredentials ? (
              <Stack.Screen
                options={{
                  headerTintColor: primary,
                }}
                name="RootDrawer"
                component={Drawer}
              />             
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            )}
          
          </Stack.Navigator>
          
        </NavigationContainer>
        
      )}
    </CredentialsContext.Consumer>


     



  );
};

export default RootStack;
