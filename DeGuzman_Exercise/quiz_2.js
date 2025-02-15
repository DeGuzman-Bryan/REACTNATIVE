import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Avatar from './assets/IMG_6314.jpeg'

const App = () => {
  return (
    <>
      <View style={styles.container}>
  <View style={{ alignItems: 'center' }}> 
    <Image source={Avatar} style={styles.avatar} />
    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
      Bryan De Guzman
    </Text>
<Text style={{ fontSize: 16, color: 'black', marginTop: 5 }}>
      Computer Science student
    </Text>

    <Text style={{ fontSize: 16, color: 'black', marginTop: 5, fontStyle: 'italic' }}>
      You have to believe in yourself. That's the secret
    </Text>
    
    <Text style={{ fontSize: 13, color: 'black', marginTop: 5 }}>
      Email: s2023100116@firstasia.edu.ph
    </Text>

     <Text style={{ fontSize: 13, color: 'black', marginBottom: 10 }}>
      Phone: +639764700709
    </Text>

      </View>
</View>

      <ScrollView>
        <View>
           <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Personal Information
    </Text>

    <Text style={{ fontSize: 13, color: 'black', marginTop: 5, paddingLeft: 20  }}>
  Date of Birth: November 25, 2004
    </Text>
    <Text style={{ fontSize: 13, color: 'black', marginTop: 5, paddingLeft: 20  }}>
Address: Sto Tomas Batangas
    </Text>

    <Text style={{ fontSize: 13, color: 'black', marginTop: 5, paddingLeft: 20  }}>
Gender: Male
    </Text>

  <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10, paddingLeft: 20  }}>
Gender: Male
    </Text>
        </View>

        <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
        Education
        </Text>

        <Text style={{ fontSize: 13, color: 'black', marginTop: 5, paddingLeft: 20  }}>
Bachelor of Science in Computer Science
    </Text>

    <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
FAITH COLLEGES - Graduated: 2027
    </Text>

<Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
        Skills
        </Text>

         <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Java, React Node js
    </Text>


<Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
        Work Experience
        </Text>

<Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
SOFTWARE DEVELOPER | ABC | JAN 2024 - Present
    </Text>

<Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Developed and Maintain web applications, collaborated with Daniel Padilla and Kaila Estrada  
  </Text>

  
<Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Achievements
        </Text>

        <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Best in Programming 2023
  </Text>

  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Projects
        </Text>

         <Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
Gym Appointment System
  </Text>

  <Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
Computer Parts Inventory
  </Text>

  <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Swagger CRUD 2025
  </Text>

  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Volunteer Experience
        </Text>

<Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Barangay San Miguel Database holder 
 </Text>

<Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Hobbies & Interest
        </Text>

<Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
Singing
  </Text>

  <Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
Gaming
  </Text>
<Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Programming
 </Text>

 <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Language Spoken
        </Text>
<Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
Mandarin
  </Text>
  <Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
English
  </Text>

  <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Tagalog
 </Text>

 <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Certification
        </Text>

  <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Upper Secondary Education Diploma
 </Text>

<Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Social Media Links
        </Text>

        <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
GitHub, Facebook, Twitter </Text>
 
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
    backgroundColor: '#4F7942',
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

import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Avatar from './assets/IMG_6314.jpeg'

const App = () => {
  return (
    <>
      <View style={styles.container}>
  <View style={{ alignItems: 'center' }}> 
    <Image source={Avatar} style={styles.avatar} />
    <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
      Bryan De Guzman
    </Text>
<Text style={{ fontSize: 16, color: 'black', marginTop: 5 }}>
      Computer Science student
    </Text>

    <Text style={{ fontSize: 16, color: 'black', marginTop: 5, fontStyle: 'italic' }}>
      You have to believe in yourself. That's the secret
    </Text>
    
    <Text style={{ fontSize: 13, color: 'black', marginTop: 5 }}>
      Email: s2023100116@firstasia.edu.ph
    </Text>

     <Text style={{ fontSize: 13, color: 'black', marginBottom: 10 }}>
      Phone: +639764700709
    </Text>

      </View>
</View>

      <ScrollView>
        <View>
           <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Personal Information
    </Text>

    <Text style={{ fontSize: 13, color: 'black', marginTop: 5, paddingLeft: 20  }}>
  Date of Birth: November 25, 2004
    </Text>
    <Text style={{ fontSize: 13, color: 'black', marginTop: 5, paddingLeft: 20  }}>
Address: Sto Tomas Batangas
    </Text>

    <Text style={{ fontSize: 13, color: 'black', marginTop: 5, paddingLeft: 20  }}>
Gender: Male
    </Text>

  <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10, paddingLeft: 20  }}>
Gender: Male
    </Text>
        </View>

        <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
        Education
        </Text>

        <Text style={{ fontSize: 13, color: 'black', marginTop: 5, paddingLeft: 20  }}>
Bachelor of Science in Computer Science
    </Text>

    <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
FAITH COLLEGES - Graduated: 2027
    </Text>

<Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
        Skills
        </Text>

         <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Java, React Node js
    </Text>


<Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
        Work Experience
        </Text>

<Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
SOFTWARE DEVELOPER | ABC | JAN 2024 - Present
    </Text>

<Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Developed and Maintain web applications, collaborated with Daniel Padilla and Kaila Estrada  
  </Text>

  
<Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Achievements
        </Text>

        <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Best in Programming 2023
  </Text>

  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Projects
        </Text>

         <Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
Gym Appointment System
  </Text>

  <Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
Computer Parts Inventory
  </Text>

  <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Swagger CRUD 2025
  </Text>

  <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Volunteer Experience
        </Text>

<Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Barangay San Miguel Database holder 
 </Text>

<Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Hobbies & Interest
        </Text>

<Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
Singing
  </Text>

  <Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
Gaming
  </Text>
<Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Programming
 </Text>

 <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Language Spoken
        </Text>
<Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
Mandarin
  </Text>
  <Text style={{ fontSize: 13, color: 'black', marginTop: 5,  paddingLeft: 20  }}>
English
  </Text>

  <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Tagalog
 </Text>

 <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Certification
        </Text>

  <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
Upper Secondary Education Diploma
 </Text>

<Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginTop: 5 }}>
Social Media Links
        </Text>

        <Text style={{ fontSize: 13, color: 'black', marginTop: 5, marginBottom: 10,  paddingLeft: 20  }}>
GitHub, Facebook, Twitter </Text>
 
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
    backgroundColor: '#4F7942',
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


