import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import {images} from '../../../constants'
import color from '../../utils/color'
export default  function Login() {

  return (
    <View style={{alignItems: 'center'}}>
      <Image source={images.logo} style= {styles.loginImage}/>
    </View>
  )
}

const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        borderWidth: 4,
        borderColor: color.BLACK,
    }
})