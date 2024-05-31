import { FlatList, KeyboardAvoidingView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CalendarPicker from 'react-native-calendar-picker';
import color from '../../utils/color';
import Heading from '../../Components/Heading';
import { ScrollView } from 'react-native';
import GlobalApi from '../../utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import moment from 'moment';

const BookingModal = ({businessId, hideModal}) => {
    const navigation = useNavigation();
    const [timeList, setTimeList] = useState([]);
    const [selectedTime, setSelectedTime] = useState()
    const [selectedDate, setSelectedDate] = useState()
    const [note, setNote] = useState();

    const {user} = useUser();

    useEffect(()=> {
     getTime();
    },[])

    const getTime = () => {
        const timelist = [];
        for (let i = 8; i <=12; i++) {
            timelist.push({
                time: i+':00 AM'
            })
            timelist.push({
                time: i+':30 AM'
            })
        }
            
        for (let i = 1; i <=7; i++) {
            timelist.push({
                time: i+':00 PM'
            })
            timelist.push({
                time: i+':30 PM'
            })
        }

        setTimeList(timelist);
    }

    const createNewBooking = async() => {
        if(!selectedDate || !selectedTime  ) {

            ToastAndroid.show('Please select Date and Time', ToastAndroid.LONG)

            return ;
        }
        const data = {
            userName: user?.fullName,
            userEmail: user?.emailAddresses,
            date: moment(selectedDate).format('DD-MMM-yyyy') ,
            time: selectedTime,
            note: note,
            businessid: businessId

        }
        GlobalApi.CreateBooking(data).then((res) => {
            console.log(res);
            ToastAndroid.show('Booking created successfully! ', ToastAndroid.LONG);
            hideModal()
        })
    }

  return (
    <ScrollView>
    <KeyboardAvoidingView style={{padding: 20}}>
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row', gap: 10, marginBottom: 20}} onPress={() => hideModal()}>
          <Ionicons name="arrow-back" size={30} color="black" />
          <Text style={{fontSize: 25}}>Booking</Text>
        </TouchableOpacity>

    <Heading title={'Select Date'}/>
      <View  style={styles.calendarContainer}>
        <CalendarPicker 
         onDateChange={setSelectedDate}
         width={300}
         minDate={Date.now()}
         todayBackgroundColor={color.Black}
         todayTextStyle={{color: color.White}}
         selectedDayColor={color.Primary}
         selectedDayTextColor={color.White}
        />
      </View>

      {/* TIme Select Section  */}

      <View style={{marginTop: 20}}>
        <Heading title={'Select timeslot'}/>
        <FlatList
         data={timeList}
         horizontal={true}
         showsHorizontalScrollIndicator={false}
         renderItem={({item, index}) => (
            <TouchableOpacity style={{marginLeft: 10}} onPress={() => setSelectedTime(item.time)}>
                <Text  style={[ selectedTime === item.time?  styles.slectedTime : styles.unSelectedTime]}>{item.time}</Text>
            </TouchableOpacity>
         )}
        />
      </View>

      {/* Note Section  */}

      <View style={{padding: 20}}>
        <Heading title={'Write a note or Suggestions'}/>
        <TextInput placeholder='Note' style={styles.noteTextArea} numberOfLines={4} multiline={true} 
            onChange={(text)=> setNote(text)}
        />
      </View>

      {/* Confimation Button */}

      <TouchableOpacity style={{marginTop: 15}} 
        onPress={() => createNewBooking()}>
        <Text style={styles.confirmButton}>Confirm Booking</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
   </ScrollView>
  )
}

export default BookingModal

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: color.Primary_Light,
    padding: 20,
    borderRadius: 15,
  },
  slectedTime:{
    padding: 8,
    borderWidth: 1,
    borderColor: color.Primary,
    borderRadius: 99,
    paddingHorizontal: 18,
    backgroundColor: color.Primary,
    color: color.White
  },
  unSelectedTime: {
    padding: 8,
    borderWidth: 1,
    borderColor: color.Primary,
    borderRadius: 99,
    paddingHorizontal: 18,
    color: color.Primary
  },
  noteTextArea: {
    borderWidth: 1,
    borderRadius: 15,
    textAlignVertical: 'top',
    padding: 20,
    fontSize: 16,
    borderColor: color.Primary_Light
  },
  confirmButton: {
    textAlign: 'center',
    fontSize: 17,
    backgroundColor: color.Primary,
    color: color.White,
    padding: 10,
    borderRadius: 99,
    elevation: 2,
  }
})