import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utils/GlobalApi'
import Heading from '../../Components/Heading'

const Slider = () => {

    const [sliders, setSliders] = useState({})

    useEffect(() => {
        getSliders();
    }, [])

    const getSliders = async () => {
         GlobalApi.getSliders()
        .then((res) => {
            // console.log(res);
            setSliders(res?.sliders)
        })
    }

  
  return (
    <View>
      <Heading title={'Offers for you'} />
      <FlatList
        data={sliders}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
            <View style={{marginRight: 20}}>
                <Image source={{uri: item.image?.url}}  style={styles.sliderImage}/>
            </View>
        )}
      />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    sliderImage: {
        width: 270,
        height: 150,
        borderRadius: 20,
        objectFit: 'fill'
    }
})