import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Font, AppLoading } from 'expo'

class Header extends Component{
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
          'igFont': require('../../../assets/fonts/igFont.ttf'),
          'Catull': require('../../../assets/fonts/Catull.ttf')
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
    let headerTextStyles = {...styles.headerText };

    if(this.props.fontSize){
      headerTextStyles = {fontSize:20, color:'#03071e', fontFamily:'Catull'}
    } 

    if(!this.state.isFontLoading){
      return <AppLoading />
    }

    return(
      <View style={styles.headerStyle}>
        <Text style={headerTextStyles}>{this.props.headerText}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerStyle:{
  		height:50,
  		backgroundColor:'white',
  		justifyContent:'center',
  		alignItems:'center',
      borderBottomWidth:.4,
      borderBottomColor:'#c1c1c1'
  },
  headerText:{
  	color:'#090b35',
  	fontSize:38,
    fontFamily:'igFont',
    fontWeight:'900',
  }
})

export default Header