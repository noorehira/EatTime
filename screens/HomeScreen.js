import { StyleSheet, Text, View, Image, ImageBackground, } from 'react-native';
import React  from 'react';
import { AuthContext } from '../navigation/AuthProvider';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import AvailableCard from '../components/AvailableCard';
import HistoryCard from '../components/HistoryCard';

import IonicIcon from 'react-native-vector-icons/Ionicons';
const Stack = createStackNavigator();

// 

const dataHistory = [
  {
    id: 1,
    address: '123 Main St, New York, NY 10001',
    date: 'Today at 12:30 PM',
  },
  {
    id: 1,
    address: '123 Main St, New York, NY 10001',
    date: 'Today at 12:30 PM',
  },
  {
    id: 1,
    address: '123 Main St, New York, NY 10001',
    date: 'Today at 12:30 PM',
  },
  {
    id: 1,
    address: '123 Main St, New York, NY 10001',
    date: 'Today at 12:30 PM',
  },
]
const data = [
  {
    id: '30erfdfddf',
    address: '215, street11, Pakistan Town',
  },
  {
    id: '30erfdfddf',
    address: '215, street11, Pakistan Town',
  },
  {
    id: '30erfdfddf',
    address: '215, street11, Pakistan Town',
  },
  {
    id: '30erfdfddf',
    address: '215, street11, Pakistan Town',
  },
];
const HomeScreen = ({ navigation }) => {
  const [shouldShow, setShouldShow] = React.useState(true);
  const [shouldShow2, setShouldShow2] = React.useState(false);

  return (


    <View style={{ flex: 1, backgroundColor: '#fff' }}>

      <SafeAreaView style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 15,

      }}>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginLeft: 11,
          marginBottom: 5,
        }}>

          <Image source={require('../img/deliveryman.jpg')}
            style={{ height: 57, width: 57, borderRadius: 40, marginTop: 0, }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ color: '#1C1C1C', fontSize: 19, fontFamily: 'Roboto', fontWeight: 'bold', width: 117, height: 26 }}>Noor E hira</Text>
            <Text style={{ color: '#1C1C1E', fontFamily: 'Roboto-Regular', width: 117, height: 18 }}>Deliveryman Panel</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.openDrawer()} >
          <Image style={{
           width: 25,
           height: 16,
            marginLeft: 175,
          }}
            source={require('../img/bar.png')}



          />
        </TouchableOpacity>


      </SafeAreaView>

      <ScrollView >



      <View style={{ flexDirection: 'row', marginTop: 15 }}>
        <TouchableOpacity style={{
          marginLeft: 39,
          marginRight: 65
        }}
          onPress={() => {


            setShouldShow2(false);
            setShouldShow(true);
          }

          }>
          <Text style={{
            color: '#333',
            fontFamily: 'Roboto-Medium',
            fontSize: 17,
            fontWeight: 'bold',
          }}>Deliveries Available</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShouldShow2(true);
            setShouldShow(false);
          }}
        >
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 17,
              fontWeight: 'bold'
            }}>Delivery History</Text>
        </TouchableOpacity>

      </View>
      
        {shouldShow ? (

<View style={{marginBottom:0,  marginTop: 15,}}>
         

{data.map((item, index) => {
  return (
    <View style={{marginBottom:0,  marginTop: 16,}} key={index}>

    <AvailableCard
      key={index}
      id={item.id}
      address={item.address}
      navigation={navigation}
    />
    </View>
  );
}
)}

</View>
           ) : null}
 {shouldShow2 ? (
         <View style={{marginBottom:0,  marginTop: 15,}}>
         
        {dataHistory.map((item, index) => {
          return (
            <View style={{marginBottom:0,  marginTop: 16,}}>
              <HistoryCard 
                key={index}
                id={item.id}
                address={item.address}
                date={item.date}
                navigation={navigation}
              />
            </View>
          );
        }
        )}




         </View>
        ) : null}

      </ScrollView>


    </View>

  );
};

export default HomeScreen;


