import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';


const EventDescription = (props) => {
    return (
          <Card style={{marginTop:10, borderRadius:15, backgroundColor:'white', padding:15}}>
              <Text style={{fontFamily:'abel-regular'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo .
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo .
              </Text>
         </Card>

    );
}

export default EventDescription