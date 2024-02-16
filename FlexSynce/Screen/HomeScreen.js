import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, SafeAreaView, ScrollView, TouchableOpacity, View, Alert,  TextInput, Image, ActivityIndicator, Navigation} from 'react-native';

export default function HomeScreen({ navigation } ) {
  return (
    <SafeAreaView style={styles.container}>

      {/*PLAN section*/}
      <View style={styles.containerMain}>

        {/* WORKOUT Button*/}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Workout')}>
          <Text> WORKOUT</Text>
        </TouchableOpacity>

        {/* DIET TESTING Button*/}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Diet')}>
          <Text> DIET</Text>
        </TouchableOpacity>
      </View>
      {/*PLAN section*/}
      <View style={{flexDirection: 'row', alignItems: 'center', margin: 2}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', fontSize: 16,}}> Category</Text>
          </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      {/*Category section*/}
      <View style={styles.category}>
      <View style={{height: 90}} >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.card}>
        <TouchableOpacity 
          style={styles.text}
          onPress={() => navigation.navigate('ProfileTesting')}>
          <Text> Arm</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.card}>
        <TouchableOpacity 
          style={styles.text}
          onPress={() => navigation.navigate('ProfileTesting')}>
          <Text> Chest</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.card}>
        <TouchableOpacity 
          style={styles.text}
          onPress={() => navigation.navigate('ProfileTesting')}>
          <Text> Shoulder</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.card}>
        <TouchableOpacity 
          style={styles.text}
          onPress={() => navigation.navigate('ProfileTesting')}>
          <Text> Back</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.card}>
        <TouchableOpacity 
          style={styles.text}
          onPress={() => navigation.navigate('ProfileTesting')}>
          <Text> Leg</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.card}>
        <TouchableOpacity 
          style={styles.text}
          onPress={() => navigation.navigate('ProfileTesting')}>
          <Text> Abs</Text>
        </TouchableOpacity>
        </View>

      </ScrollView>
        </View>
      </View>
      {/*Category section*/}

      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10,}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 50, textAlign: 'center', fontSize: 16,}}></Text>
          </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>



     
      
      <View style={styles.fixToText}>
        {/* advise  Button*/}
        <TouchableOpacity 
          style={styles.split}
          onPress={() => navigation.navigate('ProfileTesting')}>
          <Text> advise</Text>
        </TouchableOpacity>


       {/* most click Button*/}
        <TouchableOpacity 
          style={styles.split}
          onPress={() => navigation.navigate('ProfileTesting')}>
          <Text> most click  </Text>
        </TouchableOpacity>

      </View>
      <View style={styles.bottom}>
       
      </View>
      <View style={styles.ewan}>
        
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    margin: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  split: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    margin: 10,
    height: 200,
    width: 140,
    borderWidth: 1,
    borderColor: 'grey',
  },
  card: {
    width: 80,
    height: 50,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});