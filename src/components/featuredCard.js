import React from 'react'
import { View, Text, Card } from 'native-base'
import { Image } from 'react-native'

const FeatureCard = (props) => {
	return(
		<Card style={{borderRadius:10, marginLeft:15}}>
			<Image source={require('../imgs/birabiro.jpg')} style={{width:100, height:100, padding:0}} resizeMode="cover" />
			<Text style={{textAlign:'center', width:100, padding:15}}>Bira biro festival</Text>
		</Card>
	)
}

export default FeatureCard