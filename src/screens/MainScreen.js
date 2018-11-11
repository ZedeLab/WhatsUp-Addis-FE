import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import Header from '../components/common/Header'


class MainScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'WhatsUp Addis'} />
        <Text style={styles.textStyle}>
          New and Featured Places will appear here
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});

export default MainScreen
