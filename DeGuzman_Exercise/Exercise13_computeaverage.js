import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [prelim, setPrelim] = useState('');
  const [finals, setFinals] = useState('');
  const [average, setAverage] = useState(null);

  const calculateAverage = () => {
    const prelimGrade = parseFloat(prelim);
    const finalGrade = parseFloat(finals);
    if (!isNaN(prelimGrade) && !isNaN(finalGrade)) {
      const avg = (prelimGrade + finalGrade) / 2;
      setAverage(avg.toFixed(2));
    } else {
      alert('Please enter valid grades.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Grade Average Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Prelim Grade"
        value={prelim}
        keyboardType="numeric"
        onChangeText={setPrelim}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Final Grade"
        value={finals}
        keyboardType="numeric"
        onChangeText={setFinals}
      />

      <Button title="Calculate Average" onPress={calculateAverage} />

      {average !== null && (
        <Text style={styles.result}>
          {name ? `${name}'s` : 'Your'} Average: {average}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});


