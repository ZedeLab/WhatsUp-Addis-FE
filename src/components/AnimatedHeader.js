import React, { Component } from 'react'
import { Animated, Text, View, ImageBackground, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { AppLoading , Font } from 'expo'


const maxHeaderHeight = 150;
const minHeaderHeight = 60;


class AnimatedHeader extends Component {
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

		const headerHeight = this.props.scrollY.interpolate({
			inputRange:[0, maxHeaderHeight - minHeaderHeight],
			outputRange:[maxHeaderHeight, minHeaderHeight],
			extrapolate:'clamp'
		})

		const titleHeight = this.props.scrollY.interpolate({
			inputRange:[20, 35],
			outputRange:[35, 20],
			extrapolate:'clamp',
		})



		if(!this.state.isFontLoading){
			return <AppLoading />
		}

		return(
			<Animated.View style={{
				...styles.headerContainer,
				height:headerHeight
			}}>
				<ImageBackground
					source={this.props.image} 
					style={styles.imageStyle} 
					resizeMode="cover" 
				>	
					<View style={styles.imageStyle}>
						<Ionicons 
							name="md-arrow-back" 
							color="white" 
							size={30} 
							onPress={this.props.goBack} 
							style={styles.iconStyle}
						/>
						<Animated.Text 
							style={{
								...styles.headerTitle,
								fontSize:titleHeight,
							}}
						>
							{this.props.title}
						</Animated.Text>
					</View>
				</ImageBackground>
			</Animated.View>
		)
	}
}

const styles = StyleSheet.create({
	headerContainer:{
		backgroundColor:'#d8d6d6',
		justifyContent:'flex-end',
		alignItems:'center',
		margin:0,
	},
	imageStyle:{
		width:'100%', 
		height:'100%',  
		flexDirection:'column', 
		justifyContent:'space-between', 
		alignItems:'flex-start',
		backgroundColor:'rgba(0, 0, 0, .3)',
		position:'absolute', 
		top:0, 
		left:0,
		right:0,
	},
	headerTitle:{
		color:'white',
		fontSize:35,
		paddingLeft:20,
		textShadowColor: 'rgba(0, 0, 0, .5)',
	   textShadowOffset: {width: -1, height:1 },
	   textShadowRadius:5,
	   fontFamily:'Catull',
	  	paddingBottom:15, 
		fontWeight:'600',
	},
	iconStyle:{
		paddingLeft:20,
		fontWeight:'bold'
	}

})

export default AnimatedHeader