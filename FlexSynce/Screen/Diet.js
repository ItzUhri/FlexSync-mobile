import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

export default function Diet({ navigation}) {
  return (
    <View style={styles.container}>

       <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Vegetarian')}>
          <Text> Vegetarian Diet </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Workout')}>
          <Text> High-Protien Diet</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Workout')}>
          <Text> Low-Carb Diet</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Workout')}>
          <Text> Mediterranean diet</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Workout')}>
          <Text> Intermittent fasting </Text>
        </TouchableOpacity>

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
  
});
