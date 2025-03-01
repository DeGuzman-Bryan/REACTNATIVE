import React, { useState, useEffect } from 'react';
import {
 View, Text, Image, FlatList, TextInput, Button, TouchableOpacity,
 Modal, ActivityIndicator, ScrollView, StatusBar, StyleSheet
} from 'react-native';

const ProfileScreen = () => {
 const [tasks, setTasks] = useState([]);  // Task List
 const [newTask, setNewTask] = useState('');  // New Task Input
 const [loading, setLoading] = useState(true);  // Loading Indicator
 const [selectedTask, setSelectedTask] = useState(null);  // Modal State
 const [modalVisible, setModalVisible] = useState(false);

 // Simulate fetching tasks
 useEffect(() => {
   setTimeout(() => {
     setTasks([
       { id: '1', title: 'Buy groceries' },
       { id: '2', title: 'Complete React Native tutorial' },
       { id: '3', title: 'Exercise for 30 mins' },
     ]);
     setLoading(false);
   }, 2000);
 }, []);

 // Add New Task
 const addTask = () => {
   if (newTask.trim() !== '') {
     setTasks([...tasks, { id: Date.now().toString(), title: newTask }]);
     setNewTask('');
   }
 };

 // Delete Task Function
 const deleteTask = (taskId) => {
   setTasks(tasks.filter(task => task.id !== taskId));
   setModalVisible(false);
 };

 return (
   <View style={styles.container}>
     {/* Status Bar */}
     <StatusBar style="dark-content" />

     {/* Profile Section */}
     <View style={styles.profileCard}>
       <Image
  source={{ uri: 'https://randomuser.me/api/portraits/men/45.jpg' }}
  style={styles.profileImage}
/>
       <Text style={styles.profileName}>John Doe</Text>
       <Text style={styles.profileBio}>React Native Developer</Text>
     </View>

     {/* To-Do List */}
     <ScrollView style={styles.scrollContainer}>
       <Text style={styles.sectionTitle}>To-Do List</Text>

       {/* Show Loading Indicator */}
       {loading ? (
         <ActivityIndicator size="large" color="blue" />
       ) : (
         <FlatList
           data={tasks}
           keyExtractor={(item) => item.id}
           renderItem={({ item }) => (
             <TouchableOpacity
               style={styles.taskItem}
               onPress={() => { setSelectedTask(item); setModalVisible(true); }}
             >
               <Text style={styles.taskText}>{item.title}</Text>
               <Button title="Delete" color="red" onPress={() => deleteTask(item.id)} />
             </TouchableOpacity>
           )}
         />
       )}

       {/* Add Task Input */}
       <TextInput
         placeholder="Enter new task"
         style={styles.input}
         value={newTask}
         onChangeText={(text) => setNewTask(text)}
       />
       <Button title="Add Task" onPress={addTask} />
     </ScrollView>

     {/* Task Modal */}
     <Modal visible={modalVisible} transparent={true}>
       <View style={styles.modalContainer}>
         <View style={styles.modalContent}>
           <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
             {selectedTask?.title}
           </Text>
           <Text style={{ marginVertical: 10 }}>Task Details Here...</Text>
           <Button title="Delete Task" color="red" onPress={() => deleteTask(selectedTask.id)} />
           <Button title="Close" onPress={() => setModalVisible(false)} />
         </View>
       </View>
     </Modal>
   </View>
 );
};

// Styles
const styles = StyleSheet.create({
 container: { flex: 1, backgroundColor: '#f4f4f4', padding: 20 },
 profileCard: { alignItems: 'center', marginBottom: 20 },
 profileImage: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
 profileName: { fontSize: 20, fontWeight: 'bold' },
 profileBio: { color: 'gray' },
 scrollContainer: { flex: 1 },
 sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
 taskItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, backgroundColor: '#fff', marginVertical: 5, borderRadius: 8 },
 taskText: { fontSize: 16 },
 input: { borderWidth: 1, padding: 10, borderRadius: 5, marginVertical: 10 },
 modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
 modalContent: { backgroundColor: 'white', padding: 20, borderRadius: 10, width: 300, alignItems: 'center' }
});

export default ProfileScreen;