














































import React from 'react'
import {View,TextInput,Button,Text,FlatList} from 'react-native'
import { useSelector } from 'react-redux';
import RiddleQues from '../components/Riddles/Riddles.js'

const RiddleScreen = props =>{
  const logout= ()=>{props.navigation.navigate('Auth')}

  const riddles = useSelector(state => state.riddles.remainriddles )
  return (
   <FlatList
   data={riddles}
   keyExtractor={item=>item.id}
   renderItem={itemData=> 
   <RiddleQues
   riddle={itemData.item.riddle}
   anssub={()=>{
     props.navigation.navigate('Mapscr')
   }} />}
   />
      
  );
};

RiddleScreen.navigationOptions={
  headerTitle:'Riddles',
};
export default RiddleScreen;