import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import Header from '../components/common/Header'
import EventCard from '../components/common/EventCard'

class MainScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'WhatsUp Addis'} />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default MainScreen
