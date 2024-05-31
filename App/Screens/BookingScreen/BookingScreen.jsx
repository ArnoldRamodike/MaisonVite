import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Components/Heading';
import GlobalApi from '../../utils/GlobalApi';
import { useUser} from '@clerk/clerk-expo'

import BusinessListItem from '../BusinessListScreen/BusinessListItem'

const BookingScreen = () => {

  const [bookings, setBookings] = useState({});
  const [loading, setLoading] = useState(false);
  const {user} = useUser();

  useEffect(() => {

    getUserBookings();
  
  }, [user])

  const getUserBookings = async () => {
    setLoading(true);
     GlobalApi.getBookings(user?.emailAddresses).then((res) => {
      console.log(res);
      setBookings(res.bookings)
     }).catch(err => console.log(err)).finally(
      setLoading(false)
     )
  }
  

  return (
    <View style={{padding: 30}}>
      <Heading title={'My Bookings'}/>

      <View>
        <FlatList
         data={bookings}
         onRefresh={() =>  getUserBookings()}
         refreshing={loading}
         renderItem={({item, index}) => (
           <BusinessListItem 
              business={item?.businessList}
              booking={item}
           />
         )}
        />
      </View>
    </View>
  )
}

export default BookingScreen