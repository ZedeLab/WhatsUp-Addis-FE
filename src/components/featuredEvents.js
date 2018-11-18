import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import RoundedEvent from './roundedEvent'
import FeaturedCard from './featuredCard'


class FeaturedEvents extends Component{
	render(){
		return(
			<View style={{marginTop:20, backgroundColor:'white', paddingBottom:20}}>
				<Text style={{marginHorizontal:20, marginBottom:20, fontWeight:'bold', fontSize:18, paddingTop:10}}>
					Featured
				</Text>
				<ScrollView	horizontal={true} showsHorizontalScrollIndicator={false}>
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
					<FeaturedCard />
				</ScrollView>
			</View>
		)
	}
}

export default FeaturedEvents