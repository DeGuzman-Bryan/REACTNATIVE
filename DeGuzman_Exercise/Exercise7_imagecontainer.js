import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Avatar from'./assets/Wally.jpg'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={Avatar} style={styles.avatar_pic} />
        <Text>WALLY BAYOLA</Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '98%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'salmon',
  },
  avatar_pic: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});