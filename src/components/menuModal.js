import React from 'react'
import { View, Text } from 'react-native'
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons'
import ImageCarousel from './ImageCarousel'


const MenuModal = (props) => {
	return(
		<Modal
	    isVisible={props.modalOpen}
       backdropTransitionInTiming={700} 
       backdropTransitionOutTiming={700}
		>
			<View style={{flex:1, width:null}}>
				<Ionicons name="ios-close-circle"  color="white" size={38} onPress={() => props.hideModal('menu')}/>
				<ImageCarousel forModal={true} />
			</View>
		</Modal>
	)
}

export default MenuModal