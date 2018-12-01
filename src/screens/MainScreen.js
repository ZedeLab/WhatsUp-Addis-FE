import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, StatusBar } from 'react-native'
import Header from '../components/common/Header'
import EventCard from '../components/common/EventCard'
import FeaturedEvents from '../components/featuredEvents'
import TopEventsComponent from '../components/topEventsComponent'
import { Font, AppLoading } from 'expo'
import hotel from '../imgs/hotel.jpg'
import events2 from '../imgs/events2.jpg'
import food from '../imgs/food.jpg'
import events from '../imgs/events.jpg'
import Drawer from 'react-native-drawer'
import DrawerContent from '../components/DrawerContent'

class MainScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFontLoaded:false,
      isDrawerOpen:undefined
    }
  }

  componentDidMount(){
    this._loadAssetsAsync();
    this.setState({isDrawerOpen:false})
  }

  async _loadAssetsAsync(){
      try {
        await Font.loadAsync({
          'Catull': require('../../assets/fonts/Catull.ttf'),
          'abel-regular':require('../../assets/fonts/abel-regular.ttf')
        });
      }
      catch(e) {
        Log.error(e);
      }
      finally {
        this.setState({isFontLoaded: true});
      }
  }

 closeDrawer = () => {
    this._drawer.close()
    this.setState({isDrawerOpen:false})
 }

  openDrawer = () => {
    this._drawer.open()
    this.setState({isDrawerOpen:true})
  }

  componentWillUnmount(){
    this.setState({isDrawerOpen:false})
  }

  render() {

    if(!this.state.isFontLoaded){
      return <AppLoading />
    }

    const drawerStyles = {
      drawer: { backgroundColor:'#090b35', position:'absolute', top:0, left:0, right:0, bottom:0,zIndex:200000000000000000000000000 },
      main: {paddingLeft: 3}
    }

    return (
        <View style={styles.container}>
          <Drawer
            ref={(ref) => this._drawer = ref}
            open={this.state.isDrawerOpen}
            content={<DrawerContent closeDrawer={this.closeDrawer}/>}
            openDrawerOffset={0.3} // 20% gap on the right side of drawer
            panCloseMask={0.2}
            closedDrawerOffset={-3}
            styles={drawerStyles}
            tapToClose={true}    
             >
              <Header headerText={'WhatsUp Addis'} openDrawer={this.openDrawer} />
              <ScrollView>
                <FeaturedEvents />
                <TopEventsComponent 
                  topWhat={'New places'} 
                  moreDisabled={true} 
                  image={hotel} 
                  navigate={this.props.navigation.navigate}
                />
                <TopEventsComponent 
                  topWhat={'Restaurants of the week'} 
                  image={food} 
                  title={'Food'} 
                  headerImage={food}
                  navigate={this.props.navigation.navigate}
                />
                <TopEventsComponent 
                  topWhat={'Events this week'} 
                  image={events2} 
                  title={'Events'} 
                  headerImage={events}
                  navigate={this.props.navigation.navigate}
                />
              </ScrollView>
          </Drawer>
        </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#f4f2f2',
  }
});

export default MainScreen
