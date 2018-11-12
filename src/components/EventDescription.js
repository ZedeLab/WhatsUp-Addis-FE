import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';


class EventDescription extends Component {
  render() {
    return (
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
        </Content>
    );
  }
}

export default EventDescription