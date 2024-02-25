<<<<<<< Updated upstream
=======
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, SafeAreaView, ScrollView, TouchableOpacity, View, Alert,  TextInput, Image, ActivityIndicator, Navigation, FlatList} from 'react-native';

export default function HomeScreen({ navigation } ) {
  return (  
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}> Welcome to FlexSynce </Text> 
      <Text style={styles.welcome2}> Choose your routine</Text>  

      {/*PLAN section*/}
      <View style={styles.fixToText}>
        {/* WORKOUT Button*/}
        <TouchableOpacity 
          style={styles.button1}
          onPress={() => navigation.navigate('Workout')}>
          <Text style ={{color: "white"}} > WORKOUT</Text>
        </TouchableOpacity>

        {/* DIET TESTING Button*/}
        <TouchableOpacity 
          style={styles.button2}
          onPress={() => navigation.navigate('Diet')}>
          <Text style ={{color: "white"}}> DIET</Text>
        </TouchableOpacity>
      </View>
      {/*PLAN section*/}



      <View style={{flexDirection: 'row', alignItems: 'center', margin: 2}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
          <View>
            <Text style={{width: 90, textAlign: 'center', fontSize: 16,}}> Category</Text>
          </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>

      {/*Category section*/}
      <View style={styles.category}>
      <View style={{height: 70}} >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>

        <View style={styles.cardArm}>
        <TouchableOpacity 
          style={styles.text}
          onPress={() => navigation.navigate('Arm')}>
          <Text> Arm</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.cardChest}>
        <TouchableOpacity 
          style={styles.text}
          onPress={() => navigation.navigate('Chest')}>
          <Text> Chest</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.cardShoulder}>
        <TouchableOpacity 
          style={styles.text}
          onPress={() => navigation.navigate('Shoulder')}>
          <Text> Shoulder</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.cardBack}>
        <TouchableOpacity 
          style={styles.text}
          onPress={() => navigation.navigate('Back')}>
          <Text> Back</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.cardLeg}>
        <TouchableOpacity 
          style={styles.text}
          onPress={() => navigation.navigate('Leg')}>
          <Text> Leg</Text>
        </TouchableOpacity>
        </View>

        <View style={styles.cardAbs}>
        <TouchableOpacity 
          style={styles.text}
          onPress={() => navigation.navigate('Abs')}>
          <Text> Abs</Text>
        </TouchableOpacity>
        </View>

      </ScrollView>
        </View>
      </View>
      {/*Category section*/}

      <View style={{flexDirection: 'row', alignItems: 'center', margin: 10,}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
      </View>



      
      <View style={styles.foryou}>
        {/* advise  Button*/}
        <Text> For you</Text>
        <TouchableOpacity 
          style={styles.split}
          onPress={() => navigation.navigate('Testing')}>
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
    backgroundColor: '#C0C0C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcome: {
    fontSize: 34,
  },
  welcome2: {
    fontSize: 18,
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: 65,
  },
  fixToText: {
    margin: '2%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    height: 110,
    width: 130,
    borderWidth: 1,
    borderColor: 'grey',
  },
  button2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    height: 110,
    width: 130,
    borderWidth: 1,
    borderColor: 'grey',
  },
  foryou: {
    backgroundColor: "white",
    height: 350,
    borderBlockColor: "white",
    borderRadius: 10,
  },
  split: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
    margin: 10,
    height: 110,
    width: 300,
    borderWidth: 1,
    borderColor: 'grey',
    top: 50,
  },
  scrollViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cardArm: {
    width: 80,
    height: 50,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue'
  },
  cardChest: {
    width: 80,
    height: 50,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange'
  },
  cardShoulder: {
    width: 80,
    height: 50,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  cardBack: {
    width: 80,
    height: 50,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },
  cardLeg: {
    width: 80,
    height: 50,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  cardAbs: {
    width: 80,
    height: 50,
    backgroundColor: 'lightblue',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
});




>>>>>>> Stashed changes
