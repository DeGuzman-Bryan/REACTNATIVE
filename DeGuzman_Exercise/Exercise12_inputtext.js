import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const handleSubmit = () => {
    if(name === '' || age === ''){
      Alert.alert('No input!', 'You are required to input your name and age')
    } else {
      Alert.alert('Success', 'Hi, ' + name + '! Your age is ' + age)
    }
  }

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <TextInput
      placeholder="Enter your name"
      value={name}
      onChangeText={setName}
      style={styles.input}
      >
      </TextInput>

      <TextInput
      placeholder="Enter your age"
      value={age}
      onChangeText={setAge}
      style={styles.input}
      >
      </TextInput>

      <TouchableOpacity 
      style={styles.button}
      onPress={handleSubmit}>
        <Text style={styles.button_text}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  button_text: {
    color:'white',
    fontSize:15,
    fontWeight:'bold'
  },
  input: {
    borderWidth:1,
    padding:10,
    width:'90%',
    borderRadius:15,
    marginTop:10
  },
  button: {
    width:'90%',
    height:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'salmon',
    borderRadius:15,
    marginTop:20
  }
})
