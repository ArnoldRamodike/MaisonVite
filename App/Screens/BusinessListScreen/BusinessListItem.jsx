import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../../utils/color';
import { EvilIcons } from '@expo/vector-icons';

const BusinessListItem = ({business}) => {
  return (
    <View style= {styles.container}>
       <Image source={{uri: business?.images[0].url}} style={styles.image} />
       <View style={styles.subContainer}>
         <Text style={{color: color.Gray, fontSize: 15}}>{business.contactPerson}</Text>
         <Text style={{color: color.Black, fontSize: 20}}>{business.name}</Text>
         <Text style={{color: color.Gray, fontSize: 13}}>
            <EvilIcons name="location" size={20} color={color.Primary} style={{marginRight: 10}} /> {business.address}
         </Text>

       </View>
    </View>
  )
}

export default BusinessListItem

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: color.White,
        borderRadius: 15,
        marginBottom: 15,
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    subContainer: {
        display: 'flex',
        gap: 8
    }
})