<<<<<<< Updated upstream
=======
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Button,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  Image,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";

export default function Register({ navigation }) {
  const [selected, setSelected] = React.useState("");

  const data = [
    { value: 1, label: "male" },
    { value: 2, label: "female" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = async () => {
    const account = {
      username: username,
      password: password,
      age: age,
      gender: selected,
    };
    const url = "https://flexsync-api.onrender.com/api/account/signup";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(account),
    });
    result = await result.json();
    if (result) {
      console.warn(result);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        onChangeText={setUsername}
        value={username}
        placeholder="username"
        color="white"
        placeholderTextColor="rgba(255,255,255,0.5)"
      />

      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        color="white"
        placeholderTextColor="rgba(255,255,255,0.5)"
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        onChangeText={setAge}
        value={age}
        placeholder="Age"
        color="white"
        placeholderTextColor="rgba(255,255,255,0.5)"
      />

      <View style={styles.dropdownborder}>
        <SelectList
          setSelected={(label) => setSelected(label)}
          data={data}
          save="label"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <View style={styles.Seperate}>
        <Text>Don't have a account?</Text>
        <TouchableOpacity style onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "silver",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
    opacity: 20,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  dropdownborder: {
    borderWidth: 0.2,
    borderRadius: 5,
    borderColor: "#000",
    width: 370,
    marginBottom: 7,
  },
  Seperate: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  signUpText: {
    color: "#007bff",
    left: 2,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
>>>>>>> Stashed changes
