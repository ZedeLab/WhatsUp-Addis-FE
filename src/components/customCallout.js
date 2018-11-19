import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Card } from 'native-base'


const CustomCallout = (props) => {
	return(
		<TouchableOpacity onPress={() => props.onPress('Kaldis Coffee')} style={{justifyContent:'center', alignItems:'center'}}>
			<Card style={{
					flexDirection:'row', 
					justifyContent:'center', 
					alignItems:'center', 
					borderRadius:10, 
				}}
			>
		 		<Text style={{padding:10}}>Radisson Hotel</Text>
		 	</Card>
		 	<Image source={require('../imgs/location.png')} style={{width:20, height:20}}/>
		</TouchableOpacity>
	)
}

export default CustomCallout