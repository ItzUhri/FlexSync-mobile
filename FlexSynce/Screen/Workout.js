import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, SafeAreaView, ScrollView, TouchableOpacity, View, Alert,  TextInput, Image, ActivityIndicator, Navigation, FlatList} from 'react-native';



export default function Workout({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={styles.text}> Getting started</Text>
      <Text style={styles.text}> Choose your Plan</Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Gym')}>
        <Text style={styles.texts}> Gym</Text>
      </TouchableOpacity>

      <Text style={styles.or}> Or </Text>


      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Calisthenic')}>
        <Text style={styles.texts}> Calisthenic </Text>
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
    backgroundColor: 'silver',
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
  text: {
    fontSize: 26,
  },
  texts: {
    color: 'white',
  },
  or: {
    fontSize: 20,
  }
});
