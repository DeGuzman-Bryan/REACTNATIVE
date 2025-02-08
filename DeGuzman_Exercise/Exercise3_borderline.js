import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={mystyles.container}>
      <View style={mystyles.box1}> </View>
      <View style={mystyles.box2}> </View>
      <View style={mystyles.box3}> </View>
    </View>
  )
}

export default App

const mystyles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  box1:{
    backgroundColor:'green',
    width:'98%',
    height:'33.33%',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:5,
    borderColor:'yellow'
  },
  box2:{
    backgroundColor:'blue',
    width:'98%',
    height:'33.33%',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:5,
    borderColor:'red'
  },
  box3:{
    backgroundColor:'red',
    width:'98%',
    height:'33.33%',
    alignItems:'center',
    justifyContent:'center',
    borderWidth:5,
    borderColor:'salmon'
  },
})

