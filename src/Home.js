// 4 : Home Screen Component:

import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
//import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
//import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

// const Separator = () => (
//   <View style={styles.separator} />
// );

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function Home({ navigation }) {

  //const { landscape } = useDeviceOrientation();

  //button component for the home page!!
  //I can overide the color, onPress function, size of text and the backgorund colour

  const MilkButton = ({ onPress, title, size, backgroundColor }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        backgroundColor && { backgroundColor }
      ]}
    >
      <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
        {title}
      </Text>
      <Image
        source={require('../images/milk.png')}
        style={styles.ImageIconStyle}
      >
      </Image>
    </TouchableOpacity>
  );

  const CroissantButton = ({ onPress, title, size, backgroundColor }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        backgroundColor && { backgroundColor }
      ]}
    >
      <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
        {title}
      </Text>
      <Image
        source={require('../images/thumbnail_Croissant.png')}
        style={styles.ImageCroissantStyle}
      >
      </Image>
    </TouchableOpacity>
  );
  const CoffeeButton = ({ onPress, title, size, backgroundColor }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.appButtonContainer,
        backgroundColor && { backgroundColor }
      ]}
    >
      <Text style={[styles.appButtonText, size === "sm" && { fontSize: 14 }]}>
        {title}
      </Text>
      <Image
        source={require('../images/thumbnail_CoffeeBeans.png')}
        style={styles.ImageCoffeeStyle}
      >
      </Image>
    </TouchableOpacity>
  );

  //() => navigation.navigate('MilkScreen')

  return (

    <SafeAreaView style={styles.container}>
      <MilkButton title="MILK" backgroundColor="#B3D6F0" onPress={() => navigation.navigate('MilkScreen')} />
      <CroissantButton title="CROISSANT" backgroundColor="#FFEDC0" onPress={() => navigation.navigate('CroissantScreen')} />
      <CoffeeButton title="COFFEE BEANS" backgroundColor="#DBCAC6" onPress={() => navigation.navigate('CoffeeScreen')} />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: "center",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#E9F9F2",
    // marginHorizontal: 16,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 150,
    width: 300,
    alignItems: "center"
  },

  appButtonText: {
    fontSize: 18,
    color: "#585858",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },

  ImageIconStyle: {
    width: 80,
    height: 80,
  },

  ImageCroissantStyle: {
    width: 110,
    height: 110,
  },

  ImageCoffeeStyle: {
    width: 110,
    height: 110,
  }
  // title: {
  //   textAlign: 'center',
  //   marginVertical: 8,
  // },
  // fixToText: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  // },
  // separator: {
  //   marginVertical: 8,
  //   borderBottomColor: '#737373',
  //   borderBottomWidth: StyleSheet.hairlineWidth,
  // },
});