import React from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons'

const MenuModal = (props) => {
	return(
		<Modal
	    isVisible={props.modalOpen}
       backdropTransitionInTiming={700} 
       backdropTransitionOutTiming={700}
		>
			<View style={{flex:1, width:null}}>
				<Ionicons name="ios-close-circle"  color="white" size={32} onPress={() => props.hideModal('menu')}/>
				<Text>This is the menu modal</Text>
			</View>
		</Modal>
	)
}

export default MenuModal