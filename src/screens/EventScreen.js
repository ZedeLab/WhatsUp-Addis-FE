import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Button, Text, Icon } from 'native-base'
import HeaderImage from '../components/common/HeaderImage'
import MapModal from '../components/MapModal'
import ScheduleModal from '../components/scheduleModal'
import Card from '../components/Card'
import EventDescription from '../components/EventDescription'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ImageCarousel from '../components/ImageCarousel'
import ContactSection from '../components/contactSection'
import { AppLoading, Font } from 'expo'
import RatingComponent from '../components/ratingComponent'
import { Badge } from 'native-base'
import { MaterialIcons , MaterialCommunityIcons} from '@expo/vector-icons'
import MenuModal from '../components/menuModal'


class EventScreen extends Component{
	 constructor(props){
      super(props);
      this.state = {
        isFontLoaded:false,
        isMapModalOpen:false,
        isScheduleModalOpen:false,
        isMenuModalOpen:false
      }
    }

    componentDidMount() {
    	this.props.navigation.setParams({
			headerTitle:this.props.navigation.state.params.title,
			image:this.props.navigation.state.params.headerImage
		})
        this._loadAssetsAsync()
     }

    async _loadAssetsAsync(){
      try {
        await Font.loadAsync({
          'Catull': require('../../assets/fonts/Catull.ttf'),
          'abel-regular':require('../../assets/fonts/abel-regular.ttf')
        });
      }
      catch(e) {
        Log.error(e);
      }
      finally {
        this.setState({isFontLoaded: true});
      }
    }


	static navigationOptions = ({navigation}) => {
		const {params = {}} = navigation.state
		return {
			header: (props) => <HeaderImage {...props} image={params.image} title={params.title} headerSize={'large'} />,
			headerStyle:{
				backgroundColor:'transparent',
				marginBottom:0,
				paddingBottom:0
			},
			headerTintColor:'#1a1a1a'
		}
	}

	renderForCinemaOrRestaurant = () => {
		const { category } = this.props.navigation.state.params;
		let icon;
		
		if(category === 'Cinema') {
			icon = <MaterialIcons name="schedule" color="white" size={26} style={{paddingLeft:10}}/>
		} 
		else if(category === 'Food'){
			icon = <MaterialCommunityIcons name="food-fork-drink" color="white" size={26} style={{paddingLeft:10}} />
		}

		 if(category === 'Cinema' || category === 'Food'){
   	 	return (
 				<Button 
				 	iconLeft
				 	style={styles.buttonStyle} 
				 	onPress={() => this.toggleModal(category === 'Cinema' ? 'cinema' : 'menu')}
				 >
				 	{icon}
	            <Text>{category === 'cinema'  ? 'Schedule' : 'Menu'}</Text>
          	</Button>
		   )
   	 } 
   	 return null
	}


	toggleModal = (whichModal) => {
		if(whichModal === 'cinema'){
			this.setState({isScheduleModalOpen:!this.state.isScheduleModalOpen})
		} 
		else if(whichModal === 'map'){
			this.setState({isMapModalOpen:!this.state.isMapModalOpen})
		}
		else if(whichModal === 'menu'){
			this.setState({isMenuModalOpen:!this.state.isMenuModalOpen})
		}
	}

	 render(){
	    if(!this.state.isFontLoaded){
	      return <AppLoading />
   	 }

		return(
			<View style={styles.mapCard}>
				<ScrollView>
					<View style={{flexDirection:'row', flex:1}}>
						 <Button 
							iconLeft
						 	style={{flexDirection:'row',backgroundColor:'#29d190', flex:1, marginHorizontal:10, justifyContent:'center'}} 
						 	onPress={() => this.toggleModal('map')}
						 >
						 	<EvilIcons name="location" color="white" size={26} />
			            <Text>Map</Text>
			          </Button>

			          {this.renderForCinemaOrRestaurant()}
		          </View>

	          	  <View>
				          <View style={styles.eventDescription}>
				         	 <EventDescription />
				          </View>

				          <View style={{flex:1}}>
					          <View>
					          	<ContactSection />
					          </View>
					          <View style={{padding:10, alignItems:'center'}}>
				          			<Text style={{fontWeight:'bold', fontSize:20, color:'black', alignSelf:'flex-start', padding:10}}>
						          		Preview
						          	</Text>
						          	<ImageCarousel />
						       </View>
				          </View>
			       </View>
			       <MapModal modalOpen={this.state.isMapModalOpen} hideModal={this.toggleModal} />
			       <ScheduleModal modalOpen={this.state.isScheduleModalOpen} hideModal={this.toggleModal} />
			       <MenuModal modalOpen={this.state.isMenuModalOpen} hideModal={this.toggleModal} />
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
	buttonStyle:{
		backgroundColor:'#0082bf',
		flex:1,
		marginHorizontal:10,
		flexDirection:'row',
		justifyContent:'center'
	},
	eventDescription:{
		flex:1,
		marginVertical:10
	}
})

export default EventScreen