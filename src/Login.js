// 3 : Login Screen Component:

import * as React from 'react';
import { Button, View } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/*
          Using the navigation to rout to Home screen
      */}
      <Button
        title="Existing User"
        onPress={() => navigation.navigate('HomeScreen')}
      />
    </View>
  );
}