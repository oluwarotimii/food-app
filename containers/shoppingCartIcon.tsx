/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Icon  from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

const ShoppingCartIcon = props => {
  return (
    <View>
      <View style={{ position: 'absolute', height: 30, width: 30,
              borderRadius: 15,
              backgroundColor: 'rgba(95,197,123,0.8)',
              right: 15,
              bottom: 15,
              alignItems: 'center',  justifyContent:'center'}}>
              <Text>0</Text>
        </View>
    </View>
  );
};
// const styles = StyleSheet.create({
//     container: {

//     },
// });
 const mapStateToProps = (state) => {
    return {
        cartItems: state
    }
 }
export default connect() (ShoppingCartIcon);
