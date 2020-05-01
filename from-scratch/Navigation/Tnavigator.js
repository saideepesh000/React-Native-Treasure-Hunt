import {createStackNavigator,createAppContainer, createSwitchNavigator } from 'react-navigation';
import {Platform}from 'react-native'
import RiddleScreen from '../screens/RiddleScreen';
import MapScreen from '../screens/MapScreen';
import Map from "../screens/Map"
import AuthScreen from '../screens/auth'
import Intro from '../screens/Intro'
import {Ionicons} from '@expo/vector-icons'
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerLeft:null,
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,

};
const Anavigator = createStackNavigator(
{
RiddlesOverview: RiddleScreen,
Mapscr: MapScreen,
Mapp: Map
},{
    defaultNavigationOptions: defaultNavOptions
})

const AuthNavigator= createStackNavigator({
  Intro:Intro,
  Auth:AuthScreen
},
{
  defaultNavigationOptions: defaultNavOptions

})
const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    An:Anavigator
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

export default createAppContainer(MainNavigator);