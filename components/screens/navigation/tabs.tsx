/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Wallet from '../Home/Wallet';
import Home from '../Home/HomeScreen';
import Menu from '../Home/menuScreen';
import Carts from '../Home/carts';
import Entypo from 'react-native-vector-icons/Entypo';
// import ShoppingCartIcon from '../../../containers/shoppingCartIcon';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle:{
          borderTopRightRadius: 25,
          borderTopLeftRadius: 25,
          backgroundColor: '#fff',
          height: 65,
        position: 'absolute',
          },
        }}>
      <Tab.Screen name="Home" component={Home}
      options={{
        tabBarIcon:({focused}) => (

        <View>
            <Entypo
          name="home"
          size={22}
          color= {focused ?  '#FAAF08' : '#1118'} />
          {/* <Text style={styles.tabText}> Home </Text> */}
        </View>

        ),
      }}/>

      <Tab.Screen name="Menu" component={Menu}
      options={{
        tabBarIcon:({focused}) => (

          <View>
            <Entypo
          name="menu"
          size={22}
          color= {focused ?  '#FAAF08' : '#1118'} />
          {/* <Text style={styles.tabText}> Menu </Text> */}
          </View>

        ),
      }}/>

<Tab.Screen name="Carts" component={Carts}
      options={{
        tabBarIcon:({focused}) => (

          <View>
            {/* <View style={{ position: 'absolute', height: 30, width: 30,
              borderRadius: 15,
              backgroundColor: 'rgba(95,197,123,0.8)',
              right: 15,
              bottom: 15,
              alignItems: 'center',  justifyContent:'center'}}> */}
              {/* <Text>0</Text> */}
              {/* <ShoppingCartIcon /> */}
            {/* </View> */}
           <Entypo
          name="shopping-cart"
          size={22}
          color= {focused ?  '#FAAF08' : '#1118'} />
          {/* <Text style={styles.tabText}> Cart </Text> */}
          </View>

        ),
      }}/>

      <Tab.Screen name="Wallet" component={Wallet}
      options={{
        tabBarIcon:({focused}) => (

          <View>
            <Entypo
          name="wallet"
          size={22}
          color= {focused ?  '#FAAF08' : '#1118'}
          style={{}} />
          {/* <Text style={styles.tabText}> Wallet </Text> */}
          </View>

        ),
      }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
