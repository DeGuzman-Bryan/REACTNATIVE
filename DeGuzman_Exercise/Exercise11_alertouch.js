import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import Avatar from './assets/Wally.jpg'
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

const App = () => {
  const handleSignout =()=> {
    Alert.alert("Working", "Signing Out Success")
  }

  return (
    <>
      <View style={styles.container}>
        {/* Card Component */}
        <View style={{ flexDirection: 'row' }}>
          <Image source={Avatar} style={styles.avatar} />
          <View style={{ width: 10 }} />
          <Text style={{ fontSize: 18, color: 'white', marginTop: 10 }}>
            Juanita Dela Cruz
          </Text>
        </View>
        {/* Card Component */}
      </View>

      <ScrollView>
        <View style={{ borderWidth: 5, borderColor: 'red', borderRadius: 10, margin: 10 }}>
          {/* Make sure text is not empty */}
          <Fontisto name="email" size={32} color="green" style={{marginLeft:20}} /> 
          <Text style={styles.justifiedText}>
            
          {'\t\t'}Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  {'\n\n'} {/* Adds space between sections */}         
          
          </Text>
        </View>

        <View style={{ height: 2, width: '100%', backgroundColor: 'gray' }} />

        <View style={{flexDirection:'row',marginLeft:20,marginTop:5}}>
        <FontAwesome5 name="user-tie" size={28} color="green"  />
        <Text style={{fontSize:16, margin:4,fongWeight:'bold'}}>Edit Profile</Text>
        <View style={{width:'50%'}}/>
        <FontAwesome5 name="chevron-right" size={30} color='gray'/>
        </View> 

        <View style={{height:2, width:'100%',backgroundColor:'gray'}}/>

        <View style={{flexDirection:'row',marginLeft:20,marginTop:5}}>
        <FontAwesome name="gear" size={24} color="green" />
        <Text style={{fontSize:16, margin:4,fongWeight:'bold'}}>Setting       </Text>
        <View style={{width:'50%'}}/>
        <FontAwesome5 name="chevron-right" size={30} color='gray'/>
        </View>

        <View style={{height:2, width:'100%',backgroundColor:'gray'}}/>

        

        <TouchableOpacity 
          
          style={{flexDirection:'row',marginLeft:20,marginTop:5}}
            onPress={handleSignout}
        >
        <AntDesign name="poweroff" size={24} color="green" />
        <Text style={{fontSize:16, margin:4,fongWeight:'bold'}}>End</Text>
        <View style={{width:'50%'}}/>
        <FontAwesome5 name="chevron-right" size={30} color='gray' />
        </TouchableOpacity>

        <View style={{height:2, width:'100%',backgroundColor:'gray'}}/>

      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderBottomLeftRadius: 15,
    borderBottomEndRadius: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  justifiedText: {
    textAlign: 'justify', // Justify the text
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
})
