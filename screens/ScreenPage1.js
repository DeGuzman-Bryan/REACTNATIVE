import { StyleSheet, Text, View ,Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
export default function ScreenPage1() {
        const navigation = useNavigation();

return (
    <View style ={styles.container}>
        <Text style={styles.text}>This is Page 1</Text>
        <Button title="Go to Page 2" onPress={() => navigation.navigate('Page2')} />

    </View>
);
  }

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },

    text:{
        fontSize:20,
        marginBottom:20,
    },
});
