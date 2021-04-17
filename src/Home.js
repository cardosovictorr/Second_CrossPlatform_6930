// 4 : Home Screen Component:

import * as React from 'react';
import { Button, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/*
          Using the navigation to rout to Login screen
      */}
      <Button
        title="Logout!!"
        onPress={() => navigation.navigate('LoginScreen')}
      />
    </View>
  );
}