import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/images/cronometro.png')} />
        <Text style={styles.timeText}>0.0</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>START</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>STOP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00aeef',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#00aeef',
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  timeText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: -160,
    marginBottom: 90,
  },
});

export default App;
