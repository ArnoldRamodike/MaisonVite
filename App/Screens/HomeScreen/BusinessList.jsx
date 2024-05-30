import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading'
import GlobalApi from '../../utils/GlobalApi';
import BusinessListItemSmall from './BusinessListItemSmall';

const BusinessList = () => {

    const [businesslists, setBusinesslists] = useState({});

    useEffect(() => {
        getBusinessList();
    },[])

    const getBusinessList = async () => {
        GlobalApi.getBusinessLists().then((res) => {
            // console.log(res.businessLists[0].categories);
            setBusinesslists(res?.businessLists)
        })
    }

  return (
    <View style={{marginTop: 20}}>
      <Heading title={'Latest Business'}  viewAll={true}/>
      <FlatList
        data={businesslists}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
            <View style={{marginRight: 10}}>
                <BusinessListItemSmall business={item}/>
            </View>
        )}
      />
    </View>
  )
}

export default BusinessList