/*This is an example of React Native App Intro Slider */
import React from 'react';
//import react in project 

import { StyleSheet, View, Text } from 'react-native';
//import all the required component


import AppIntroSlider from 'react-native-app-intro-slider';
//import AppIntroSlider to use it

export default class Intro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false,
      //To show the main page of the app
    };
  }
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  render() {
    //If false show the Intro Slides
    if (this.state.showRealApp) {
      //Real Application
      return (
        this.props.navigation.navigate('Auth')
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          //comming from the JsonArray below
          onDone={this._onDone}
          //Handler for the done On last slide
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }
  }
}
const styles = StyleSheet.create({
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    marginBottom:0,
    fontFamily:'open-sans'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
    fontFamily:'open-sans-bold',
  },
  terms:{
    marginTop:30,
    textAlign:'center',
    alignItems:'center',
    color:'#FFFFFF',
    fontSize: 15,
    fontFamily:''
  },
});

const slides = [
  {
    key: 's1',
    text: 'Quest For The Treasure',
    title: 'Welcome To Virtual World',
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: '#800080',
  },
  {
    key: 's2',
    title: 'A Location Based App',
    titleStyle: styles.title,
    text: 'Solve The Riddle, Send The Location',
    textStyle: styles.text,
    backgroundColor: '#800080',
  },
  {
    key: 's3',
    title: 'Terms & Conditions',
    titleStyle: styles.title,
    text: '1. Agree With Us Only If You Want To Roam.\n2. Privacy Is Important, We Protect Your Credentials.\n3. We Are Not Responsible For Any Accidents.\n4. No Terms & Conditions Then Close The App',
    textStyle: styles.terms,
    imageStyle: styles.image,
    backgroundColor: '#800080',
  },
  
];