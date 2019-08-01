
import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import Lists from './Screens/Lists'
import Playing from './Screens/Playing'

import Headerbar from './Screens/Header'
import Search from './Screens/Search'


export default class App extends React.Component {


  state =
{
  selectedTab:'screen'
}



  renderSelectedTab () {
    switch (this.state.selectedTab) {
      case 'screen':
        return (<Playing />);
        break;
      case 'search':
        return (<Search />);
        break;
      case 'lists':
        return (<Lists />);
        break;
      default:
    }
  }



  render() {
    return (
      <Container>
        <Header>
        <Headerbar/>
        </Header>

        <Content>
          {this.renderSelectedTab()}
        </Content>

        <Footer>
          <FooterTab>
            <Button vertical active ={this.state.selectedTab==='screen'} 
               onPress={() => this.setState({selectedTab: 'screen'})} >
              <Icon active name="play" />
              <Text>Screens</Text>
            </Button>
            <Button vertical active ={this.state.selectedTab==='search'} 
               onPress={() => this.setState({selectedTab: 'search'})} >
              <Icon active name="search" />
              <Text>Search</Text>
            </Button>
            <Button vertical active ={this.state.selectedTab==='lists'} 
               onPress={() => this.setState({selectedTab: 'lists'})} >
              <Icon active name="list" />
              <Text>Lists</Text>
            </Button>
            
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

