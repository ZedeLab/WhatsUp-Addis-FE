import React, { Component } from "react";
import { Container, Header, Content, Accordion, View, Text, Icon, Card} from "native-base";
import { LinearGradient } from 'expo'
import { StyleSheet, ScrollView, Image } from 'react-native'
import { movieData } from '../config/movieData'

class ScheduleList extends Component {
  constructor(props){
    super(props)
  }


  _renderHeader = (title, expanded) => {
    return (
        <View style={styles.titleStyle}>

          <View>
            <Text style={{ fontWeight: "600", color:'white', fontFamily:'abel-regular', fontSize:22}}>
                {title.day}
            </Text>
          </View>

          <View>
            {expanded
              ? <Icon style={{ fontSize: 22, color:'white' }}  name="remove-circle" />
              : <Icon style={{ fontSize: 22, color:'white'}}  name="add-circle" />}
          </View>
        </View>
    );
  }


  _renderContent = (content) => {
    return (
      content.movies.map(movie => (
         <Card key={movie.id} style={styles.contentStyle}>
            <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                  <Image 
                    source={require('../imgs/avengers.jpg')} 
                    style={{width:90, height:100, flex:1, paddingLeft:10, borderRadius:70, overflow:'hidden'}} 
                  />

                <View style={{flex:1}}>
                    <Text style={{padding: 10 , color:'white'}} >
                      {movie.time}
                    </Text>
                    {
                      <Text style={{padding: 10, fontWeight:'bold', fontSize:24, fontFamily:'abel-regular', color:'white'}}>
                        {movie.movie}
                      </Text>
                    }
                </View>

            </View>
          </Card>
          
      ))
    );
  }


  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <LinearGradient colors={['rgba(3, 25, 46, .7)', 'rgba(29, 16, 3, .7)']}>
            <Accordion
              dataArray={movieData}
              renderHeader={this._renderHeader}
              renderContent={this._renderContent}
              style={{
                borderWidth:0,
                marginTop:3,

              }}
            />
          </LinearGradient>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle:{ 
    flexDirection: "row", 
    padding:20, 
    flex:1, 
    justifyContent: "space-between", 
    alignItems: "center", 
    borderWidth:0
  },
  contentStyle:{
    marginHorizontal:15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 10
    },
    shadowRadius: 15,
    shadowOpacity:.7,
    borderWidth:.4,
    borderColor:'#1a1a1a',
    backgroundColor:'transparent'
  }
})

export default ScheduleList