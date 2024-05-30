import { View, Text, Image, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import color from '../../utils/color'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Header = () => {
    const {user, isLoaded} = useUser()
  return user && (
    <View style={styles.container}>
       <View style={styles.profileMainContainer}>
          <View style={styles.profileContainer}>
            <Image source={{uri: user?.imageUrl}} style={styles.userImage}/>
            <View >
                <Text>Welcome</Text>
                <Text style={{color:color.White, fontSize: 20}}>{user?.fullName}</Text>
            </View>
          </View>
          <Image source={require("../../../assets/icons/bookmark.png")} style={{height: 20, width: 15}}  resizeMode='cover'/>
        </View>

        <View style={styles.seachBarContainer}>
            <TextInput style={styles.textInput} placeholder='Search'/>
            <FontAwesome name="search" size={24} color={color.Primary} style={styles.searchButton} />
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingTop: 40,
        backgroundColor: color.Primary,
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,

    },
    profileMainContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    profileContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    userImage: {
        width: 45,
        height: 45,
        borderRadius: 99,
    },

    seachBarContainer:{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 10
    },

    textInput:{
        padding: 7,
        paddingHorizontal: 16,
        backgroundColor: color.White,
        borderRadius: 8,
        width: '85%',
        fontSize: 16
    },

    searchButton:{
        backgroundColor: color.White,
        padding: 10,
        borderRadius: 8
    }
})