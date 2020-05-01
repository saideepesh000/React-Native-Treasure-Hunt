import React from 'react';
import {View, Text, StyleSheet, Button,TextInput,ScrollView} from 'react-native';
import Colors from '../../constants/Colors'
import {useCallback, useReducer} from 'react'
import { useDispatch } from 'react-redux';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const RiddleQues = props => {

 return (
   <View style={styles.riddle}>
   <Text style={styles.question}> {props.riddle} </Text> 
   <TextInput style={styles.textinput}
   id='answer'
    placeholder='  enter answer'
    errorText="Please enter a valid answer."
    

    ></TextInput>
   <View style={styles.actions}>
   <Button color={Colors.primary} title='submit answer' onPress={props.anssub}/>
   </View>
   </View>
 )
}

const styles= StyleSheet.create({
  riddle:{
    shadowColor:'black',
    shadowOpacity:0.26,
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
    elevation:5,
    borderRadius:10,
    backgroundColor:'white',
    height:150,
    alignItems:'center',
    margin:20
    
  },
  question:{
    fontSize: 18,
    marginVertical:4,
    fontFamily:'open-sans-bold',
  },
  actions:{
    alignItems:'center',
    marginTop:10

  },
  textinput:{
    borderBottomColor:'black',
    borderWidth:1,
    borderRadius:0,
    height:30,
    width:200,
    margin:10,
    padding: 8
  }
});

 export default RiddleQues;