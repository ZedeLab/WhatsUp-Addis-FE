import React, { Component } from 'react'
import { ImageBackground, View, StyleSheet, TouchableHighlight } from 'react-native'
import Card from '../Card'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Text } from 'native-base'
import image from '../../imgs/kids.jpg'
import RatingComponent from '../ratingComponent'


class EventCard extends Component{
    render(){
      return(
          <TouchableHighlight
             activeOpacity={1} 
            onPress={() => this.props.onPress('Kaldis Coffee', image)} 
             style={styles.touchable}
          >
              <ImageBackground 
                  source={this.props.eventImage} 
                  style={styles.imageBackground} 
                  imageStyle={{borderRadius:20}}
                  resizeMode="cover"
                >
                  <View style={styles.overlayText}>
                      <View>
                          <Text 
                            style={{color:'white', fontWeight:'800', paddingBottom:5, paddingLeft:5, fontSize:30}}>
                            Lorem Ipsum
                          </Text>
                          {
                            this.props.category === 'Jobs' 
                              ?
                              /* This will render the Job field : eg: software eng job */
                                <View>
                                  <Text style={{color:'white', fontSize:20}}>Software Engineering</Text>
                                </View>
                              :
                                <View style={{flexDirection:'row'}}>
                                  <EvilIcons name="location" color='white' size={26} />
                                  <Text style={{color:'white'}} note>Bole Wolo sefer</Text>
                                </View>
                          }
                      </View>
                      {
                        /*** Do not show rating if the category is for jobs **/
                        this.props.category === 'Jobs' ? null :
                        this.props.category === 'Events' ? 
                          <View>
                            <Text style={{color:"white"}}>May 22, 10:00 - 12:00</Text>
                          </View>
                      :
                          <RatingComponent color={'yellow'}/>
                      }
                        
                  </View>

              </ImageBackground>
          </TouchableHighlight>
      )
    }
}


const styles = StyleSheet.create({

 touchable:{ 
      margin:20,
      borderRadius:20,
      overflow:'hidden',
      width:'90%',
      height:200,
      backgroundColor:'#eaeaea'
  },
  imageBackground:{
    borderRadius:20, 
    height:200,
    justifyContent:'space-between',
  },
  overlayText:{
    fontSize:18,
    color:'white',
    padding:25,
    justifyContent:'space-around',
    textShadowColor: 'rgba(0, 0, 0, 3)',
    textShadowOffset: {width: -1, height: 4},
    textShadowRadius: 20,
    backgroundColor:'rgba(0, 0, 0, .6)',
    flex:1
  }
})


export default EventCard