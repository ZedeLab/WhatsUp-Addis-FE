import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';


const EventDescription = (props) => {
    return (
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={{fontFamily:'abel-regular'}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo .
                </Text>
              </Body>
            </CardItem>
         </Card>
        </Content>
    );
}

export default EventDescription