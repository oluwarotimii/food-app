/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  // Dimensions,
} from 'react-native';
import QuantitySelector from '../selector/quantitySelect';
import Icon from 'react-native-vector-icons/Ionicons';

// const {height, width} = Dimensions.get('window');

const ProductScreen = ({ navigation, route}) => {
  // const [selectedOption, setSelectedOption] = useState();
  return (
    <View>
      {/* {product.map(item => { */}
      {/* return ( */}
      <ScrollView
        style={styles.container}
        // key={item.id}
      >
        <TouchableOpacity>
          <View style={styles.goback}>
            <Icon name="chevron-back" size={30} />
          </View>
        </TouchableOpacity>
        <View
          style={styles.title}
          //key={item.id}
        >
          <Text style={styles.titleText}>{route.params.dish}</Text>
        </View>
        {/* {product.map(() => {
              return ( */}
        <View style={styles.slider}>
          {/* <Image
            style={styles.images}
            source={require('../images')}
          /> */}
          {/* <SliderBox
                images={item.images}
                //sliderBoxHeight={400}
                /> */}
        </View>
        {/* //   );
            // })} */}
        <View style={styles.priceView}>
          <View style={styles.price}>
            <Text style={styles.priceText}> ${/* {item.price} */}</Text>
          </View>
          <View style={styles.avail}>
            <Text style={styles.availText}> Available Today</Text>
          </View>
        </View>

        <View style={styles.productDetails}>
          {/* {product.map(() => { */}
            {/* return ( */}
              <View style={styles.ingredients}>
                <Text style={styles.ingredientsText}>{ route.params.dish.title} </Text>
              </View>
            {/* ); */}
          {/* // })} */}

          {/* options  */}
          <View style={styles.options}>
            {/* soup options */}
            {/* {product.map((items) => { */}
            {/* return ( */}
            <View style={styles.soupOptions}>
              <View>
                {/* <SectionedMultiSelect
                    items={items}
                    IconRenderer={Options}
                    uniqueKey="id"
                    subKey="soup"
                    selectText="Choose some things..."
                    //showDropDowns={true}
                    //readOnlyHeadings={true}
                    onSelectedItemsChange={setSelectedOption}
                    selectedItems={selectedOption}
        /> */}
              </View>

              {/* <Text style={styles.soup}> Soup </Text>
                  <Text style={styles.soup}> Soup </Text>
                  <Text style={styles.soup}> Soup </Text> */}
            </View>
            {/* ); */}
            {/* })} */}
            {/* meat options */}
            <View style={styles.meatOptions}>
              {/* <Text style={styles.meat}> Meat </Text>
                  <Text style={styles.meat}> Meat </Text>
                  <Text style={styles.meat}> Meat </Text>
                  <Text style={styles.meat}> Meat </Text> */}
            </View>
          </View>
        </View>
        <View style={styles.QuantitySelector}>
          <QuantitySelector />
        </View>

        {/* buttons */}
        <View style={styles.Buttons}>
          <TouchableOpacity style={styles.addToCartBtn}>
            <Text style={styles.cartText}> Add to Cart</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buyNowBtn}>
            <Text style={styles.text}> Buy now</Text>
          </TouchableOpacity>
        </View>
        {/* <View></View> */}
      </ScrollView>
      {/* ); */}
      {/* })} */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    broderColor: 'red',
    //margin: 2,
  },
  goback: {
    marginTop: 15,
    marginLeft: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#d1d1d1',
    //backgroundColor: '#d1d1d1',
    elevation: 1,
    width: '10%',
  },
  title: {
    marginTop: 10,
    //   borderWidth: 2,
    //   borderColor: 'red',
    height: 40,
    paddingTop: 5,
    marginLeft: 10,
  },
  titleText: {
    fontSize: 28,
    //   borderWidth: 2,
    //   borderColor: 'red',
  },
  slider: {
    // borderWidth: 1,
    // broderColor: 'red',
    marginTop: 5,
    width: '100%',
    //marginLeft: 5,
    //marginRight: 5,
    height: 220,
    marginBottom: 20,
  },
  images: {
    marginTop: 5,
    width: '96%',
    height: 180,
    alignSelf: 'center',
  },
  priceView: {
    // borderWidth: 1,
    // borderColor: 'red',
    //marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    alignContent: 'center',
    paddingBottom: 30,
    marginBottom: 5,
  },
  price: {
    backgroundColor: '#FA4032',
    //borderWidth: 2,
    //borderColor: '#FAAF08',
    paddingVertical: 5,
    marginLeft: 5,
    marginTop: 10,
    width: '40%',
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
  },
  priceText: {
    fontSize: 20,
    color: '#fff',
  },
  avail: {
    borderWidth: 2,
    borderColor: '#FAAF08',
    paddingVertical: 5,
    marginRight: 15,
    marginTop: 10,
    width: '40%',
    height: 40,
    alignItems: 'center',
  },
  QuantitySelector: {
    margin: 10,
  },
  availText: {
    fontSize: 18,
  },
  productDetails: {
    padding: 10,
    // borderWidth: 1,
    // borderColor: 'red',
    width: '100%',
    height: 200,
  },
  addToCartBtn: {
    borderWidth: 3,
    // broderColor: 'red',
    //borderRadius: 1,
    borderColor: '#FA4032',
    width: 110,
    height: 35,
    paddingTop: 5,
    elevation: 0,
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  buyNowBtn: {
    // borderWidth: 1,
    // broderColor: 'red',
    borderRadius: 10,
    backgroundColor: '#FAAF08',
    width: 100,
    height: 35,
    paddingTop: 5,
    elevation: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    marginTop: 15,
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  cartText: {
    color: '#010211',
    backgroundColor: '#fff',
    fontSize: 16,
  },
  Buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
    //marginTop: 5,
    //borderWidth: 2,
  },
  soupOptions: {
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
  },
  meatOptions: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: 'row',
    fontSize: 12,
  },
  soup: {
    fontSize: 16,
    //fontWeight: 'bold',
  },
  options: {
    flexDirection: 'row',
    marginTop: 15,
    marginBottom: 30,
    // borderWidth: 2,
    width: '100%',
    height: 150,
  },
  ingredients: {
    marginTop: 10,
    borderTopWidth: 4,
    borderTopColor: '#FAAF08',
    borderBottomWidth: 4,
    borderBottomColor: '#FAAF08',
    paddingVertical: 20,
    height: 200,
  },
  ingredientsText: {
    fontSize: 18,
    padding: 2,
  },
});
export default ProductScreen;
