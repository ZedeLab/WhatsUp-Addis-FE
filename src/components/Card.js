import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Card = (props) => {
	return(
		<View style={styles.cardStyle}>
			{props.children}
		</View>
	)
}

const styles = StyleSheet.create({
	cardStyle:{
		borderWidth:1,
		borderRadius:0,
		borderColor:'#fff',
		borderBottomWidth:1,
		shadowColor:'#000',
		shadowOffset:{width: 1, height: 2},
		shadowOpacity:0.1,
		shadowRadius:2,
		elevation:1,
		marginTop:10,
	}
})

export default Card