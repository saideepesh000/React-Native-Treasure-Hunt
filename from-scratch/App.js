import * as React from 'react';
import {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { createStore,combineReducers,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import MainNavigator from './Navigation/Tnavigator';
import ReduxThunk from 'redux-thunk'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
// You can import from local files
import riddlereducer from './store/Reducer/Riddles';


const rootReducer = combineReducers({
  riddles: riddlereducer
});
const store= createStore(rootReducer, applyMiddleware(ReduxThunk));
const fetchFonts=()=>{
  return Font.loadAsync({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })
}
export default function App(){
  const [fontloaded,setfontloaded]=useState(false)
  if(!fontloaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>{
      setfontloaded(true)
    }}/>
  }
  return(
    <Provider store={store}>
    <MainNavigator/>
    </Provider>
  );
}
