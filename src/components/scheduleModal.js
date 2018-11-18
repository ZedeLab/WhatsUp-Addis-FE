import React, { Component } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import ScheduleList from './scheduleList'
import { Ionicons } from '@expo/vector-icons'

class ScheduleModal extends Component{
	render(){
		return(
			<View>
	          <Modal 
	             isVisible={this.props.modalOpen}
	             backdropTransitionInTiming={700} 
	             backdropTransitionOutTiming={700}
	          >
	            <View style={{flex: 1, width:null}}>
	              <Ionicons name="ios-close-circle"  color="white" size={38} onPress={() => this.props.hideModal('cinema')}/>
	             <ScheduleList />
	            </View>
	          </Modal>
        </View>
		)
	}
}

export default ScheduleModal