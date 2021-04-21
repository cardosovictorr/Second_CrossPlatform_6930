// 2 : Signup Screen Component:

import * as React from 'react';
import { Button, View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';

export default function SignupScreen({ navigation }) {

  function showSignup() {
    return (
      <SafeAreaView>
        <Text>New User Name</Text>
        <TextInput
          style={styles.input}
        />
        <Text>New Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
        />
      </SafeAreaView>
    )
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
  },
})