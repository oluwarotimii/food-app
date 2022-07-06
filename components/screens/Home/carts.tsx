/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/Octicons';
import CartsSelector from '../selector/quantitySelctorCarts';
import MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import menuData from '../../data/menuData';


const {height, width} = Dimensions.get('window');
const Carts = ({navigation}) => {
  // const Product = () => {
  //   navigation.navigate('Product');
  // };
  
  return (
    <View >
      <ScrollView>
        {/*

      </View> */}

        <View style={styles.parentContainer}>
          <View style={styles.container}>
            <View style={styles.headerView}>
              <Text style={styles.headerText}>
                {' '}
                Carts <MCI name="cart-variant" size={25} />
              </Text>
            </View>
            <View style={styles.bellView}>
              <TouchableOpacity style={styles.bell}>
                <FontAwesome name="bell" color="#1118" size={25} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subtotal}>
            <Text> Sub-total : addition if all the prices in the carts</Text>
          </View>
              {/* {menuData.map((item) =>{
                return ( */}
                  <View style={styles.cartsView}
                  // key={item.id}
                  >
            <TouchableOpacity>
              <View style={styles.profileDetails}>
                <Image
                  style={styles.profileImage}
                  // source={}
                />
                <View style={styles.profileText}>
                  <Text style={styles.profile}> Item Title</Text>
                  <Text> # Item Price</Text>

                  <View style={styles.selector}>
                    <TouchableOpacity style={styles.cancelBtn}>
                      <Text style={{
                        color: '#fff',
                      }}>Remove </Text>
                    </TouchableOpacity>
                    <CartsSelector />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
                {/* );
               })}        */}
        </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
  //   borderWidth: 1,
  //   borderColor: 'red',
  //   width: '100%',
  //   height: 80,
  //   flexDirection: 'row',
  //   //justifyContent: 'space-between',
  //   //flex: 2,
    marginBottom: 120,
    // backgroundColor: '#d1d1d1',
    
  },
  container: {
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //flex: 2,
    //marginTop: 20,
    // backgroundColor: '#fff',
  },
  bellView: {
    marginLeft: 250,
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    //flex: 2,
    marginTop: 20,
  },
  bell: {
    padding: 5,
    margin: 5,
    //   borderWidth: 1,
    //   borderColor: 'red',
  },
  // orderName: {
  //   fontSize: 34,
  //   alignSelf: 'center',
  //},
  headerView: {
    marginLeft: 20,
    // borderWidth: 1,
    // borderColor: 'red',
    height: 50,
    marginTop: 30,
  },
  headerText: {
    fontSize: 18,
  },
  cartsView: {
    padding: 5,
    elevation: 20,
  },
  subtotal: {
    height: 50,
    width: width,
  },
  profileDetails: {
    // flex: 1,
    // elevation: 20,
    flexDirection: 'row',
    height: 150,
    borderWidth: 3,
    borderColor: '#FAAF08',
    borderRadius: 15,
    marginHorizontal: 5,
    //marginVertical: 5,
  },
  profileImage: {
    marginTop: 10,
    marginLeft: 8,
    width: '25%',
    height: 80,
    backgroundColor: 'red',
    borderRadius: 15,
    resizeMode: 'contain',
    // borderWidth: 1,
    // borderColor: 'red',
    //flexDirection: 'row',
    // backgroundColor: '#FA4032',
  },
  profileText: {
    padding: '4%',
    //flexDirection: 'row',
  },
  profile: {
    padding: 4,
  },
  selector: {
    marginTop: '-15%',
    marginLeft: '-18%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    height: '50%',
    //borderWidth: 2,
  },
  cancelBtn: {
    marginTop: '55%',
    alignItems: 'center',
    paddingTop: '5%',
    // borderWidth: 2,
    marginLeft: '-40%',
    marginRight: '60%',
    width: '80%',
    height: '70%',
    backgroundColor: '#FA4032',
    elevation: 2,
    borderRadius: 5,
  },
  });

export default Carts;
