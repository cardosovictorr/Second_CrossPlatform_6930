// 2 : Signup Screen Component:

//import * as React from 'react';
import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet, SafeAreaView, Alert, Image } from 'react-native';

export default function SignupScreen({ navigation }) {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  function showSignup() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.child}>
          <Image
            source={require('../images/thumbnail_Croissant.png')}
            style={styles.imageLogo}
          >
          </Image>
        </View>
        <View style={styles.child}>
          <TextInput
            style={styles.input}
            placeholder="New User Name"
            onChangeText={setUserName}
            text={userName}
          />
          <TextInput
            style={styles.input}
            placeholder="New Email"
            onChangeText={setEmail}
            text={email}
          />

          <TextInput
            style={styles.input}
            placeholder="New Password"
            secureTextEntry={true}
            onChangeText={setPassword}
            text={password}
          />
        </View>


        <Button title="Signup" onPress={() => {
          //1 call a service to store the data
          callCreateUser()

        }} />
      </SafeAreaView>
    )
  }

  async function callCreateUser() {
    const reply = await fetch('http://192.168.1.12:5000/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": userName,
        "email": email,
        "password": password
      })
    });
    if (reply.status == 200) {
      navigation.navigate('LoginScreen')
    } else {
      Alert.alert("Error", "Error while creating an user")
      console.log()
    }
  }

  return (
    <>
      {showSignup()}


    </>
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

  input: {
    height: 40,
    width: 300,
    margin: 30,
    backgroundColor: "#fff",
    borderRadius: 15,
    elevation: 6,
  },
  imageLogo: {
    width: 150,
    height: 150,
    alignItems: "center"
  },
  child: {

  }
})