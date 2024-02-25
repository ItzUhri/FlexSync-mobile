import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';


export default function Abs ({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView  showsVerticalScrollIndicator={false}>
<TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
  <Text style={styles.buttonText}> Crunch </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
  <Text style={styles.buttonText}> Plank </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
  <Text style={styles.buttonText}> Dead bug </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
  <Text style={styles.buttonText}> Pulse ups</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
  <Text style={styles.buttonText}> Toe Touch Crunch </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
  <Text style={styles.buttonText}> Mountain Climbers </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
  <Text style={styles.buttonText}> Cable crunch </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
  <Text style={styles.buttonText}> Seated scissor kick </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
  <Text style={styles.buttonText}> Reverse crunch </Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
  <Text style={styles.buttonText}> Side Plank </Text>
</TouchableOpacity>
</ScrollView>
    </View>
  );
};
  
    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    height: 110,
    width: 250,
    borderWidth: 1,
    borderColor: 'grey',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});