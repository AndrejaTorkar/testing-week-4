/* BUTTON STYLES */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.blueSquare, {marginBottom:20}]}>
        <Text style={styles.buttonText}>Button 1</Text>
      </View>

      <View style={[styles.blueSquare, styles.disabledSquare]}>
        <Text style={styles.buttonText}>Button 2</Text>
      </View>
      
      <StatusBar style="auto" />
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

blueSquare: {
  backgroundColor: 'lightgreen',
  borderColor: 'blue',
  borderWidth: 5,
  paddingTop: 10, 
  paddingBottom: 10, // margine inside
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
  // marginBottom: 20, // margin outside
},

disabledSquare: {
  backgroundColor: 'lightgrey',
  borderColor: 'lightgrey',
  borderWidth: 5,
  paddingTop: 10, 
  paddingBottom: 10, // margine inside
  paddingLeft: 20,
  paddingRight: 20,
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
  // marginBottom: 20, // margin outside
},

buttonText: {
  fontWeight: 'bold',
  fontSize: 50,
},

});
