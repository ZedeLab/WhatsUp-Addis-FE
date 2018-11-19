import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapComponent from '../components/common/MapComponent'


class NearYou extends Component {
	render(){
		return(
			<View style={styles.containerStyle}>
				<MapComponent navigation={this.props.navigation} nearYou={true} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	containerStyle:{
		flex:1
	}
})

export default NearYou