import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Font, AppLoading } from 'expo'
import Icon from 'react-native-vector-icons/Ionicons'



class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      isFontLoading:false,
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
    let mainHeaderStyle = { ...styles.headerStyle };

    if(this.props.fontSize){
      headerTextStyles = {fontSize:20, color:'#03071e', fontFamily:'Catull'}
    } else {
      mainHeaderStyle = { ...styles.headerStyle, flexDirection:'row', justifyContent:'flex-start'}
      headerTextStyles = {...styles.headerText, flex:3}
    }

    if(!this.state.isFontLoading){
      return <AppLoading />
    }

    return(
      <View style={mainHeaderStyle}>
      {
        /** Change prop name must be descriptive of why its checking */
        !this.props.fontSize ? 
         <TouchableOpacity style={{flex:1, paddingLeft:15}} onPress={this.props.openDrawer}>
           <Icon name="ios-menu" color="#090b35" size={24} />
         </TouchableOpacity>
        : null
      }
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
  	fontSize:32,
    fontFamily:'igFont',
    fontWeight:'900',
  }
})

export default Header