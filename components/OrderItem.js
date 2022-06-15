import React from 'react'
import {View, Button, Text, Image, SafeAreaView,StyleSheet} from 'react-native';



const OrderItem = ({image,quantity,foodItem,amount}) => {
  return (
    <View>
        
        <View style={{borderTopWidth: 1, borderTopColor: '#ccc'}}></View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical:10,
            paddingHorizontal:10,
          

          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{marginRight: 11}}
              size={24}
              source={image}
            />

            <View>
              <Text
                style={{
                  color: '#1C1C1C',
                  fontFamily: 'Inter',

                  fontSize: 14,
                }}>
                {foodItem}
              </Text>

              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: 'Inter',
                    color: '#1C1C1C',
                  }}>
                  Quantity:
                </Text>
                <Text style={{color: '#0000FF'}}>{quantity} </Text>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontFamily: 'Inter',
                fontWeight: 'bold',
                fontSize: 10,
                color: '#1C1C1C',
              }}>
              Amount
            </Text>
            <Text style={{color: '#0000FF'}}>{amount}</Text>
          </View>
        </View>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({})