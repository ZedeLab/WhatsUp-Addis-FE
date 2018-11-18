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


class MainScreen extends Component {
  constructor(props){
    super(props);
    this.state = {
      isFontLoaded:false
    }
  }

  componentDidMount(){
    this._loadAssetsAsync();
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

  render() {

    if(!this.state.isFontLoaded){
      return <AppLoading />
    }

    return (
        <View style={styles.container}>
          <Header headerText={'WhatsUp Addis'} />
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
