import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import image from '../../imgs/hotel.jpg'


 class EventCard extends Component {
  render() {
    return (
        <Content style={{margin:10}}>
          <Card>
            <CardItem>
                <View style={{justifyContent:'center', alignItems:'flex-start'}}>
                  <Text style={{paddingLeft:5}}>Company</Text>

                  <View style={{flexDirection:'row'}}>
                    <EvilIcons name="location" size={25} color="green" />
                    <Text style={{color:'#666464'}}>
                      Bole, Welo sefer
                    </Text>
                  </View>

                </View>
            </CardItem>

            <CardItem cardBody>
              <Image source={require('../../imgs/cafe.jpg')} style={{height: 150, width: null, flex: 1}}/>
            </CardItem>

            <CardItem>

            <Body>
                <Text>description description description description description...</Text>
            </Body>
            <Button 
                transparent style={{borderWidth:2, borderColor:'#1C2331'}} 
                onPress={() => this.props.onPress('company name', image)}
              >
              <Text style={{color:'#1C2331'}}>View</Text>
            </Button>

            </CardItem>
          </Card>
        </Content>
    );
  }
}

export default EventCard