import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native'
import Header from '../components/common/Header'
import CardOverlay from '../components/CardOverlay'
import event from '../imgs/events.jpg'
import club from '../imgs/clubs.jpg'
import hotel from '../imgs/hotel.jpg'
import cafe from '../imgs/cafe.jpg'
import kids from '../imgs/kids.jpg'
import cinema from '../imgs/cinema.jpg'

class CategoryScreen extends Component{
  render() {
    return (
      <View style={styles.container}>
         <View style={styles.headerStyle}>
            <Header headerText={'What are you looking for ?'} fontSize={'small'}/>
         </View>
         <ScrollView>
           <View style={styles.overlayCard}>
               <CardOverlay 
                  cardText={'Events'} background={event} 
                  onPress={() => this.props.navigation.navigate('ListPage', {title:'Events', headerImage:event})}
               />
               <CardOverlay 
                  cardText={'Cinemas'} 
                  background={cinema}
                  onPress={() => this.props.navigation.navigate('ListPage', {title:'Cinemas', headerImage:cinema})}
                />
               <CardOverlay 
                  cardText={'Hotels'} 
                  background={hotel}
                  onPress={() => this.props.navigation.navigate('ListPage', {title:'Hotels', headerImage:hotel})}
                />
               <CardOverlay 
                  cardText={'Cafes'} 
                  background={cafe} 
                  onPress={() => this.props.navigation.navigate('ListPage', {title:'Cafes', headerImage:cafe})}
                />
               <CardOverlay 
                  cardText={'Clubs/Lounges'} 
                  background={club}
                  onPress={() => this.props.navigation.navigate('ListPage', {title:'Club/Lounges', headerImage:club})}
                />
               <CardOverlay 
                  cardText={'Kids'} 
                  background={kids}
                  onPress={() => this.props.navigation.navigate('ListPage', {title:'Kids', headerImage:kids})}
                />

           </View>
         </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  headerStyle:{
    marginBottom:20
  },
  overlayCard:{
    flex:1,
    marginHorizontal:10,
  }
});

export default CategoryScreen