import React, {Component} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';

import  { API_KEY } from './utils/WeatherAPIKey';
import Weather from './components/Weather'


export default class App extends Component {
  state = {
    isLoading: false,
    temperature: 0,
    weatherCondition: null,
    error: null,
  }

  render() {
    const { isLoading } = this.state;

    return (
      <View style={styles.container}>
        {/* {isLoading ? (
          <Text>Fetching The Weather</Text>
        ) : (
          <View>
            <Text>Minimalist Weather App</Text>
          </View>
        )} */}
        <Weather />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
