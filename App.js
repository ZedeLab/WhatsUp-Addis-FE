import React from 'react';
import { StyleSheet, View, SafeAreaView  } from 'react-native';
import Router from './src/routes'


class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
          <Router />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})

export default App

