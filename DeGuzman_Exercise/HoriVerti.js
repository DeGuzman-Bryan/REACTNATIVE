import React from 'react';
import { ScrollView, Image, StyleSheet, View } from 'react-native';

const MixedImageScroll = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
      
      {/* Horizontal Scroll Row with 5 Images */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://superheroetc.wordpress.com/wp-content/uploads/2018/04/upgrade.png' }} style={styles.image} />
        </View>
        
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://superheroetc.wordpress.com/wp-content/uploads/2018/10/humungousaur.png' }} style={styles.image} />
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

      {/* Vertical Scroll Column with Images */}
      <View style={styles.verticalScroll}>
        <Image source={{ uri: 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891761-004charmander.png' }} style={styles.image} />
      </View>

      <View style={styles.verticalScroll}>
        <Image source={{ uri: 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891764-007squirtle.png' }} style={styles.image} />
      </View>

      <View style={styles.verticalScroll}>
        <Image source={{ uri: 'https://www.giantbomb.com/a/uploads/scale_small/13/135472/1891758-001bulbasaur.png' }} style={styles.image} />
      </View>

      <View style={styles.verticalScroll}>
        <Image source={{ uri: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1379727070i/3130.png' }} style={styles.image} />
      </View>

      <View style={styles.verticalScroll}>
        <Image source={{ uri: 'https://images.saymedia-content.com/.image/t_share/MTc0NDU1NjM4NjA1Mzc1MTEw/cutest-pokemon-of-all-time.png' }} style={styles.image} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    paddingVertical: 20,
  },
  horizontalScroll: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  verticalScroll: {
    alignItems: 'center',
  },
  imageContainer: {
    marginHorizontal: 5,
  },
  image: {
    width: 200, 
    height: 200, 
    borderRadius: 15,
    margin: 5,
  },
});

export default MixedImageScroll;
