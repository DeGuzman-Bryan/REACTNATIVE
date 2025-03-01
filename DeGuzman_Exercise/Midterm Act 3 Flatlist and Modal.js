import React, { useState } from 'react';
import { FlatList, Text, Modal, Button, View, StyleSheet } from 'react-native';

const data = ['Item 1', 'Item 2', 'Item 3'];

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  // Function to handle item press
  const handlePress = (item) => {
    setSelectedItem(item); // Store the selected item
    setModalVisible(true);  // Show the modal
  };

  return (
    <View style={styles.container}>
      {/* FlatList displaying items */}
      <FlatList
        data={data}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={styles.item} onPress={() => handlePress(item)}>
            {item}
          </Text>
        )}
        style={styles.list}  // Apply custom list styling
      />

      {/* Modal to display selected item */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>You selected: {selectedItem}</Text>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,  // Space at the top of the screen
    paddingHorizontal: 15,
    alignItems: 'flex-start',  
  },
  list: {
    width: '100%',  
  },
  item: {
    fontSize: 18,
    padding: 10,
    backgroundColor: '#ddd',
    marginBottom: 10,
    borderRadius: 5,
    width: '100%',  
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#fff',
  },
});

export default App;