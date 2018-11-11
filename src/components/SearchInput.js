import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import { Keyboard } from 'react-native'


class SearchInput extends Component {
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item style={{padding:5, flex:1}}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent style={{marginLeft:0, paddingLeft:0}} onPress={() => Keyboard.dismiss()}>
            <Text>Cancel</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}

export default SearchInput