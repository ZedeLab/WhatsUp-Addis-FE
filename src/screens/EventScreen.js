import React, { Component } from 'react'
import { View, StyleSheet, ScrollView, Animated } from 'react-native'
import { Button, Text, Icon } from 'native-base'
import HeaderImage from '../components/common/HeaderImage'
import AnimatedHeader from '../components/AnimatedHeader'
import MapModal from '../components/MapModal'
import ScheduleModal from '../components/scheduleModal'
import Card from '../components/Card'
import EventDescription from '../components/EventDescription'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import ImageCarousel from '../components/ImageCarousel'
import ContactSection from '../components/contactSection'
import { AppLoading, Font, Calendar, Permissions } from 'expo'
import RatingComponent from '../components/ratingComponent'
import { Badge } from 'native-base'
import { MaterialIcons , MaterialCommunityIcons } from '@expo/vector-icons'
import MenuModal from '../components/menuModal'
import DropdownAlert from 'react-native-dropdownalert'



class EventScreen extends Component{
	 constructor(props){
      super(props);
      this.state = {
        isFontLoaded:false,
        isMapModalOpen:false,
        isScheduleModalOpen:false,
        isMenuModalOpen:false,
        scrollY:new Animated.Value(0),
      }
    }

    componentDidMount() {
		this._loadAssetsAsync()
    }


     /********* loading fonts ************/

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



	/** The event screen will show diffrent things based on the category that is being viewed */

	/********* 
					Renders diffrent kinds of buttons for restaurant or cinema
					if its a restaurant the button will open a modal that has the menu of the restaturant 
	**********/

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
	            <Text>{category === 'Cinema'  ? 'Schedule' : 'Menu'}</Text>
          	</Button>
		   )
   	 } 
   	 return null
	}


	/******* closes the modal **********/

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


/************* Button only visible if the category is for jobs and that button sends resume to the employee email */
	sendResumeButton = () => {

		const { category } = this.props.navigation.state.params;	
		if( category === 'Jobs'){
			return (
				 <Button 
				 	block
				 	iconLeft
				 	style={{...styles.buttonStyle, marginBottom:10}} 
				 	onPress={this.sendResume}
				 >
				 	<MaterialCommunityIcons name="file-send" color="white" size={26} />
	            <Text>Send resume</Text>
	          </Button>
			)
		}
		return null
	}

	/********** This will send open up the employees email and user will be able to attach file and send . */
	sendResume = () => {
		console.log('send email to employee')
	}


	/*********** Must check on Android **************/

	addToCalendar = () => {
		let eventDetails = {
			title:`Joni's Birthday`,
			startDate: new Date('2019-01-03'),
			endDate: new Date('2019-01-05')
		}

		Permissions.askAsync('calendar')
		.then(({status}) => {
			if(status === 'granted'){
				Calendar.createEventAsync(Calendar.DEFAULT, eventDetails)
					.then(event => {
						this.dropdown.alertWithType('success', '', 'Event added to your calendar')
					})
					.catch(error => {
						this.dropdown.alertWithType('error', '', 'Failed to add event to your calender, Please try again')
					})
			}
		})
		.catch(error => {
			this.dropdown.alertWithType('error', '', 'Failed to add event to your calendar')
		})
	}


/************** Render Components ***************/
	 render(){
	 	const { category,  headerImage, title} = this.props.navigation.state.params;

	    if(!this.state.isFontLoaded){
	      return <AppLoading />
   	 }

		return(
			<View style={{flex:1}}>
				 <AnimatedHeader
				 	image={headerImage} 
				 	title={title} 
				 	scrollY={this.state.scrollY} 
				 	goBack={() => this.props.navigation.goBack(null)
				 }
				 />

				<View style={styles.eventScreen}>
					<ScrollView 
						scrollEventThrottle={16}
						showsVerticalScrollIndicator={false}
						onScroll={Animated.event(
						[
							{nativeEvent:{ contentOffset:{y:this.state.scrollY }}} 
						])}
					>
						<View style={{flexDirection:'row', flex:1}}>
							 <Button 
								iconLeft
							 	style={{
							 		flexDirection:'row',
							 		backgroundColor:'#29d190', 
							 		flex:1, 
							 		marginHorizontal:10, 
							 		justifyContent:'center'
							 	}} 
							 	onPress={() => this.toggleModal('map')}
							 >
							 	<EvilIcons name="location" color="white" size={26} />
				            <Text>Map</Text>
				          </Button>

				          {
				          	this.renderForCinemaOrRestaurant()
				          }

			          </View>

		          	  <View>
					          <View style={styles.eventDescription}>
					         	 <EventDescription />
					          </View>
					       	 {
						          	category === 'Events' ? 
						          	 	<Button 
						          	 		block
											 	iconLeft
											 	style={styles.buttonStyle} 
											 	onPress={this.addToCalendar}
											 >
											 	<MaterialCommunityIcons name="calendar-clock" color="white" size={26} />
								            <Text>Add to calender</Text>
							          	</Button>
							          : null
							    }
					          {
					          	this.sendResumeButton()
					          }

					          <View style={{flex:1}}>
						          <View>
						          	<ContactSection />
						          </View>

						          {category === 'Jobs' ? null :
							          <View style={{padding:10, alignItems:'center'}}>
						          			<Text 
							          			style={{
							          				fontWeight:'bold', 
							          				fontSize:20, 
							          				color:'black', 
							          				alignSelf:'flex-start',
							          				padding:10
							          			}}
						          			>
								          		Preview
								          	</Text>
								          	<ImageCarousel />
								       </View>
								    }
					          </View>
				       </View>
				       <MapModal modalOpen={this.state.isMapModalOpen} hideModal={this.toggleModal} />
				       <ScheduleModal modalOpen={this.state.isScheduleModalOpen} hideModal={this.toggleModal} />
				       <MenuModal modalOpen={this.state.isMenuModalOpen} hideModal={this.toggleModal} />
			       </ScrollView>
			     </View>
			     <DropdownAlert  ref={ref => this.dropdown = ref}  closeInterval={3000}/>
			</View>
		)
	}
}



const styles = StyleSheet.create({
	eventScreen:{
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