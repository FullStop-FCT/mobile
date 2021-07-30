import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

// stacks
import ActionsStack from './ActionsStack';
import AboutStack from './AboutStack';
import OrganizationsStack from './OrganizationsStack';
import SettingsStack from './SettingsStack';
import UserActionsStack from './UserActionsStack';
import RankingsStack from './RankingsStack';
import ProfileStack from './ProfileStack';
import Welcome from './../screens/Welcome';
import { DrawerContent } from './../screens/DrawerContent';
import Settings from './../screens/Settings';
import Login from './../screens/Login';



// drawer navigation options
const Drawer = createDrawerNavigator();




export default function RootDrawer() {
    return(
        


        <Drawer.Navigator
        initialRouteName="Welcome"
        drawerContent={props => <DrawerContent {...props} />}
        >

        <Drawer.Screen
          name="BottomTab"
          component={Welcome}
        />

        <Drawer.Screen
          name="Rankings"
          component={RankingsStack}
          
        />

        <Drawer.Screen
          name="About"
          component={AboutStack}
          
        />

        <Drawer.Screen
          name="Settings"
          component={SettingsStack}
          
        />

        <Drawer.Screen
          name="Organizations"
          component={OrganizationsStack}
          
        />

        <Drawer.Screen
          name="UserActions"
          component={UserActionsStack}
          
        />

        <Drawer.Screen
          name="Login"
          component={Login}
        />
      </Drawer.Navigator>
      

      
    );
  }