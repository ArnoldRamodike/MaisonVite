import { View, Text, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens//ProfileScreen/ProfileScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import { icons } from '../../constants';

const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return (
    <Tab.Navigator >
      <Tab.Screen  name="home" component={HomeScreen}  
      options={{
        tabBarLabel: ({color}) => (<Text style={{color:color, fontSize:12, marginTop: -7}}>Home</Text>),
        tabBarIcon: ({size}) => (
            <Image source={icons.home} resizeMode='cover' style={{height: size, width:size}} />
        )
      }}/>
      <Tab.Screen name="booking" component={BookingScreen}
       options={{
        tabBarLabel: ({color}) => (<Text style={{color:color, fontSize:12, marginTop: -7}}>Bookings</Text>),
        tabBarIcon: ({size}) => (
            <Image source={icons.plus} resizeMode='cover' style={{height: size, width:size}} />
        )
      }} />
      <Tab.Screen name="profile" component={ProfileScreen} 
       options={{
        tabBarLabel: ({color}) => (<Text style={{color:color, fontSize:12, marginTop: -7}}>Profile</Text>),
        tabBarIcon: ({size}) => (
            <Image source={icons.profile} resizeMode='cover' style={{height: size, width:size}} />
        )
      }}/>
    </Tab.Navigator>
  )
}

export default TabNavigation