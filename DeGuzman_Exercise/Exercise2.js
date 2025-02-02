import { StyleSheet, Text, View } from 'react-native' 
import React from 'react' 

const App = () => { 
  return ( 
    <View style={mystyles.container}> 
      <View style={mystyles.box1}> 
      </View> 
      <View style={mystyles.box2}>
      </View>
    </View> 
  ) 
} 

export default App 

const mystyles = StyleSheet.create({ 
  container:{ 
    flex:1, 
    justifyContent: 'flex-end', 
    alignItems:'center' 
  }, 
  box1:{ 
    backgroundColor:'darkcyan', 
    width:100, 
    height:100 
  },

  box2:{ 
    backgroundColor:'darkgoldenrod', 
    width:100, 
    height:100 
  }
  
}) 