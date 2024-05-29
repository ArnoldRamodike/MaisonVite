import {Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens//ProfileScreen/ProfileScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import color from '../utils/color';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: color.Primary,
    }}>
      <Tab.Screen  name="home" component={HomeNavigation}  
      options={{
        tabBarLabel: ({color}) => (<Text style={{color:color, fontSize:12, marginTop: -7}}>Home</Text>),
        tabBarIcon: ({size}) => (
            <Image source={require('../../assets/icons/home.png')} resizeMode='cover' style={{height: size, width:size}} />
        )
      }}
      />
      <Tab.Screen name="booking" component={BookingScreen}
       options={{
        tabBarLabel: ({color}) => (<Text style={{color:color, fontSize:12, marginTop: -7}}>Bookings</Text>),
        tabBarIcon: ({size}) => (
            <Image source={require('../../assets/icons/bookmark.png')}resizeMode='cover' style={{height: size, width:size}} />
        )
      }} 
      />
      <Tab.Screen name="profile" component={ProfileScreen} 
       options={{
        tabBarLabel: ({color}) => (<Text style={{color:color, fontSize:12, marginTop: -7}}>Profile</Text>),
        tabBarIcon: ({size}) => (
            <Image source={require('../../assets/icons/profile.png')} resizeMode='cover' style={{height: size, width:size}} />
        )
      }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigation