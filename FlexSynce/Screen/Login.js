<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
=======

>>>>>>> Stashed changes
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Button, Text, SafeAreaView, TouchableOpacity, View, Alert,  TextInput, Image, ActivityIndicator, ImageBase, Animated, Easing} from 'react-native';


export default function Login({ navigation } ) {   
<<<<<<< Updated upstream
  const [User, setUser] = useState('Username');
  const [Password, setPassword] = useState('Password');
  
  
=======
  const [User, setUser] = useState('');
  const [Password, setPassword] = useState('');

  const saveData= async () => {
    const url ="";
    let result = await fetch("https://flexsync-api.onrender.com/api/account/signup",{
      method: "GET",
      headers: '',

    }
    )
  }
>>>>>>> Stashed changes
  return (
    <View style={styles.container}>
      <Image 
      source={require('../assets/Image/Logo.png')}
      style={{width: 280, height: 280}}
      />
      <Text style={styles.title}>Login</Text>
      <TextInput
<<<<<<< Updated upstream
        style={styles.input}
        onChangeText={setUser}
        value={User}
        placeholder="Username"  
        autoCapitalize="none"
=======
        style = {styles.input}
        color = "white"
        onChangeText={setUser}
        value={User}
        placeholder="Username" 
        placeholderTextColor="rgba(255,255,255,0.5)" 
>>>>>>> Stashed changes
      />
      <TextInput
        style = {styles.input}
        color = "white"
        onChangeText={setPassword}
        value={Password}
        placeholder="Password"
        placeholderTextColor="rgba(255,255,255,0.5)" 
        secureTextEntry = {true}
      />

      
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity>
      </View>



      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HomeScreen')} >
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
    backgroundColor: 'silver',
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
    backgroundColor: 'black',
    opacity: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgot_button: {
    height: 30,
    marginBottom: 1,
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
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======

>>>>>>> Stashed changes
