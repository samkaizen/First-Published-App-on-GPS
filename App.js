import React from 'react';
import { StyleSheet, View, StatusBar, Text } from 'react-native';
import Search from './src/screens/Search' ;
import About from './src/screens/About' ;
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-elements';
import { TabNavigator, TabBarBottom } from 'react-navigation' ;
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
} from 'react-native-admob';
const Router = TabNavigator({
   home : {screen : Search},
   about :  { screen : About },

},
{
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'home') {
        iconName = `ios-home${focused ? '' : '-outline'}`;
      } else if (routeName === 'about') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: 'deepskyblue',
    inactiveTintColor: 'gray'
  },
  tabBarComponent: TabBarBottom,
  tabBarPosition: 'bottom',
  animationEnabled: false,
  swipeEnabled: false,


 }

);
const BannerExample = ({ style, title, children, ...props }) => (
  <View {...props} style={[styles.example, style]}>
    <Text style={styles.title}>{title}</Text>
    <View>
      {children}
    </View>
  </View>
);

const STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export default class App extends React.Component {
  componentDidMount(){
    AdMobInterstitial.setAdUnitID('ca-app-pub-6929970817421020/7345990217');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
     }
 
  render() {
    return (
      <View style={styles.container}>
        <StatusBar  translucent={false} backgroundColor = "#ddd"
/>
        <BannerExample >
            <AdMobBanner
              adSize="smartBannerPortrait"
            adUnitID="ca-app-pub-6929970817421020/8030957903"
              ref={el => (this._smartBannerExample = el)}
            />
           
          </BannerExample>

        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    marginTop : STATUS_BAR_HEIGHT,


  },
  example: {
    paddingVertical: 10,
    
  }
});
