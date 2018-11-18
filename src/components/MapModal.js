import React, { Component } from 'react'
import { View } from 'react-native'
import { MapView } from 'expo'
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons'
import MapComponent from './common/MapComponent'

class MapModal extends Component{
  render(){
    return(
       <View>
          <Modal 
             isVisible={this.props.modalOpen}
             backdropTransitionInTiming={700} 
             backdropTransitionOutTiming={700}
          >
            <View style={{ flex: 1, padding:20}}>
              <Ionicons name="ios-close-circle"  color="white" size={36} onPress={() => this.props.hideModal('map')}/>
              <MapComponent />
            </View>
          </Modal>
        </View>
      )
  }
}


export default MapModal