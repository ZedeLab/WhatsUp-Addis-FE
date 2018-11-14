import React, { Component } from 'react'
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AppLoading , Font } from 'expo'

class HeaderImage extends Component {
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
		let headerStyle = styles.headerContainer;
		let imageHeaderStyle = styles.imageStyle;
		let headerTitleStyle = styles.headerTitle

		if(this.props.headerSize){
			headerStyle = {...styles.headerStyle, height:150, margin:0}

			imageHeaderStyle = {
				...styles.imageStyle, 
				flexDirection:'column', 
				justifyContent:'space-between', 
				alignItems:'flex-start',
				backgroundColor:'rgba(0, 0, 0, .3)'
			}
			headerTitleStyle = {
				...styles.headerTitle, 
				paddingBottom:15, 
				fontWeight:'600'
			}
		}

		if(!this.state.isFontLoading){
			return <AppLoading />
		}

		return(
			<View style={headerStyle}>
				<ImageBackground
					source={this.props.image} 
					style={styles.imageStyle} 
					resizeMode="cover" 
				>	
					<View style={imageHeaderStyle}>
						<Ionicons 
							name="md-arrow-back" 
							color="white" 
							size={35} 
							onPress={this.props.fromCategory ? this.props.goBack : () => this.props.navigation.goBack(null)} style={styles.iconStyle}
						/>
						<Text style={headerTitleStyle}>
							{this.props.title}
						</Text>
					</View>
				</ImageBackground>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headerContainer:{
		backgroundColor:'#d8d6d6',
		justifyContent:'flex-end',
		alignItems:'center',
		height:50,

	},
	imageStyle:{
		width:'100%', 
		height:'100%',  
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center', 
		position:'absolute', 
		top:0, 
		left:0,
		right:0,
		backgroundColor:'rgba(0, 0, 0, .2)'
	},
	headerTitle:{
		color:'white',
		fontWeight:'800',
		fontSize:35,
		paddingLeft:20,
		textShadowColor: 'rgba(0, 0, 0, 5)',
	   textShadowOffset: {width: -1, height:1 },
	   textShadowRadius:5,
	   fontFamily:'Catull'
	},
	iconStyle:{
		paddingLeft:20,
		fontWeight:'bold'
	}

})

export default HeaderImage