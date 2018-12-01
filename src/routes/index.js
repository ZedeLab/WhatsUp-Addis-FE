import React from 'react'
import MainScreen  from '../screens/MainScreen'
import CategoryScreen from '../screens/CategoryScreen'
import EventScreen from '../screens/EventScreen'
import SearchScreen from '../screens/SearchScreen'
import EventsListScreen from '../screens/EventsListScreen'
import NearYou from '../screens/NearYou'
import Icon from 'react-native-vector-icons/Ionicons'
import { createMaterialTopTabNavigator, createStackNavigator, ReactNavigationBackButton } from 'react-navigation'
import EvilIcons from 'react-native-vector-icons/EvilIcons'



const ListPageBottomTab = createMaterialTopTabNavigator({
	All:{
		screen:EventsListScreen,
		navigationOptions:{
			tabBarIcon:({tintColor}) => (
				<Icon name="ios-menu" color={tintColor} size={24} />
			),
		}
	},
	['Near you']:{
		screen:props => <NearYou {...props} />,
		navigationOptions:{
			tabBarIcon:({tintColor}) => {
				return <EvilIcons name="location" color={tintColor} size={26} />
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
}, 
	{
		initialRouteName:'All',
		tabBarPosition:'bottom',
		tabBarOptions:{
			activeTintColor:'#090b35',
		   inactiveTintColor:'grey',
			showLabel:true,
			labelStyle:{
				fontSize:10,
				padding:0,
				margin:0,
			},
			style:{
				backgroundColor:'#fff',
				paddingBottom:0,
				borderTopWidth:.4,
				borderTopColor:'#c1c1c1'
			},
			indicatorStyle:{
				backgroundColor:null
			},
			showIcon:true
		}
})


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
			activeTintColor:'#090b35',
		   inactiveTintColor:'grey',
			showLabel:false,
			style:{
				backgroundColor:'#fff',
				padding:0,
				margin:0,
				borderTopWidth:.4,
				borderTopColor:'#c1c1c1'
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
  		screen:ListPageBottomTab,
  		navigationOptions:{
  			header:null,
  			headerStyle:{
  				backgroundColor:'transparent'
  			}
  		}
  	},
  	Event:{
  		screen:EventScreen,
  		navigationOptions:{
  			header:null
  		}
  	}
})
 

export default Router