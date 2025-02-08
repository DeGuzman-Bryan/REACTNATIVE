import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Avatar from './assets/Wally.jpg'
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign'; 

const App = () => {
  return (
    <>
      {/* Card with Avatar and Name */}
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={Avatar} style={styles.avatar} />
          <View style={{ width: 10 }} />
          <Text style={{ fontSize: 18, color: 'white', marginTop: 10 }}>
            Juanita Dela Cruz
          </Text>
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView>
        {/* Container with Border and Padding */}
        <View style={{ borderWidth: 5, borderColor: 'red', borderRadius: 10, margin: 10 }}>
          {/* Icon */}
          <Fontisto name="email" size={24} color="black" />          {/* Justified Text */}
          <Text style={styles.justifiedText}>
            {'\t\t'}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            {'\n\n'}
            {/* Adds space between sections */}
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            Curabitur pretium tincidunt lacus.
            Nulla gravida orci a odio.
            Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
            Integer in mauris eu nibh euismod gravida.
            Duis ac tellus et risus vulputate vehicula.
            Donec lobortis risus a elit euismod, vel pretium nisl ornare.
            Integer euismod, urna eu tincidunt congue, elit eros gravida nisl, id euismod ligula nulla et ligula.
            {'\n\n'}
            {/* Adds space between sections */}
            <Text style={styles.bullets}>• Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            {'\n\n'}
            {/* Adds space between sections */}
            <Text style={styles.circleBullet}>○ Ut enim ad minim veniam, quis nostrud exercitation ullamco .</Text>
            {'\n\n'}
            {/* Adds space between sections */}
            <Text style={styles.squareBullet}>▪ Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu .</Text>
            {'\n\n'}
            {/* Adds space between sections */}
          </Text>
        </View>

        {/* Horizontal Separator */}
        <View style={{ height: 2, width: '100%', backgroundColor: 'gray' }} />

        {/* Action Buttons */}
        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 5 }}>
          <FontAwesome5 name="user-tie" size={28} color="green" />
          <Text style={{ fontSize: 16, margin: 4, fontWeight: 'bold' }}>Edit Profile</Text>
          <View style={{ width: '50%' }} />
          <FontAwesome5 name="chevron-right" size={30} color="gray" />
        </View>

        {/* Horizontal Separator */}
        <View style={{ height: 2, width: '100%', backgroundColor: 'gray' }} />




        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 5 }}>
        <FontAwesome6 name="wrench" size={24} color="black" />        
          <Text style={{ fontSize: 16, margin: 4, fontWeight: 'bold' }}>Settings</Text>
          <View style={{ width: '50%' }} />
          <FontAwesome5 name="chevron-right" size={30} color="gray" />
        </View>

        <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 5 }}>
        <AntDesign name="poweroff" size={24} color="black" />
        <Text style={{ fontSize: 16, margin: 4, fontWeight: 'bold' }}>Power off</Text>
          <View style={{ width: '50%' }} />
          <FontAwesome5 name="chevron-right" size={30} color="gray" />
        </View>



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
});
