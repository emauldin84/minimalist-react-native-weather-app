import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import PropTypes from 'prop-types'
import {weatherConditions} from '../utils/WeatherConditions'

const Weather = ({weather, temperature}) => {
    return (
        weather ? 
            <View style={[styles.weatherContainer, {backgroundColor: weatherConditions[weather].color}]}>
                <View style={styles.headerContainer}>
                    <FontAwesome style={{fontSize: 48, color: '#fff'}}>{Icons[weatherConditions[weather].icon]}</FontAwesome>
                    <Text style={styles.tempText}>{Math.round(temperature)}˚F</Text> 
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.title}>{weatherConditions[weather].title}</Text>
                    <Text style={styles.subtitle}>{weatherConditions[weather].subtitle}</Text>
                </View>
            </View>
        : null
    )
}

Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string
}

const styles = StyleSheet.create({
    weatherContainer: {
        flex: 1,
        backgroundColor: '#f7b733',
        width: '100%',
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempText: {
        fontSize: 48,
        color: '#fff',
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        paddingLeft: 25,
        marginBottom: 40,
    },
    title: {
        fontSize: 48,
        color: '#fff',
    },
    subtitle: {
        fontSize: 24,
        color: '#fff',
    }
});

export default Weather