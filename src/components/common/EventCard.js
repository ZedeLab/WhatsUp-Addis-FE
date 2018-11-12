import React, { Component } from 'react'
import { ImageBackground, View, StyleSheet, TouchableHighlight } from 'react-native'
import Card from '../Card'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Text } from 'native-base'
import image from '../../imgs/kids.jpg'

class EventCard extends Component{
    render(){
      return(
          <TouchableHighlight
             activeOpacity={1} 
            onPress={() => this.props.onPress('company name', image)} 
             style={{margin:20, borderRadius:20}}
          >
              <ImageBackground 
                  source={require('../../imgs/cafe.jpg')} 
                  style={styles.imageBackground} 
                  resizeMode="cover"
                >
                  <View style={styles.overlayText}>
                      <Text 
                        style={{color:'white', fontWeight:'bold', paddingBottom:5, paddingLeft:5, fontSize:22}}>
                        Lorem Ipsum
                      </Text>
                      <View style={{flexDirection:'row'}}>
                        <EvilIcons name="location" color='white' size={26} />
                        <Text style={{color:'white'}} note>Bole Wolo sefer</Text>
                      </View>
                  </View>

                  <View style={styles.overlayText}>
                      <Text style={{color:'white'}}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                          tempor...
                      </Text>
                  </View>
              </ImageBackground>
          </TouchableHighlight>
      )
    }
}


const styles = StyleSheet.create({
  imageBackground:{
    width: '100%', 
    height:260,
    borderRadius:20, 
    justifyContent:'space-between'
  },
  overlayText:{
    fontSize:18,
    color:'white',
    padding:25,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    backgroundColor:'rgba(0, 0, 0, .5)'
  }
})


export default EventCard