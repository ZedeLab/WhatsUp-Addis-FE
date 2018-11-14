import React, { Component } from 'react'
import { ImageBackground, Text, View, StyleSheet, TouchableHighlight } from 'react-native'
import Card from './Card'
import { AppLoading, Font } from 'expo'


class CardOverlay extends Component{
    constructor(props){
      super(props);
      this.state = {
        isFontLoading:false
      }
    }

    componentDidMount() {
        this._loadAssetsAsync()
     }

    async _loadAssetsAsync(){
      try {
        await Font.loadAsync({
          'Catull': require('../../assets/fonts/Catull.ttf')
        });
      }
      catch(e) {
        Log.error(e);
      }
      finally {
        this.setState({isFontLoading: true});
      }
    }

  render(){

    if(!this.state.isFontLoading){
      return <AppLoading />
    }

    return(
      <TouchableHighlight activeOpacity={1} onPress={this.props.onPress} style={styles.touchable}>
              <ImageBackground 
                source={this.props.background} 
                style={styles.imageBackground} 
                resizeMode="cover"
                imageStyle={{borderRadius:10}}
              >
                <View style={styles.overlayImage}>
                  <Text style={styles.overlayText}>
                    {this.props.cardText}
                  </Text>
                </View>
              </ImageBackground>
      </TouchableHighlight>
    )
  }
}


const styles = StyleSheet.create({
  touchable:{
    margin:10,
    flex:1,
    borderRadius:10,
    overflow:'hidden'
  },
  imageBackground:{
    width: '100%', 
    height:200,
    borderRadius:10
  },
  overlayText:{
    fontWeight:'bold',
    fontSize:38,
    color:'white',
    padding:25,
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontFamily:'Catull'
  },
  overlayImage:{
    backgroundColor:'rgba(7, 10, 12, .5)',
    flex:1
  }
})


export default CardOverlay