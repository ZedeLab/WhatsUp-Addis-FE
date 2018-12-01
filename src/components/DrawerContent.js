import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Container, Header, Content, List, ListItem, Text, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons'

class DrawerContent extends Component{
	render(){
		return(
		  <Container>
          <List>
	        	<TouchableOpacity style={{alignItems:"flex-end", paddingTop:5, paddingHorizontal:20}} onPress={this.props.closeDrawer}>
	        		<Ionicons name="ios-close" size={42}/>
	        	</TouchableOpacity>

	        	<View style={{marginTop:40}}>
	            <View style={{padding:30,  borderBottomWidth:.5, borderBottomColor:'#cecece'}}>
	              <Text style={{ textAlign:'center'}}>
	              	 Own a business ? 
	              	 <Text style={{fontSize:20, fontWeight:"bold", paddingTop:5, color:'green'}}>
	              	 	Register now
	              	 </Text>
	              </Text>
	            </View>

	            <View style={{flexDirection:'column', borderBottomWidth:.5, borderBottomColor:'#cecece', paddingTop:20}}>
	              <Text style={{textAlign:'center', fontWeight:"bold"}}>
	              		Follow us on
	              	</Text>
	              <View style={{flexDirection:'row', justifyContent:'space-around', paddingVertical:20}}>
	              	  <Icon  name="logo-facebook" style={{color:'#3b5998', padding:20, fontSize:30}}  />
		              <Icon  name="logo-instagram" style={{color:'#bc2a8d', padding:20, fontSize:30}}  />
		              <Icon  name="logo-twitter" style={{color:'#1da1f2', padding:20, fontSize:30}} />
	              </View>
	            </View>
	         </View>
          </List>
      </Container>
		)
	}
}

export default DrawerContent