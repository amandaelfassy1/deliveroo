import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

export default function Home({navigation}) {
  return (
    <View style={styles.center}>
      <Text>Welcome to our Home Screen</Text>
      <Pressable
        style={styles.press}
        onPress={() => navigation.navigate('Deliveroo')}>
        <Text>Deliveroo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  press: {
    backgroundColor: 'plum',
  },
});
