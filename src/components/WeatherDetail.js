import React, {Component} from 'react';
import { Text, View , Image } from 'react-native';
import { Card } from 'react-native-elements' ;
import moment from 'moment' ;
class WeatherDetail extends Component {

  day(){
     let day = moment(this.props.listItem.dt * 1000).format('ddd');
     return (
       <Text>  { day.toUpperCase() }  </Text>
 );

  }
  date(){
     let _date = moment(this.props.listItem.dt * 1000).format('MM/DD/YY');
     return (
       <Text>  { _date }  </Text>
 );

  }

  iconDecorator(){
    const type = this.props.listItem.weather[0].main.toLowerCase();

    let image;

    switch (type) {
      case 'clouds':
      image  = require('./icons/cloudy.png');
      break;
      case 'rain':
      image  = require('./icons/rain.png');
      break;
      case 'snow':
      image  = require('./icons/snow.png');
      break;

      default:
        image  = require('./icons/sun.png');

    }



    return  <Image source = {image} style= {{width : 50 , height : 50}} />


  }

  render() {
    return (
      <View >
        <Card >
          <Text style={styles.defaultTextFontSize} > Date : { this.day() }   { this.date() } </Text>
          <Text style={styles.defaultTextFontSize}> Description : {this.props.listItem.weather[0].description} </Text>
                   {this.iconDecorator()}
          <Text style={styles.defaultTextFontSize}> CLouds :{this.props.listItem.clouds} %</Text>
          <Text style={styles.defaultTextFontSize}> Humidity :{this.props.listItem.humidity} %</Text>
          <Text style={styles.defaultTextFontSize}> Wind Speed :{this.props.listItem.speed} m/s</Text>
          <Text style={styles.defaultTextFontSize}> Pressure :{this.props.listItem.pressure} hpa</Text>

          <Text style={styles.defaultTextFontSize}>  T° max :  {Math.round(this.props.listItem.temp.max - 273.15)} °C /{Math.round(this.props.listItem.temp.max * (9 / 5) - 459.67)} °F </Text>
          <Text style={styles.defaultTextFontSize}>  T° min  : {Math.round(this.props.listItem.temp.min - 273.15)} °C / {Math.round(this.props.listItem.temp.min * (9 / 5) - 459.67)} °F </Text>
        </Card>
      </View>
    );




  }

}
const styles= {
  defaultTextFontSize  : {
    fontSize : 18
  },
  
};

export default WeatherDetail ;
