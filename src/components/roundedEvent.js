import React from 'react'
import { View, Text, Image } from 'react-native'


const RoundedEvent = (props) => {
	return(
		<View style={{marginHorizontal:14, width:70, paddingBottom:5}}>
			<Image source={props.image} style={{height:70, width:70, borderRadius:35}} resizeMode="cover" />
			<Text style={{textAlign:'center', fontSize:15, paddingTop:5, fontFamily:'abel-regular'}}>
				Sheraton Hotel
			</Text>
		</View>
	)
}

export default RoundedEvent