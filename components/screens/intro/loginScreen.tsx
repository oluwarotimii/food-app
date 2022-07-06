/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
// import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState,useEffect } from 'react';
import {View, Text, TextInput, Dimensions, ScrollView, Button, TouchableOpacity} from 'react-native';
import { auth } from '../../../firebase';


const {height, width} = Dimensions.get('window');

const Login = ({navigation}) => {
  // const loginSet = () => {
  //   navigation.navigate('Home');
  // };
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   const logInHandler = () => {
    auth
    .signInWithEmailAndPassword(email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with', user.email);
    })
    .catch(error => alert(error.messages))
  }

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(user => {
      if (user) {
      navigation.navigate('Home');
    }
  });

    return unSubscribe;
    }, []);
  return (
    <ScrollView style={{
      backgroundColor: '#fff',
    }}>
      <View
    style={{
      backgroundColor: '#fff',
      width: width,
      height: height,
      //alignItems:'center',
      paddingHorizontal: 20,
    }}>
      <View
      style={{
          // borderColor: 'red',
          // borderWidth: 2,
          width: '60%',
          //margin: 20,
          //alignSelf: 'center',
          //justifyContent: 'center',
          marginTop: 150,
          height: '15%',
      }}>
        <Text>Proceed with your </Text>
        <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
        }}> Login</Text>
      </View>

      <View
      style={{
        marginTop: 30,
        //marginLeft: 20,
      }}>
        <Text>Username</Text>
        <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text) }
        style={{
            borderBottomColor: '#d1d1d1',
            borderBottomWidth: 2,
        }}
      />
       <Text>Password</Text>
        <TextInput
        placeholder="Email"
        value={password}
        onChangeText={text => setPassword(text) }
        style={{
            borderBottomColor: '#d1d1d1',
            borderBottomWidth: 2,
            //marginTop: 10,
            //alignSelf: 'center',
            //justifyContent: 'center',
        }}
        secureTextEntry
      />
      <View
      style={{
        marginTop:15,
          }}>
        <Button
        title= "Login"
        color="#FA4032"
        onPress={logInHandler} />

        <TouchableOpacity
        style={{
          justifyContent: 'center',
          marginTop: 15,
          alignSelf: 'center',
        }}>
          <Text>Forgot Password?</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};
export default Login;
