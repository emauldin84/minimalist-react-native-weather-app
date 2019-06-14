import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Svg, {Use, Image } from 'react-native-svg'

const Weather = () => {
    return (
        <View style={styles.weatherContainer}>
            <View style={styles.headerContainer}>
                <FontAwesome style={{fontSize: 48, color: '#fff'}}>{Icons.sun}</FontAwesome>
                <Text style={styles.tempText}>Temperature˚</Text> 
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>So Sunny</Text>
                <Text style={styles.subtitle}>It hurts my eyes!</Text>
            </View>
        </View>
    )
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