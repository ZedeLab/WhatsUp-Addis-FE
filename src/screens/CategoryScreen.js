import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, ScrollView, FlatList } from 'react-native'
import Header from '../components/common/Header'
import CardOverlay from '../components/CardOverlay'
import { categories } from '../config/categories'



class CategoryScreen extends Component{


  render() {
    return (
      <View style={styles.container}>
         <View style={styles.headerStyle}>
            <Header headerText={'What are you looking for ?'} fontSize={'small'}/>
         </View>
         <ScrollView>
           <View style={styles.overlayCard}>
              <FlatList 
                data={categories}
                renderItem = {({item}) => (
                    <CardOverlay 
                      cardText={item.title} 
                      background={item.image} 
                      onPress={() => this.props.navigation.navigate('ListPage', {title:item.title, headerImage:item.image, category:item.title})}
                   />
                )}
                keyExtractor={item => item.title}
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