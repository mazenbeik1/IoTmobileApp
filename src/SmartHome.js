import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { ScrollView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Home from "./Home";
import Details from "./Details";
import Settings from "./Settings";
import IoT from "../assets/IoT.png"

const Tab = createBottomTabNavigator()
export default function SmartHome() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
        />
        <Tab.Screen
          name="Details"
          component={Details}
        />
        {/* <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ()=>{ require('../assets/favicon.png')}
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  )
}