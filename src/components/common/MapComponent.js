import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, Animated } from 'react-native'
import { Spinner } from 'native-base'
import { MapView, Permissions, Location } from 'expo'
import CustomCallout from '../customCallout'
import { nearPlaces } from '../../config/sampleNearPlaces'
import event from '../../imgs/events2.jpg'

class MapComponent extends Component{
	constructor(props){
		super(props);
		this.state = {
			region:{
			   latitude: 9.005401,
	         longitude: 	38.763611,
	         latitudeDelta: 0.0922,
	         longitudeDelta:0.0421,
			},
			gpsAccuracy:null,
			isSpinning:false,
			markerType:''
		}
	}

	componentDidMount(){
		this.setState({isSpinning:true})
		Permissions.askAsync('location')
		.then(permission => {
			if(permission.status === 'granted'){
				if(this.props.nearYou){
					/************ Detecting near places ***********/
					this.watchId = Location.watchPositionAsync({enableHighAccuracy:true}, (position) => {
						let region = {
							latitude:position.coords.latitude, 
							longitude:position.coords.longitude,
							longitudeDelta:0.00421*1.5,
							latitudeDelta:0.00922*1.5,
						}
						/** Here there will be a function call that will detect the nearby places **/
						this.onRegionChange(region, position.coords.accuracy)
						this.mapView.animateToRegion(region, 1000)
					})
				}
				else {
					/********** This is for the map of a specific place sets the region to the region from database ****/
					const region = {
						latitude:9.022161742,
						longitude:38.748253321,
						longitudeDelta:0.00421*1.5,
						latitudeDelta:0.00922*1.5
					}
					this.setState({region:region, markerType:'pin'})
					this.mapView.animateToRegion(region, 1000)
				}
		}})
		.catch(error => {
			this.setState({isSpinning:false})
			console.log('Permission denied')
		})

		this.setState({isSpinning:false})
		// if(!this.props.nearYou){
		// 	console.log('hey')
		// }
	}

	componentWillUnmount(){
		if(this.props.nearYou){
			this.watchId.remove();
		}
	}

	onRegionChange = (region, accuracy) => {
		/*  This maybe the place where its good to fetch places near  users position */
		this.setState({region:region, gpsAccuracy:accuracy})
	}

	showSpinner = () => {
		return(
	 		<View style={styles.spinnerStyle}>
	 			<Spinner color="white" /> 
	 			<Text>Getting your current location</Text>
	 		</View>
		)
	}

	showNearPlaces = () => {
		return (
	   		<View>
		   	   {nearPlaces.map(place => (
				       <MapView.Marker
				       	key={place.name}
					      coordinate={{latitude:place.coordinate[0], longitude:place.coordinate[1]}}
					    >
					    	<CustomCallout 
					    	  onPress={(title) => this.props.navigation.navigate('Event', {title:title, headerImage:event, category:'Events'})}
					    	/>
					    </MapView.Marker>
					))}
			   </View>
		)
	}

	showPlaceDirection = () => {
		/* When this component is used to show the direction of a specific place we return a marker of that specific location */
		return null
	}


	render(){
		const { Marker, Callout, Overlay } = MapView;

		if(this.state.isSpinning){
			this.showSpinner()
		}

		else {
			return (
				<View style={{flex:1}}>
				{ this.props.nearYou ?
					<View style={styles.mapTitle}>
						<Text style={{fontSize:18}}> 
							Events near you 
						</Text>
					</View>
				 : 
				 	null
				}
				  <MapView
			       style={{ flex: 1 }}
			       showUserLocation={true}
			       region={this.state.region}
			       zoomEnabled={true}
	         	 ref={ref => { this.mapView = ref }}
	         	 loadingIndicatorColor="#666666"
	         	 loadingBackgroundColor="#eeeeee"
			      >


			      {/* Marker of users current location */}
			      <Marker coordinate={{latitude:this.state.region.latitude, longitude:this.state.region.longitude}}>
			      {this.state.markerType === 'pin' ?
			      	<View>
			      		<Image source={require('../../imgs/location.png')} style={{width:40, height:40}} />
			      	</View>
			      :
			 			<View style={styles.radius}>
							<View style={styles.marker}/>
						 </View>
			      }
					</Marker>

					{
			      /**********
			      		 Get coordinates of near places from backend save that to state 
			      		 and render markers of the places 
			      *******/
			      	this.props.nearYou ? this.showNearPlaces() : this.showPlaceDirection()
			      }
				  </MapView>
				</View>
			)
		}
	}
}



const styles = StyleSheet.create({
	mapTitle:{
		position:'absolute', 
		top:0, 
		left:0, 
		right:0, 
		marginTop:25, 
		width:200,
		zIndex:3,
		backgroundColor:'#fff0d6',
		justifyContent:"center",
		alignItems:'center'
	},
	radius:{
		height:40,
		width:40,
		borderRadius:25,
		overflow:'hidden',
		backgroundColor:'rgba(0, 122, 255, 0.1)',
		borderWidth:1,
		borderColor:'rgba(0, 122, 255, 0.3)',
		alignItems:'center',
		justifyContent:'center'
	},
	marker:{
		height:20,
		width:20,
		borderWidth:3, 
		borderColor:'white',
		borderRadius:20/2,
		overflow:'hidden',
		backgroundColor:'#007AFF'
	},
	spinnerStyle:{
		flex:1, 
		height:'100%',
		width:null,
		justifyContent:'center', 
		alignItems:'center', 
		backgroundColor:'rgba(0, 0, 0, .5)'
	}
})

export default MapComponent