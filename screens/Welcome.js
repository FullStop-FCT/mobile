import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from "react-native/Libraries/NewAppScreen";
import Icon from "react-native-vector-icons/Ionicons";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Actions from "../screens/Actions";
import ActionsStack from '../navigators/ActionsStack';
import ProfileStack from "../navigators/ProfileStack";
import HomeStack from "../navigators/HomeStack";
import ExploreStack from "../navigators/ExploreStack";


/*
class Actions extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>solidarity actions</Text>
      </View>
    );
  }
}
*/


/*
class Profile extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

function TabBarIcon(props) {
  return (
    <MaterialIcons
      name={props.name}
      size={30}
      style={{ marginBottom: -3 }}
      color={props.focused ? "#993955" : "#e9ecf5"}
    />
  );
}

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";
/*
export default function BottomTabNavigator({ navigation, route }) {
  return (
 */   
const BottomTabNavigator = () => (

    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{ activeTintColor: "#993955",
      inactiveTintColor: "#e9ecf5",
      style: {
        backgroundColor: '#a3c3d9',
        paddingBottom: 5,
        height: 60
  }
    }}
    
    >
      <BottomTab.Screen
        name="Home"
        component={HomeStack}
        options={{
          title: "Início",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="home" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Actions"
        component={ActionsStack}
        options={{
          tabBarLabel: "Adiciona",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="add-circle" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Explore"
        component={ExploreStack}
        options={{
          tabBarLabel: "Explora",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="explore" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          title: "Perfil",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="person" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
//}
export default BottomTabNavigator;
