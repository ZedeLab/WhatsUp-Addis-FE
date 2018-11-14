import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import {Content, Card, Text, Icon } from 'native-base';
import { AppLoading, Font } from 'expo'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons'


const ContactSection = (props) => {
		return(
			<Content>
				<Text style={{marginTop:10, paddingLeft:10, fontWeight:'bold'}}>Contacts</Text>
				<Card>

					<View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
	              <Icon  name="logo-facebook" style={{color:'#3b5998'}}/>
	              <Icon active name="logo-instagram" style={{color:'#bc2a8d'}}/>
	              <Icon active name="logo-twitter" style={{color:'#1da1f2'}}/>
	            </View>

	            <View style={{borderWidth:.5, borderColor:'#cccccc', padding:10 }}>
	            	<View style={{paddingBottom:10, flexDirection:'row', justifyContent:'space-between', borderBottomWidth:.5, borderBottomColor:'#cccccc'}}>
           			   <MaterialCommunityIcons name="email-outline" size={32} />
		            	<Text style={styles.textStyle}>whastupaddis@gmail.com</Text>
		            </View>

		            <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
		            	<FontAwesome name="phone" size={32} style={{flex:1}}/>
		            	<View style={{flex:2, alignItems:'center'}}>
			            	<Text style={styles.textStyle}>+251911056281</Text>
			            	<Text style={styles.textStyle}>+251911719467</Text>
			            </View>
		            </View>
	            </View>
				</Card>
			</Content>
		)
}

const styles = StyleSheet.create({
	textStyle:{
		textAlign:'center',
		padding:5,
		fontFamily:'Catull'
	}
})

export default ContactSection