import Loading from './Loading'
import React from 'react';
import Alert from 'react-native'
import * as Location from 'expo-location'
import axios from 'axios'
import Weather from './Weather';

const API_KEY = 'YOUR_SECRET_KEY'

export default class extends React.Component {
  state={
    isLoading: true
  }
  getWeather = async(latitude, longitude) => {
    const {
      data: {
        main: {temp},
        weather
      }
    } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}2&appid=${API_KEY}&units=metric`)
    // console.log(data)
    this.setState({
      isLoading: false, 
      temp: temp,
      condition: weather[0].main
    })
  }
  getLocation = async() => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      console.log(latitude, longitude)
      this.getWeather(latitude, longitude)
    } catch(error) {
      console.error(error)
      Alert.Alert.alert("Please give the permission", "ahah")
    }
  }
  componentDidMount() {
    this.getLocation()
    // let location = await Location.get
  }
  render() {
    let {isLoading, temp, condition} = this.state
    return isLoading ? <Loading /> : <Weather temp={temp} condition={condition}/>
  }
}
