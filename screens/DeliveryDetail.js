import React from 'react';
import {View, Button, Text, Image, SafeAreaView} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';
import OrderItem from '../components/OrderItem';


const data=[
  {
    image: require('../img/fries.png'),
    quantity: 10,
    foodItem: 'French Fries',
    amount: '$100',
  },
  {
    image: require('../img/fries.png'),
    quantity: 10,
    foodItem: 'French Fries',
    amount: '$100',
  },
  {
    image: require('../img/fries.png'),
    quantity: 10,
    foodItem: 'French Fries',
    amount: '$100',
  }
]


const DeliveryDetail = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor:'#fff',
      
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop:10,
          marginHorizontal:50,
        }}>
        <TouchableOpacity
          style={{
            marginRight: 60,
            marginLeft: 25,
          }}
          onPress={() => navigation.navigate('Home1')}>
          <Image
            source={require('../img/back_button.png')}
            style={{height: 45, width: 82, borderRadius: 40, marginTop: 0}}
          />
        </TouchableOpacity>
        <Text
          style={{
            color: '#1C1C1C',
            fontSize: 20,
            fontFamily: 'Inter',
          }}>
          Delivery Details
        </Text>

        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{
              width: 25,
              height: 16,
              marginLeft: 99,
              marginRight: 35,
            }}
            source={require('../img/bar.png')}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            padding: 3,
            borderTopWidth: 1,
            borderTopColor: '#ccc',
          }}></View>
        <View
          style={{
            overflow: 'hidden',
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 15,
          }}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Roboto-Medium',
              fontSize: 17,
              fontWeight: 'bold',
              marginRight: 59,
              marginLeft: 11,
            }}>
            Order ID: 30erfdfddf
          </Text>

          <Text
            style={{
              color: '#333',
              fontFamily: 'Inter',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            12:45 PM | 02-May-2022
          </Text>
        </View>

        <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>

        <Text
          style={{
            color: '#333',
            fontFamily: 'Inter',
            fontWeight: 'bold',
            fontSize: 17,
            marginTop: 17,
            marginLeft: 11,
          }}>
          Customer
        </Text>
        <SafeAreaView
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            marginTop: 10,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 5,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../img/deliveryman.jpg')}
              style={{height: 57, width: 57, borderRadius: 40, marginTop: 0}}
            />
            <Text
              style={{
                marginLeft: 21,
                color: '#1C1C1C',
                fontSize: 19,
                fontFamily: 'Roboto',
                fontWeight: 'bold',
                width: 117,
                height: 26,
              }}>
              Noor E hira
            </Text>
          </View>
          <Image
            style={{
              width: 25,
              height: 25,
              marginLeft: 165,
              marginRight: 10,
            }}
            source={require('../img/Rectangle.png')}
          />
        </SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',

            marginTop: 10,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Inter',
              fontWeight: 'bold',
              fontSize: 16,
              marginLeft: -55,
            }}>
            Shipping Address:{' '}

          </Text>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Inter',

              fontSize: 15,
            }}>
            215, Street 11, Pakistan Town
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 15,
            marginTop: 5,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Inter',
              fontWeight: 'bold',
              fontSize: 16,
              marginLeft: -75,
            }}>
            Billing Address:{' '}
          </Text>
          <Text
            style={{
              color: '#333',
              fontFamily: 'Inter',

              fontSize: 15,
            }}>
            215, Street 11, Pakistan Town
          </Text>
        </View>
    
        <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>
        {data.map((item, index) => {
        return (
          <OrderItem 
          key={index}
          image={item.image}
          amount={item.amount}
          quantity={item.quantity}
          foodItem={item.foodItem}

          />

        )}
      )}


        <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical:13,
            paddingHorizontal:13,
            }}>
              <Text
                 style={{
                    fontFamily: 'Inter',
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                    fontSize:13
                  }}>
                Items price:
              </Text>
            <Text
              style={{
                fontFamily: 'Inter',
                color: '#0000FF'
              }}>
            Rs. 3000
            </Text>
           </View>
           <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop:-8,
            paddingHorizontal:13,
            }}>
              <Text
                 style={{
                    fontFamily: 'Inter',
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                    fontSize:13
                  }}>
                Shipping price:
              </Text>
            <Text
              style={{
                fontFamily: 'Inter',
             
                fontsize: 10,
                color: '#0000FF'
              }}>
            Rs. 180
            </Text>
           </View>
           <View style={{borderTopWidth: 0.25, borderTopColor: '#ccc',marginTop:10}}></View>
           <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop:15,
            marginBottom:11,
            paddingHorizontal:13,
            }}>
              <Text
                 style={{
                    fontFamily: 'Inter',
                    fontWeight: 'bold',
                    color: '#1C1C1C',
                    fontSize:13
                  }}>
                Total price:
              </Text>
            <Text
              style={{
                fontFamily: 'Inter',
               
                fontsize: 10,
                color: '#0000FF'
              }}>
            Rs. 3180
            </Text>
           </View>

          

      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliveryDetail;
