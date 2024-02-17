import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Button, Text, SafeAreaView, TouchableOpacity,View, Alert,  TextInput, Image, ActivityIndicator} from 'react-native';
import React from 'react';

export default function Register({navigation}) {

    const Submit = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    }

  
    const handleRegister = () => {
      // Handle registration logic here
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Password:', password);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Text>If you already have a account sign in</Text>
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
      marginBottom: 10,
    },
    button: {
      width: '100%',
      height: 50,
      backgroundColor: '#007bff',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });