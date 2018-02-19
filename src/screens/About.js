import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-elements';

class About extends React.Component {
  render() {
    return (
      
         <Card>
          <View style={styles.containerStyles} >

          <Text style={[styles.textStyles, {color : 'red', alignSelf : 'center', fontSize : 20}]} > Daily Weather is a Free Weather Forecast Finder! </Text>
  
          <Text style={[styles.textStyles, {marginTop : 10}]}> With This Simple Yet Powerful App You will Get The most accurate weather Forecast Data For 10 Days!.
          </Text>
        

          
          <Text style={[styles.textStyles, {paddingTop : 10}]}>You can Search By a Single City or Activate The Geolocation So That the City Will Be Automatically Defined For You, But Before That Please Make Sure That You Activate Your Device Gps.
              </Text>
              </View>

         </Card>
    
    );
  }
}

styles={
  textStyles : {
    fontSize : 16,
    marginLeft : 10,
    marginRight : 10,
    
  
  },
  containerStyles : {
   // flex: 1,
    justifyContent : 'center',
    alignItems : 'center',
    margin : 20,
    backgroundColor : '#fff',

  }
};

export default About ;
