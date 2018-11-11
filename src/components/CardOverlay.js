import React, { Component } from 'react'
import { ImageBackground, Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import Card from './Card'


class CardOverlay extends Component{
    render(){
      return(
          <View style={{padding:10}}>
              <TouchableHighlight activeOpacity={1} onPress={this.props.onPress} style={styles.touchable}>
                <Card>
                    <View>
                      <ImageBackground source={this.props.background} style={styles.imageBackground} resizeMode="cover">
                        <Text style={styles.overlayText}>
                          {this.props.cardText}
                        </Text>
                      </ImageBackground>
                    </View>
                </Card>
              </TouchableHighlight>
          </View>
      )
    }
}


const styles = StyleSheet.create({
  imageBackground:{
    width: '100%', 
    height:200,
  },
  overlayText:{
    fontWeight:'bold',
    fontSize:38,
    color:'white',
    padding:25,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  }
})


export default CardOverlay