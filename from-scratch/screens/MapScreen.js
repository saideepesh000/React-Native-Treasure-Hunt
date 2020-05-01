import  React, {useState} from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';
import { Card } from 'react-native-paper';
import LocationPicker from '../components/LocationPicker'
import RiddleQues from '../components/Riddles/Riddles.js'

const MapScreen = props=>{
    const [count,counter]=useState(0);
    //let c=0

return(
  <View>
   <LocationPicker navigation={props.navigation}/>
   <View style={styles.action}>
   <Button 
   color='#800080'
   title='Validate'
   onPress={()=>{
     counter(count-10)
   }}
   />
   </View>
   <View style={styles.scoreView}>
   <Text style={styles.score}> Your Score Is : {count}  </Text> 
    </View>
   <View>
   </View>
  </View>
)

};
  
   

const styles = StyleSheet.create({
action:{
alignItems:'center',
marginTop:10
},
scoreView:{
  alignItems:'center',
  justifyContent:'center',
  marginTop:10,
  paddingTop:10,
},
score:{
  fontFamily:'open-sans-bold',
  fontSize:15,
}
});

export default MapScreen;
