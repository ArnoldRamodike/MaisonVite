import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import * as WebBrowser from "expo-web-browser";
import {images} from '../../../constants'
import color from '../../utils/color';
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default  function Login() {
    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = React.useCallback(async () => {
        try {
          const { createdSessionId, signIn, signUp, setActive } =
            await startOAuthFlow();
    
          if (createdSessionId) {
            setActive({ session: createdSessionId });
          } else {
            // Use signIn or signUp for next steps such as MFA
          }
        } catch (err) {
          console.error("OAuth error", err);
        }
      }, []);
  return (
    <View style={{alignItems: 'center'}} className='bg-red-500'>
      <Image source={images.profile} style= {styles.loginImage} resizeMode='contain'/>
      <View style={styles.subContainer} >
            <Text style={{fontSize: 27, color: color.White}} className='text-white'>
                Let's find Professinal Cleaning and repair servieces
            </Text>
            <Text className='font-semibold text-red-500'>Best app to find whta you need for your home</Text>
            <TouchableOpacity style={styles.button} onPress={onPress} >
                <Text style={{textAlign: 'center', fontSize: 17, color: color.Primary}}>Let's Get Started</Text>
             </TouchableOpacity>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
    loginImage: {
        width: 230,
        height: 450,
        marginTop: 70,
        borderWidth: 4,
        borderColor: color.Black,
        borderRadius: 15
    },
    subContainer:{
        backgroundColor: color.Primary,
        height: '70%',
        marginTop: -20,
        borderTopLeftRadius: 30,
        padding: 20
    },
    button: {
        padding: 15,
        backgroundColor: color.White,
        borderRadius: 99,
        marginTop: 40,
    }
})