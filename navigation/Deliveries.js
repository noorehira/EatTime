import React from 'react';
import { View, Button, Text, Image } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import  OrderDetails from '../screens/OrderDetail';
import DeliveryDetail from '../screens/DeliveryDetail';
const Stack = createStackNavigator();


    const Screens=()=>{
      return(
    <Stack.Navigator 
    screenOptions={{
        headerShown:false,
    }}>
          <Stack.Screen
            name="Home1"
            component={HomeScreen}
        Options={{
                headerShown:false,
            }}
           />
            <Stack.Screen
            name="Order Details"
            component={OrderDetails}
            Options={{
                headerShown:false,
            }}
           />
             <Stack.Screen
            name="Delivery Details"
            component={DeliveryDetail}
            Options={{
                headerShown:false,
            }}
           />

          </Stack.Navigator>
      );
    }

export default Screens;