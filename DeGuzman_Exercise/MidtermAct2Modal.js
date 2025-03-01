import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  const [visible, setVisible] = useState(false); // State to control modal visibility

  return (
    <View style={styles.container}>
      {/* Button to show the modal */}
      <Button title="Show Modal" onPress={() => setVisible(true)} />
     
      {/* Modal Component */}
      <Modal
        visible={visible}
        animationType="slide"  // Adds a slide-in effect
        transparent={true}     // Makes the background semi-transparent
        onRequestClose={() => setVisible(false)}  // Android-specific, to handle back press
      >
        {/* Modal content */}
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>This is a Modal</Text>
           
            {/* Button to close the modal */}
            <Button title="Close" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Styling for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default App;