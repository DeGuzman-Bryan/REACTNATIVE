import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.textNike}>NIKE</Text>
        <Text style={styles.title}>Nike Shoes</Text>
        <Text style={styles.subtitle}>Men’s shoes</Text>
        <View style={styles.gradientBox} />

        {/* Fixed Image cropping with resizeMode */}
        <Image
          style={styles.image}
          source={{ uri: 'https://images.pexels.com/photos/15336566/pexels-photo-15336566.jpeg?cs=srgb&dl=pexels-wesleydavi-15336566.jpg&fm=jpg' }}
          resizeMode="contain" // Prevent cropping
        />

        {/* TouchableOpacity for Continue button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Page2')}>
            <Text style={styles.button}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90CAF9', // Set background color
  },
  innerContainer: {
    width: 430,
    height: 932,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 30,
    justifyContent: 'center',  // This centers the inner container content vertically
    alignItems: 'center', // This centers the content horizontally
  },
  textNike: {
    left: 357,
    top: 249,
    position: 'absolute',
    transform: [{ rotate: '90deg' }],
    transformOrigin: 'top left',
    color: 'rgba(164.69, 255, 191.55, 0.50)',
    fontSize: 170,
    fontFamily: 'Open Sans',
    fontStyle: 'italic',
    fontWeight: '800',
    wordWrap: 'break-word',
  },
  title: {
    left: 139,
    top: 112,
    position: 'absolute',
    color: 'black',
    fontSize: 26,
    fontFamily: 'Poppins',
    fontWeight: '600',
    wordWrap: 'break-word',
  },
  subtitle: {
    left: 162,
    top: 151,
    position: 'absolute',
    color: '#404040',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: '500',
    wordWrap: 'break-word',
  },
  gradientBox: {
    width: 338.90,
    height: 367.44,
    left: 72,
    top: 231,
    position: 'absolute',
    backgroundColor: 'linear-gradient(144deg, #90CAF9 0%, #90A1F9 100%)',
    boxShadow: '0px 13px 19px -5px rgba(0, 0, 0, 0.15)',
    borderRadius: 15,
  },
  image: {
    width: 300, // Adjust width as needed
    height: 200, // Adjust height as needed
    alignSelf: 'center', // Center horizontally
    marginTop: 50, // Adjust the distance from the top as needed
    position: 'absolute',
    top: 350, // Center vertically within the container
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100, // Adjust this value to move the button up or down
    left: 40,
    right: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5F4FF',
    paddingVertical: 15, // Vertical padding
    paddingHorizontal: 40, // Horizontal padding
    borderRadius: 56, // Rounded corners
    boxShadow: '0px 9px 17px -6px rgba(0, 0, 0, 0.18)', // Shadow for depth
  },
  button: {
    color: 'black',
    fontSize: 26,
    fontFamily: 'Poppins',
    fontWeight: '600',
    textAlign: 'center', // Center text
  },
});
