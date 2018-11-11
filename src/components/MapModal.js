import React, { Component } from 'react'
import { View } from 'react-native'
import { MapView } from 'expo'
import Modal from 'react-native-modal'
import { Ionicons } from '@expo/vector-icons'


class MapModal extends Component{
  render(){
    return(
       <View>
          <Modal isVisible={this.props.modalOpen} backdropTransitionInTiming={500} backdropTransitionOutTiming={500}>
            <View style={{ flex: 1, padding:20}}>
              <Ionicons name="ios-close-circle"  color="white" size={32} onPress={this.props.hideModal}/>
              <MapView
                style={{ flex: 1 }}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.4324,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              />
            </View>
          </Modal>
        </View>
      )
  }
}


export default MapModal