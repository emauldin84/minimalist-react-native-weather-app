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

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log('position', position.coords)
        this.fetchWeather(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: 'Error Getting Weather Conditions'
        })
      }
    )
  }

  fetchWeather(lat = 25, lon = 25) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=imperial`
    )
    .then(res => res.json())
    .then(json => {
      console.log('json',json);
      this.setState({
        temperature: json.main.temp,
        weatherCondition: json.weather[0].main,
        isLoading: false
      })
    })
  }

  render() {
    const { isLoading } = this.state;

    return (
      <View style={styles.container}>
        {isLoading ? (
          <Text>Fetching The Weather</Text>
        ) :
        <Weather weather={this.state.weatherCondition} temperature={this.state.temperature}/>}
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
