import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import GlobalApi from '../../utils/GlobalApi';
import BusinessListItem from './BusinessListItem';
import color from '../../utils/color';

const BusinessListByCategory = () => {
    const params = useRoute().params;
    const navigation = useNavigation();
    const [BusinessListByCategory, setBusinessListByCategory] = useState({})

    useEffect(() => {
        getBusinessList();
    },[])

    const getBusinessList = async () => {
        GlobalApi.getBusinessListByCategory(params.category).then((res) => {
            setBusinessListByCategory(res?.businessLists)
        }).catch((err) => {
            console.log(err);
        })
    }

  return (
    <View style={{padding:20, paddingTop: 50}}>
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', gap: 10}} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
          <Text style={{fontSize: 25}}>{params.category}</Text>
        </TouchableOpacity>
     {BusinessListByCategory?.length > 0?  <FlatList
        style={{marginTop: 15 }}
         data={BusinessListByCategory}
         renderItem={({item, index}) => (
            <BusinessListItem business={item}/>
         )}
        />
        : <Text style={{fontSize: 20, textAlign: 'center', marginTop: '20%', color: color.Gray}}>No business found in this Category</Text> }
    </View>
  )
}

export default BusinessListByCategory

const styles = StyleSheet.create({})