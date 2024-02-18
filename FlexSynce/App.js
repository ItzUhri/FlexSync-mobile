import { StatusBar } from 'expo-status-bar';
<<<<<<< Updated upstream
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
=======
import React from 'react';
import { StyleSheet, Button, Text, SafeAreaView, TouchableOpacity,View, Alert,  TextInput, Image, ActivityIndicator} from 'react-native';
import Login from "./Screen/Login";
import HomeScreen from "./Screen/HomeScreen";
import Register from "./Screen/Register";
import Diet from "./Screen/Diet";
import Workout from "./Screen/Workout";
import Profile from "./Screen/Profile";
import ForgotPass from "./Screen/ForgotPass";
import Guest from './Screen/Guest';
import Testing from './Screen/Testing';
import Gym from './Screen/Gym'
import Calisthenics from './Screen/Calisthenics '
import Abs from "./Screen/Abs";
import Arm from "./Screen/Arm";
import Chest from "./Screen/Chest";
import Leg from "./Screen/Leg";
import Shoulder from "./Screen/Shoulder";


const Stack =createNativeStackNavigator();
export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}   
      initialRouteName='Welcome'>
        <Stack.Screen HeaderMode='none' name="Login" component={Login}/>
        <Stack.Screen HeaderMode='none' name="Register" component={Register}/>
        <Stack.Screen HeaderMode='none' name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen HeaderMode='none' name="Diet" component={Diet}/>
        <Stack.Screen HeaderMode='none' name="Workout" component={Workout}/>
        <Stack.Screen HeaderMode='none' name="Profile" component={Profile}/>
        <Stack.Screen HeaderMode='none' name="ForgotPass" component={ForgotPass}/>
        <Stack.Screen HeaderMode='none' name="Guest" component={Guest}/>
        <Stack.Screen HeaderMode='none' name="Testing" component={Testing}/>
        <Stack.Screen HeaderMode='none' name="Gym" component={Gym}/>
        <Stack.Screen HeaderMode='none' name="Calisthenics" component={Calisthenics}/>
        <Stack.Screen HeaderMode='none' name="Arm" component={Arm}/>
        <Stack.Screen HeaderMode='none' name="Chest" component={Chest}/>
        <Stack.Screen HeaderMode='none' name="Shoulder" component={Shoulder}/>
        <Stack.Screen HeaderMode='none' name="Abs" component={Abs}/>
        <Stack.Screen HeaderMode='none' name="Leg" component={Leg}/>

      </Stack.Navigator>
    </NavigationContainer>
    
>>>>>>> Stashed changes
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
