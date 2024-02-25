import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';


export default function Shoulder ({ navigation }) {
  return (
    <View style={styles.container}>
    <ScrollView  showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}> Lateral raise </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}> Overhead press </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}> Front raise </Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}> Dumbbell lateral raise  </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}> Reverse fly </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}> Standing row </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}> Shoulder Flex </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}> Arnold press </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}> Serratus Push-ups </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Push press </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
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