import React from 'react'
import PropTypes from 'prop-types'
import {View, Text, StyleSheet, StatusBar} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {LinearGradient} from 'expo-linear-gradient'

const weatherOptions = {
    Rain: {
        icon: 'weather-rainy',
        gradient: ['#21469b', '#23232'],
        title: '비가 주룩주룩'
    },
    Thunderstrom: {
        icon: 'weather-lightning-rainy',
        gradient: ['#a13f93', '#21469b'],
        title: '천둥번개 쾅쾅'
    },
    Drizzle: {
        icon: 'weather-partly-rainy',
        gradient: ['#1177bb', '#2389cd'],
        title: '비가 송글송글'
    },
    Snow: {
        icon: 'weather-snowy-heavy',
        gradient: ['#aaaaaa', '#555555'],
        title: '눈이 펑펑'
    },
    Clear: {
        icon: 'weather-sunny',
        gradient:['#de9823', '#efbf89'],
        title: '해가 쨍쨍'
    },
    Clouds: {
        icon: 'weather-cloudy',
        gradient: ['#9a8712', '#ab7b45'],
        title: '구름이 뭉게뭉게'
    },
    Haze: {
        icon: 'dehaze',
        gradient: ['#ababab', '#898989'],
        title: '안개가 조금'
    },
    Fog: {
        icon: 'weather-fog',
        gradient: ['#787878', '#565656'],
        title: '안개가 자욱'
    },
    Tornado: {
        icon: 'weather-tornado',
        gradient: ['abcdef', 'fedcba'],
        title: '빙글빙글 토네이도'
    },
    Default: {
        icon: 'weather-sunset',
        gradient: ['#111111', '#000000'],
        title: '알 수 없는 날씨'
    }
}
export default function Weather({temp, condition}) {
    let icon = weatherOptions[condition].icon
    console.log('icon: ', icon)
    let gradient = weatherOptions[condition].gradient
    let title = weatherOptions[condition].title
    if(icon == undefined) {
        icon = weatherOptions.Default.icon
        gradient = weatherOptions.Default.gradient
        title = weatherOptions.Default.title
    }

    return (
        <LinearGradient colors={gradient} style={styles.state}>
            <StatusBar barstyle="light-content" />
            <View style={styles.state}>
                <View style={styles.half}>
                    <MaterialCommunityIcons size={100} name={icon} color='white'/>
                    <Text style={styles.temp}>{temp}°C</Text>
                </View>
                <View style={styles.half}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Drizzle", "Thunderstorm", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Mist", "Smoke", "Haze", "Dust", 'Fog', "Sand", 'Ash', 'Squall', 'Tornado']).isRequired
}

const styles = StyleSheet.create({
    state: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    half: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    temp: {
        fontSize: 36,
        color: 'white'
    },
    title: {
        fontSize: 40,
        color: 'white',
        marginBottom: 20
    }
})