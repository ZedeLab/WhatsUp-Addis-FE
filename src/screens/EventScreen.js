import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Button, Text, Icon } from 'native-base'
import HeaderImage from '../components/common/HeaderImage'
import MapModal from '../components/MapModal'
import Card from '../components/Card'
import EventDescription from '../components/EventDescription'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ImageCarousel from '../components/ImageCarousel'

class EventScreen extends Component{
	constructor(props){
		super(props);
		this.state = {
			isModalOpen:false
		}
	}

	static navigationOptions = ({navigation}) => {
		const {params = {}} = navigation.state
		return {
			header: (props) => <HeaderImage {...props} image={params.image} title={params.title} headerSize={'large'} />,
			headerStyle:{
				backgroundColor:'transparent',
			},
			headerTintColor:'#1a1a1a'
		}
	}

	componentDidMount(){
		this.props.navigation.setParams({
			headerTitle:this.props.navigation.state.params.title,
			image:this.props.navigation.state.params.headerImage
		})
	}

	toggleModal = () => {
		this.setState({isModalOpen:!this.state.isModalOpen})
	}


	render(){
		return(
			<View style={styles.mapCard}>

				<ScrollView>
					 <Button block iconLeft style={{marginTop:15, backgroundColor:"#23dd42"}} onPress={this.toggleModal}>
					 	<EvilIcons name="location" color="white" size={26} />
		            <Text>View Map</Text>
		          </Button>

	          	  <View>
				          <View style={styles.eventDescription}>
				         	 <EventDescription />
				          </View>

				          <View style={{flex:1}}>
				          	<Text style={{fontWeight:'bold', fontSize:20, color:'black', alignItems:'center', padding:10}}>
				          		Preview
				          	</Text>
				          	<ImageCarousel />
				          </View>
			       </View>
			       <MapModal modalOpen={this.state.isModalOpen} hideModal={this.toggleModal} />
		       </ScrollView>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	mapCard:{
		flex:1,
		margin:10
	},
	eventDescription:{
		flex:1,
		padding:20
	}
})

export default EventScreen