import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '../../Components/Heading'

const BusinessPhotos = ({business}) => {
  return (
    <View>
        <Heading title={'Photos'}/>
        <FlatList
            data={business.images}
            numColumns={2}
            renderItem={({item}) => (
                <Image source={{uri: item.url}} style={{width: '50%', flex: 1, height: 120, borderRadius: 15, margin: 7}} />
            )}
        />
    </View>
  )
}

export default BusinessPhotos

const styles = StyleSheet.create({

})