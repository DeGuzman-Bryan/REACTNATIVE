import React, { useState } from 'react';
import { ScrollView, View, Image, StyleSheet, Modal, TouchableWithoutFeedback, Button } from 'react-native';

const images = [
  'https://i.pinimg.com/originals/af/b5/4f/afb54f9c1209c13636185ad42267d5be.png',
  'https://images.saymedia-content.com/.image/t_share/MTc0NDU1NjM4NjA1Mzc1MTEw/cutest-pokemon-of-all-time.png',
  'https://images.saymedia-content.com/.image/t_share/MTc0NDU1NjM4NjA1NDQwNjQ2/cutest-pokemon-of-all-time.png',
  'https://i.insider.com/57910997dd0895a56e8b4572?width=600&format=jpeg&auto=webp',
  'https://i.insider.com/57910997dd0895a56e8b4601?width=600&format=jpeg&auto=webp',
];

const ImageScrollWithOverlay = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {images.map((uri, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri }} style={styles.image} />
          </View>
        ))}
        <Button title="Show Overlay" onPress={() => setModalVisible(true)} />
      </ScrollView>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.overlayContainer}>
            <View style={styles.overlayFrame}>
              <Image
                source={{ uri: 'https://cdn.animenewsnetwork.com/thumbnails/max650x650/cms/daily-briefs/195278/new_pokemon_animated_series_friede_captain_pikachu_artwork.png.jpg' }}
                style={styles.overlayImage}
              />
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  scrollView: {
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayFrame: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  overlayImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default ImageScrollWithOverlay;
