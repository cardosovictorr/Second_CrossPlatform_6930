// 2 : Signup Screen Component:

//import * as React from 'react';
import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet, SafeAreaView, Alert } from 'react-native';

export default function SignupScreen({ navigation }) {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  function showSignup() {
    return (
      <SafeAreaView>
        <Text>New User Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={setUserName}
          text={userName}
        />
        <Text>New Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          text={email}
        />
        <Text>New Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          onChangeText={setPassword}
          text={password}
        />
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/*
          Using the navigation to rout to Home screen
      */}

        <Button title="Signup" onPress={() => {
          //1 call a service to store the data
          callCreateUser()

          // fetch('http://192.168.1.12:5000/users', {
          //   method: 'POST',
          //   headers: {
          //     Accept: 'application/json',
          //     'Content-Type': 'application/json'
          //   },
          //   body: JSON.stringify({
          //     "name": userName,
          //     "email": email,
          //     "password": password
          //   })
          // })
        }} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    backgroundColor: "dodgerblue",
  },
})