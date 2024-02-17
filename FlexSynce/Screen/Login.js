import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, SafeAreaView, TouchableOpacity, View, Alert,  TextInput, Image, ActivityIndicator, } from 'react-native';




export default function Login({ navigation } ) {   
  const [User, setUser] = useState('Username');
  const [Password, setPassword] = useState('Password');
  
  const [text, setText] = useState('');

  const saveText = async () => {
    try {
      await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      // Optionally handle success
    } catch (error) {
      console.error('Error saving text:', error);
    }
  };
  
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Username"  
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={Password}
        placeholder="Password"
        secureTextEntry
      />

      
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>
      </View>



      <TouchableOpacity style={styles.button} onPress={saveText} >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10,}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', fontSize: 16,}}>OR</Text>
          </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Guest')}>
        <Text style={styles.buttonText}>Guest</Text>
      </TouchableOpacity>

      <View style={styles.Seperate}>
        <Text>Don't have a account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  signUpText: {
    color: '#007bff',
    left: 2,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgot_button: {
    height: 30,
    marginBottom: 10,
    left: 100,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  Seperate: {
    flexDirection: "row",
    justifyContent: 'space-between',
  }
});
