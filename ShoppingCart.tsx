/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, ShadowPropTypesIOS} from 'react-native';
import {StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './components/screens/Home/menuScreen';
import ProductScreen from './components/screens/product/productScreen';
// import ShoppingCartIcon from './containers/shoppingCartIcon';
import Tabs from './components/screens/navigation/tabs';

// export default function ShoppingCart() {
//   return (
//     <View>
//       <AppStackNavigator />
//     </View>
//   );
// }

// const AppStackNavigator = createStackNavigator(
//   {
//     dishes: Menu,
//     Products: ProductScreen,
//   },
//   {
//     navigationOPtions: {
//       headerTitle: 'Shopping App',
//       headerRight: <ShoppingCartIcon />,
//     },
//   },
// );

const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
const Navi = createStackNavigator();
const ShoppingCart = () => {
    return (
        <NavigationContainer style={backgroundStyle}>
        <StatusBar backgroundColor="#FAAF08" />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
             <Stack.Screen  name="Home Screen" component={Tabs}/>
            <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Menu" component={Menu} />
              <Stack.Screen  name="Product" component={ProductScreen}/>
         </Stack.Navigator>
       </NavigationContainer>
    );
}
export default ShoppingCart;
