import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import color from '../../utils/color'

const BusinessListItemSmall = ({business}) => {
  return (
   <View style={styles.constainer}>
        <Image source={{uri: business.images[0]?.url}} style={styles.image} />
        <View style={styles.infoContainer}>
            <Text style={{fontSize: 17}}>{business.name}</Text>
            <Text style={{fontSize: 13, color:color.Gray}}>{business?.contactPerson}</Text>
            <Text style={{fontSize: 10, padding: 3, color: color.White, backgroundColor: color.Primary_Light, borderRadius: 5, alignSelf: 'flex-start', paddingHorizontal: 7 }}>
                {business.categories[0].name}
            </Text>
            
        </View>
   </View>
  )
}

export default BusinessListItemSmall

const styles = StyleSheet.create({
    constainer: {
        padding: 10,
        backgroundColor: color.White,
        borderRadius: 10,
    },  
    infoContainer: {
        padding: 7,
        display: 'flex',
        gap: 3
    },
    image: {
        width: 162,
        height: 100,
        borderRadius: 10,
    }
})