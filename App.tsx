/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Text} from 'react-native';
import {StatusBar, useColorScheme} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import Login from './components/screens/intro/loginScreen';
import ProductScreen from './components/screens/product/productScreen';
import Notification from './components/screens/notifications/notification';
import Intro from './components/screens/intro/introPage';
import Carts from './components/screens/Home/carts';
import SignUp from './components/screens/intro/SignupPage';
import Tabs from './components/screens/navigation/tabs';
import ModeOfPayment from './components/screens/wallet/payement';
// import Slider from './components/screens/carousel/slider';
import Profile from './components/screens/Home/profile';
import Menu from './components/screens/Home/menuScreen';
// import Carts from './components/screens/Home/carts';
// import DishMenu from './components/screens/Home/dish-menu';
// import Menu from './components/screens/Home/menu';
import Carousel from './components/screens/carousel/carousel';
import HomeScreen from './components/screens/Home/HomeScreen';
import ShoppingCart from './ShoppingCart';
// import {Provider} from 'react-redux';
// import store from './store';

const Stack = createStackNavigator();
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // <View>
    //   <ShoptpingCar />
    // </View>
    <NavigationContainer style={backgroundStyle}>
      <StatusBar backgroundColor="#FAAF08" />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Welcome" component={Intro} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Log in" component={Login} /> */}
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Menu" component={Menu} />
        {/* <Stack.Screen name="Cart" component={Carts} /> */}
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Pay" component={ModeOfPayment} />
        <Stack.Screen name="notification" component={Notification} />
        {/* <Stack.Screen  name="Home Screen" component={Tabs}/> */}

        {/* <Stack.Screen  name="Cart" component={Carts}/>
        <Stack.Screen  name="Product" component={ProductScreen}/>
       <Stack.Screen  name="Delivery" component={Delivery}/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
