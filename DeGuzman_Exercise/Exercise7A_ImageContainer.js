import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Avatar from './assets/Wally.jpg'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={Avatar} style={styles.avatar} />
        <View style={{ width: 10 }} />
        <Text style={{ fontSize: 18, color: 'white', marginTop: 10 }}>
          Juanita Dela Cruz
        </Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderBottomLeftRadius: 15,
    borderBottomEndRadius: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 50,
  },
});
