import React from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const HeaderImage = (props) => {

	let headerStyle = styles.headerContainer;
	let imageHeaderStyle = styles.imageStyle;
	let headerTitleStyle = styles.headerTitle

	if(props.headerSize){
		headerStyle = {...styles.headerStyle, height:150}
		imageHeaderStyle = {...styles.imageStyle, flexDirection:'column', justifyContent:'space-between', alignItems:'flex-start'}
		headerTitleStyle = {...styles.headerTitle, paddingBottom:15, fontWeight:'600'}
	}


	return(
		<View style={headerStyle}>
			<ImageBackground
				source={props.image} 
				style={imageHeaderStyle} 
				resizeMode="cover" 
			>	
				<Ionicons 
					name="md-arrow-back" 
					color="white" 
					size={35} 
					onPress={() => props.navigation.goBack(null)} style={styles.iconStyle}
				/>
				<Text style={headerTitleStyle}>{props.title}</Text>
			</ImageBackground>
		</View>
	)
}

const styles = StyleSheet.create({
	headerContainer:{
		backgroundColor:'#eee',
		justifyContent:'flex-end',
		alignItems:'center',
		height:100,

	},
	imageStyle:{
		width:'100%', 
		height:'100%',  
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center', 
		position:'absolute', 
		top:0, 
		left:0,
		right:0,
	},
	headerTitle:{
		color:'white',
		fontWeight:'800',
		fontSize:35,
		paddingLeft:20,
		textShadowColor: 'rgba(0, 0, 0, 3)',
	   textShadowOffset: {width: -2, height: 2},
	   textShadowRadius:5
	},
	iconStyle:{
		paddingLeft:20,
		fontWeight:'bold'
	}

})

export default HeaderImage