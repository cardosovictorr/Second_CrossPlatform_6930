// 3 : Login Screen Component:

//import * as React from 'react';
import React, { useState } from 'react';
import { Button, SafeAreaView, TextInput, StyleSheet, Image } from 'react-native';

export default function Login({ navigation }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  function showLogin() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../images/thumbnail_CoffeeBeans.png')}
          style={styles.imageLogo}
        >
        </Image>
        <TextInput
          style={styles.input}
          placeholder="User Name"
          onChangeText={setUserName}
          text={userName}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={setPassword}
          text={password}
        />

        <Button
          title="Login"
          onPress={() => navigation.navigate('HomeScreen')}
        // validateUser()
        />
      </SafeAreaView>
    )
  }

  // async function validateUser() {
  //   const reply = await fetch('http://192.168.1.12:5000/login', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       "name": userName,
  //       "password": password
  //     })
  //   });
  //   if (reply.status == 200) {
  //     navigation.navigate('HomeScreen')
  //   } else {
  //     Alert.alert("Error", "Invalid user")
  //     console.log()
  //   }
  // }

  return (

    <>
      {showLogin()}

    </>

  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 300,
    margin: 30,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 6,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: "center",
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#E9F9F2",
    // marginHorizontal: 16,
  },
  imageLogo: {
    width: 150,
    height: 150,
    alignItems: "center"
  },
})