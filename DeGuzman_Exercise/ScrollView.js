import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

const HorizontalImageScroll = () => {
  return (
    <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
      <View style={styles.imageContainer}>
  <Image source={{ uri: 'https://superheroetc.wordpress.com/wp-content/uploads/2018/04/upgrade.png' }} style={styles.image} />
</View>

<View style={styles.imageContainer}>
  <Image source={{ uri: 'https://superheroetc.wordpress.com/wp-content/uploads/2018/10/humungousaur.png?w=584' }} style={styles.image} />
</View>

<View style={styles.imageContainer}>
  <Image source={{ uri: 'https://p7.hiclipart.com/preview/82/284/994/ben-10-omniverse-chibi-drawing-art-ben-10.jpg' }} style={styles.image} />
</View>

<View style={styles.imageContainer}>
  <Image source={{ uri: 'https://superheroetc.wordpress.com/wp-content/uploads/2018/04/four-arms.png' }} style={styles.image} />
</View>

<View style={styles.imageContainer}>
  <Image source={{ uri: 'https://i.pinimg.com/originals/af/b5/4f/afb54f9c1209c13636185ad42267d5be.png' }} style={styles.image} />
</View>


      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 50,
  },
  imageContainer: {
    marginRight: 20, 
    alignItems: 'center', 
  },
  image: {
    width: 250, 
    height: 250, 
    borderRadius: 20, 
  },
});


export default HorizontalImageScroll;