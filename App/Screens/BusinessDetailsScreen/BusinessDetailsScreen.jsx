import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import color from '../../utils/color';
import Heading from '../../Components/Heading'
import BusinessPhotos from './BusinessPhotos';
import BookingModal from './BookingModal';

const BusinessDetailsScreen = () => {
    const params  = useRoute().params;
    const navigation = useNavigation();
    const [isReadMore, setIsReadMore] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [business, setBusiness] = useState(params.business)

    // useEffect(() => {
    //     console.log(business);
       
    // },[params])

  return business&& (
    <View>
    <ScrollView style={{height: '92%'}}>
         <TouchableOpacity style={styles.bacckButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color={color.White} />
        </TouchableOpacity>
      <Image source={{uri: business?.images[0]?.url}} style={{width: '100%', height: 300}}/>

      <View style={styles.infoContainer}>
        <Text style={{fontSize: 20}}>{business?.name}</Text>
        <View style={styles.subContainer}>
            <Text style={{color: color.Primary, fontSize: 20}}>{business?.contactPerson} ✨</Text>
            <Text style={{color: color.White, backgroundColor: color.Primary, padding: 5, borderRadius: 5, fontSize: 17}}>
                {business?.categories[0].name}
            </Text>
        </View>

        <Text style={{fontSize: 17, color: color.Gray}}>
            <EvilIcons name="location" size={25} color={color.Primary} style={{marginRight: 10}} /> 
            {business?.address}
        </Text>

        <View style={{borderWidth:0.4, color: color.Gray, marginTop: 20, marginBottom: 20}}>
            {/* Border line */}
        </View>

        <View>
            <Heading title={"About Me"}/>
            <Text style={{color: color.Gray, fontSize: 16, lineHeight: 28}} numberOfLines={isReadMore ? 20: 5}>
                {business?.about}
            </Text>
            <TouchableOpacity onPress={() => setIsReadMore(!isReadMore)}>
                <Text style={{color:color.Primary, fontSize: 16, marginTop: 20}}>{isReadMore?'Read less' :'Read more'}</Text>
            </TouchableOpacity>
        </View>

        <View style={{borderWidth:0.4, color: color.Gray, marginTop: 20, marginBottom: 20}}>
            {/* Border line */}
        </View>
            <BusinessPhotos business={business}/>
      </View>
    </ScrollView>

    <View style={{display: 'flex', flexDirection: 'row',margin: 8, gap: 3}}>
        <TouchableOpacity style={styles.messageBtn}><Text style={{textAlign: 'center', color: color.Primary, fontSize: 18}}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookingbtn} onPress={() => setShowModal(true)}>
            <Text style={{textAlign: 'center', color: color.White, fontSize: 18}}>Booking Now</Text>
        </TouchableOpacity>
        
        {/* Booking Modal  */}
        <Modal animationType='slide' visible={showModal}>
            <BookingModal businessId={business.id} hideModal={()=> setShowModal(false)}/>
        </Modal>
    </View>
    </View>
  )
}

export default BusinessDetailsScreen

const styles = StyleSheet.create({
    bacckButton: {
        position: 'absolute',
        zIndex: 1,
        padding: 20,
    },
    infoContainer: {
        padding: 20,
        display: 'flex',
        gap: 7
    },
    subContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        gap: 5 
    },

    messageBtn: {
        padding: 15,
        backgroundColor: color.White,
        borderWidth: 1,
        borderColor: color.Primary,
        borderRadius: 99,
        flex: 1
    },
    bookingbtn: {
        padding: 15,
        backgroundColor: color.Primary,
        borderWidth: 1,
        borderColor: color.Primary,
        borderRadius: 99,
        flex: 1
    }
})