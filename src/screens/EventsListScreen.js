import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, FlatList } from 'react-native'
import HeaderImage from '../components/common/HeaderImage'
import EventCard from '../components/common/EventCard'
import { placeholderEvents } from '../config/placeholderEvents'



class EventsListScreen extends Component{

	render(){
		const { headerImage, title } = this.props.navigation.state.params;
		return(
			<View style={{flex:1}}>
					<HeaderImage 
						title={title} 
						image={headerImage}
						goBack={() => this.props.navigation.navigate('BottomTab')}
						fromCategory={true}
					/>
				<ScrollView>
					<View style={{flex:1, marginTop:30}}>
						<FlatList
							data={placeholderEvents}
							renderItem={({item}) => (
								<EventCard 
									eventImage={item.image}
									onPress={(name, image) => 
										this.props.navigation.navigate('Event', {title:name, headerImage:item.image, category:title})
									}
								/>
							)}
							keyExtractor={item => item.title}
						/>
					</View>
				</ScrollView>
			</View>
		)
	}
}

export default EventsListScreen