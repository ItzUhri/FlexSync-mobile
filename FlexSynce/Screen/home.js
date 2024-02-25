import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  Image,
  ActivityIndicator,
  Navigation,
  FlatList,
} from "react-native";

export default function home() {
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        /** Header **/
        <SafeAreaView style = {styles.header}>
            <View>

            </View>


        </SafeAreaView>
    



        /** main body **/
        <SafeAreaView style = {styles.main}>
            <View>

            </View>



        </SafeAreaView>



        /** Footer **/
        <SafeAreaView style = {styles.footer} >
            <View>

            </View>


        </SafeAreaView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        padding: 20,
      },

});
