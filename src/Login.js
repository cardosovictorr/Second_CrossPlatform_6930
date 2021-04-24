// 3 : Login Screen Component:

//import * as React from 'react';
import React, { useState } from 'react';
import { Button, View, SafeAreaView, Text, TextInput, StyleSheet, Alert } from 'react-native';

export default function Login({ navigation }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  function showLogin() {
    return (
      <SafeAreaView>
        <Text>User Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          text={userName}
        />

        <Text>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setPassword}
          text={password}
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


      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/*
          Using the navigation to rout to Home screen
      */}
        <Button
          title="Login"
          onPress={() => navigation.navigate('HomeScreen')}
        // validateUser()
        />
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
})