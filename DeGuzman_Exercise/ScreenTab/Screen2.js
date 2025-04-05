import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, Modal, Button, TouchableWithoutFeedback, StyleSheet } from 'react-native';

export default function App() {
  const foodItems = [
    { id: 1, name: 'Nike Dunk Low', price: 5895, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyIwsLdunMI4XrvTkgs9TtHjicwa1PJdq5dA&s' },
    { id: 2, name: 'Nike Dunk Low SE', price: 4069, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/7f9d51b3-b45d-4083-a633-5cc68ecf789b/NIKE+DUNK+LOW+SE.png' },
    { id: 3, name: 'Nike SB Dunk Low Pro', price: 5919, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/5e5e9811-9098-466c-a54a-360e0031539b/NIKE+SB+DUNK+LOW+PRO+PRM.png' },
    { id: 4, name: 'Nike Vaporfly 3', price: 11995, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/fae635e8-6645-40a1-b686-a0326f6fcfd5/ZOOMX+VAPORFLY+NEXT%25+3+FK+PRM.png' },
    { id: 5, name: 'Nike Air Force 1 \'07', price: 4339, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png' },
    { id: 6, name: 'Nike Air Max Plus OG', price: 9395, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/f52752b1-4e7b-473b-8843-2583119fdde6/NIKE+AIR+MAX+PLUS+OG.png' },
    { id: 7, name: 'Nike Dunk Low LX', price: 4899, image: 'https://static.nike.com/a/images/t_default/cd01d091-6f03-4339-8b7e-441a4c9071c8/W+NIKE+DUNK+LOW+LX.png' },
    { id: 8, name: 'Nike Pegasus Premium', price: 11995, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/90a79d88-09f4-4a2a-918c-8c68da454754/W+NIKE+PEGASUS+PREMIUM.png' },
    { id: 9, name: 'Nike Pegasus Premium', price: 9395, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/83ebf9a2-547e-493a-ab33-144b46e0ed78/ZOOM+FLY+6+EK.png' },
    { id: 10, name: 'Air Jordan 1 Retro Low', price: 9095, image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bacae128-2859-451a-b906-4ded15a0865b/AIR+JORDAN+1+RETRO+LOW+OG.png' },
    { id: 11, name: 'Nike Air Max 90 LV8 SE', price: 6019, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/d6e3b738-314a-499f-868f-9625acde7015/AIR+MAX+90+LV8+SE.png' },
    { id: 12, name: 'Kobe IX Elite High Protro', price: 12495, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/e3794a58-1583-44c0-be6c-c352df69c0d2/KOBE+IX+ELITE+HIGH+PROTRO.png' },
    { id: 13, name: 'Ja 2 EP', price: 6895, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO62snd5QS0rfKNEjR50P-V8GG3nJJ1ipL5g&s' },
    { id: 14, name: 'Nike Rival Fly 4', price: 3849, image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/5cb2ff9f-b2cd-4d38-beb0-d12fe0e37598/NIKE+AIR+ZOOM+RIVAL+FLY+4.png' },
  ];

  const [quantities, setQuantities] = useState({});
  const [modalVisible, setModalVisible] = useState(false); // Modal visibility state

  const handleQuantityChange = (id, value) => {
    const quantity = value === '' ? 0 : parseInt(value);
    setQuantities({ ...quantities, [id]: isNaN(quantity) ? 0 : quantity });
  };

  const totalPrice = foodItems.reduce((sum, item) => sum + (quantities[item.id] || 0) * item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SHOES</Text>
      <ScrollView>
        {foodItems.map((food) => (
          <View key={food.id} style={styles.foodItem}>
            <Image source={{ uri: food.image }} style={styles.image} />
            <View>
              <Text style={styles.foodName}>{food.name} - ₱{food.price}</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                placeholder="Qty"
                onChangeText={(value) => handleQuantityChange(food.id, value)}
                value={quantities[food.id] ? String(quantities[food.id]) : ''}
              />
            </View>
          </View>
        ))}
        <Button title="Show Overlay" onPress={() => setModalVisible(true)} /> {/* Button to trigger modal */}
      </ScrollView>

      <Text style={styles.total}>Total: ₱{totalPrice}</Text>

      {/* Modal for showing overlay */}
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
                source={{ uri: 'https://miro.medium.com/v2/resize:fit:720/format:webp/0*LJ4Aq45zmj8yf8UD.png' }}
                style={styles.overlayImage}
              />
              <Button title="Close" onPress={() => setModalVisible(false)} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#61FC5E', // Changed background color to #61FC5E
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#4CAF50', // Green header color
  },
  foodItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#ffffff', // White background for each food item
    padding: 10,
    borderRadius: 8,
    elevation: 2, // Slight shadow effect
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  foodName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333', // Dark grey color for food name
  },
  input: {
    borderWidth: 1,
    width: 50,
    textAlign: 'center',
    marginTop: 5,
    borderRadius: 5,
    borderColor: '#4CAF50', // Green border for input
    paddingVertical: 5,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color: '#4CAF50', // Green color for total price
  },
  overlayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for overlay
  },
  overlayFrame: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  overlayImage: {
    width: 250,
    height: 250,
    marginBottom: 10,
    borderRadius: 10,
  },
});
