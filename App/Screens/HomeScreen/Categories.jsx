import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../utils/GlobalApi';
import Heading from '../../Components/Heading';
import color from '../../utils/color';
import { useNavigation } from '@react-navigation/native';

const Categories = () => {
    const [categories, setCategories] = useState({});
    const navigation = useNavigation();

    useEffect(() => {
        getCategory();
    },{})

    const getCategory = async () => {
        GlobalApi.getCategories().then((res) =>{
            // console.log(res);
            setCategories(res?.categories)
        })
    }
  return (
    <View style={{marginTop: 10}}>
      <Heading title={'Categories'} viewAll={true}/>
      <FlatList
        data={categories}
        numColumns={4}
        renderItem={({item, index}) => index <= 3 &&(
            <TouchableOpacity style={styles.container} onPress={() => navigation.push('business-list', {category: item.name})}>
                <View style={styles.iconContainer}>
                    <Image source={{uri: item.icon?.url}} style={{width: 30, height: 30}}/>
                </View>
                <Text style={{marginTop: 5}}>{item?.name}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    iconContainer: {
        backgroundColor: color.Light_Gray,
        padding: 17,
        borderRadius: 99
    }
})