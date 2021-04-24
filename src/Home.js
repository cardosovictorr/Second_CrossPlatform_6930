// 4 : Home Screen Component:

import * as React from 'react';
import { View, StyleSheet, StatusBar, Platform, Text, SafeAreaView, Button, Image, TouchableOpacity } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Separator = () => (
  <View style={styles.separator} />
);

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default function Home({ navigation }) {

  //const { landscape } = useDeviceOrientation();

  const AppButton = ({ onPress, title, size, backgroundColor }) => (
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
    </TouchableOpacity>
  );

  //() => navigation.navigate('MilkScreen')

  return (

    <SafeAreaView style={styles.container}>
      <AppButton title="MILK" backgroundColor="#B3D6F0" onPress={() => navigation.navigate('MilkScreen')} />
      <AppButton title="CROISSANT" backgroundColor="#FFEDC0" onPress={() => navigation.navigate('CroissantScreen')} />
      <AppButton title="COFFEE" backgroundColor="#DBCAC6" onPress={() => navigation.navigate('CoffeeScreen')} />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: "center",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //backgroundColor: "purple",
    // marginHorizontal: 16,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: 150,
    width: 300
  },

  appButtonText: {
    fontSize: 18,
    color: "#585858",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
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