import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import HeaderImage from '../components/common/HeaderImage'
import EventCard from '../components/common/EventCard'


class EventsListScreen extends Component{
	constructor(props){
		super(props);
	}

	static navigationOptions = ({navigation}) => {

		const {params = {}} = navigation.state
		return {
			header:null,
			headerStyle:{
				backgroundColor:'transparent'
			},
			headerTintStyle:{
				height:0
			},
			headerLeft:null
		}
	}

	componentDidMount(){
		this.props.navigation.setParams({
			headerTitle:this.props.navigation.state.params.title,
			image:this.props.navigation.state.params.headerImage
		})
	}

	render(){
		return(

			<View style={{flex:1}}>
				<HeaderImage 
					title={this.props.navigation.state.params.title} 
					image={this.props.navigation.state.params.headerImage}
					goBack={() => this.props.navigation.navigate('BottomTab')}
					fromCategory={true}
				/>
				<ScrollView>
					<View style={{flex:1, marginTop:30}}>
						<View style={{alignItems:'center'}}>
							<Text style={{fontSize:28}}>{this.props.navigation.state.params.title} in Addis</Text>
						</View>
						<EventCard 
							onPress={(name, image) => this.props.navigation.navigate('Event', {title:name, headerImage:image})}
						/>
						<EventCard 
							onPress={(name, image) => this.props.navigation.navigate('Event', {title:name, headerImage:image})}
						/>
						<EventCard 
							onPress={(name, image) => this.props.navigation.navigate('Event', {title:name, headerImage:image})}
						/>
					</View>
				</ScrollView>
			</View>
		)
	}
}

export default EventsListScreen