import React from 'react'
import { View, Text, Card } from 'native-base'
import RoundedEvent from './roundedEvent'
import { ScrollView, TouchableOpacity, StyleSheet} from 'react-native'

const TopEventsComponent = (props) => {
	return(
		<View style={{marginVertical:15, backgroundColor:'white'}}>
			<View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:10}}>
				<Text style={{marginLeft:15, fontWeight:'bold', padding:10}}>{props.topWhat}</Text>

				{
					props.moreDisabled ? null : 
						<TouchableOpacity onPress={() => 
							props.navigate('ListPage', {title:props.title, headerImage:props.headerImage, category:props.title})}
							>
							<Text style={styles.moreStyle}>
								More
							</Text>
						</TouchableOpacity>
				}
			</View>
			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<RoundedEvent image={props.image}/>
				<RoundedEvent image={props.image}/>
				<RoundedEvent image={props.image}/>
				<RoundedEvent image={props.image}/>
				<RoundedEvent image={props.image}/>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	moreStyle:{
		marginLeft:15, 
		fontWeight:'bold', 
		padding:10, 
		color:'green', 
		borderBottomWidth:.3, 
		borderColor:'#1a1a1a'
	}
})

export default TopEventsComponent