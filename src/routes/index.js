import React from 'react'
import MainScreen  from '../screens/MainScreen'
import CategoryScreen from '../screens/CategoryScreen'
import EventScreen from '../screens/EventScreen'
import SearchScreen from '../screens/SearchScreen'
import EventsListScreen from '../screens/EventsListScreen'
import MapScreen from '../screens/MapScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator, createStackNavigator, ReactNavigationBackButton } from 'react-navigation'


const BottomTab = createMaterialTopTabNavigator({
	Home:{
		screen:MainScreen,
		navigationOptions:{
			tabBarIcon:({tintColor}) => (
				<Icon name="ios-home" color={tintColor} size={24}/>
			)
		}
	},
	Category:{
		screen:CategoryScreen,
		navigationOptions:{
			tabBarIcon:({tintColor}) => {
				return <Icon name="ios-menu" color={tintColor} size={24} />
			}
		}
	},
	Search:{
		screen:SearchScreen,
		navigationOptions:{
			tabBarIcon:({tintColor}) => {
				return <Icon name="ios-search" color={tintColor} size={24} />
			}
		}
	}
}, {
		initialRouteName:'Home',
		tabBarPosition:'bottom',
		tabBarOptions:{
			activeTintColor:'#1C2331',
		   inactiveTintColor:'grey',
			showLabel:false,
			style:{
				backgroundColor:'#fff',
				paddingBottom:0
			},
			indicatorStyle:{
				backgroundColor:null
			},
			showIcon:true
		}
})


const Router = createStackNavigator({
	BottomTab:{
		screen:BottomTab,
		navigationOptions:{
			header:null
		}
  	},
  	ListPage:{
  		screen:EventsListScreen,
  		navigationOptions:{
  			headerLeft:null,
  		}
  	},
  	Event:{
  		screen:EventScreen
  	}
})
 

export default Router