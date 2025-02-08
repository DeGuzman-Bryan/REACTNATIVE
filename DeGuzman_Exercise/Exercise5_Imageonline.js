import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const App = () => {
return (
<View style={styles.container}>
<Text style={styles.text}>LEGEND BAYOLA</Text>
<Image
source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsBhDVGUX2TbSwldvjt8gu1zrXIR453PjgA&s.png' }}
style={styles.image}
/>
</View>
);
};

export default App;

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center', // Vertically centers the content
alignItems: 'center', // Horizontally centers the content
flexDirection: 'column', // Ensures content is in a column
padding: 20, // Padding around the content for better spacing
},
text: {
fontSize: 24, // Larger font for better visibility
marginBottom: 20, // Space between text and image
textAlign: 'center', // Centers the text inside the container
},
image: {
width: 300, // Set image width
height: 300, // Set image height
borderRadius: 10, // Optional: rounded corners for image
},
});
    

