import React from 'react';
import { Text, View } from 'react-native';
import WeatherList from '../components/WeatherList' ;

class Search extends React.Component {
  render() {
    return (
      <View style= {{flex:1}} >
        <WeatherList/>
      </View>
    );
  }
}

export default Search ;
