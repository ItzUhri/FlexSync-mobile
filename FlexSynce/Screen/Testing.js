import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Text, SafeAreaView, TouchableOpacity,View, Alert,  TextInput, Image, ActivityIndicator} from 'react-native';


function LoginTesting() {
    return (
        <View>
            <Text> Hello world</Text>
        </View>
    )
}

const Stack =createNativeStackNavigator();
export default function Testing() { 
  return (
    <NavigationContainer>  
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}   
      initialRouteName='Welcome'>
        <Stack.Screen HeaderMode='none' name="Login" component={LoginTesting}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

    