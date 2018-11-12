import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const Header = (props) => {

  let headerTextStyles = styles.headerText;
  if(props.fontSize){
    headerTextStyles = {fontSize:20, color:'#1C2331', fontWeight:'bold'}
  } 

  return(
    <View style={styles.headerStyle}>
      <Text style={headerTextStyles}>{props.headerText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  headerStyle:{
  		height:75,
  		backgroundColor:'#fff',
  		justifyContent:'flex-end',
  		alignItems:'flex-start',
      padding:20
  },
  headerText:{
  	color:'#1C2331',
  	fontSize:27,
  	fontWeight:'bold',
  }
})

export default Header