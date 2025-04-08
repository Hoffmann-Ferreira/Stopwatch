import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      initialButtonText: 'START',
      timesTamp: 0,
    };
    //Variável para armazenar o timer
    this.initialTimer = null;
    //Exibição do último tempo
    this.edisplayLastTime = false;

    this.timerCounter = this.timerCounter.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }

  timerCounter() {
    if (this.initialTimer !== null) {
      clearInterval(this.initialTimer);
      this.setState({
        initialButtonText: 'START',
      });
      this.initialTimer = null;
    } else {
      this.initialTimer = setInterval(() => {
        this.setState({
          timer: this.state.timer + 0.1,
          initialButtonText: 'PAUSE',
        });
      }, 100);
    }
  }

  clearTimer() {
    this.setState({
      timesTamp: this.state.timer,
      timer: 0,
      initialButtonText: 'START',
    });
    clearInterval(this.initialTimer);
    this.initialTimer = null;
    this.edisplayLastTime = true;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/images/cronometro.png')} />
        <Text style={styles.timeText}>{this.state.timer.toFixed(1)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={this.timerCounter}>
            <Text style={styles.buttonText}>
              {this.state.initialButtonText}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.clearTimer}>
            <Text style={styles.buttonText}>CLEAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.timesTampContainer}>
          <Text style={styles.TextTimesTamp}>
            {this.edisplayLastTime
              ? 'Your last time: ' + this.state.timesTamp.toFixed(2)
              : ''}
          </Text>
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
  timesTampContainer: {
    flexDirection: 'row',
    marginTop: 30,
  },
  TextTimesTamp: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default App;
