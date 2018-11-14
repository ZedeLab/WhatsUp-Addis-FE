import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Badge } from 'native-base'
import EvilIcons from 'react-native-vector-icons/EvilIcons'


const WorkingHour = () => {
		return(
			<View style={styles.workingHour}>
				<EvilIcons 
					name="clock" 
					color="green" size={30} 
				/>
				<Text style={{color:'green', paddingLeft:6, fontWeight:'bold'}}>
					2:00 - 12:00
				</Text>
			   <Badge success>
			      <Text>Open</Text>
			    </Badge>
			</View>
	)
}

const styles = StyleSheet.create({
	workingHour:{
		flexDirection :'row', 
		justifyContent:'space-around',
		backgroundColor:'white', 
		padding:15
	},
})

export default WorkingHour