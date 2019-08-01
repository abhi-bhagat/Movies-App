import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon,Item,Input, Title, Segment, Content, Text } from 'native-base';
import People from './SearchComponents/People'
import Movies from './SearchComponents/Movies'
import Tvshows from './SearchComponents/Tvshows'

export default class Search extends Component {


  state =
  {
    selectedTab:'movies'
  }
  
  
  
    renderSelectedTab () {
      switch (this.state.selectedTab) {
        case 'movies':
          return (<Movies />);
          break;
        case 'people':
          return (<People />);
          break;
        case 'tvshows':
          return (<Tvshows />);
          break;
        default:
      }
    }
  

    
  render() {
    return (
      <Container>
        
        <Segment >
          <Button first active ={this.state.selectedTab==='movies'} 
               onPress={() => this.setState({selectedTab: 'movies'})} >
            <Text>Movies</Text>
          </Button>
          <Button active ={this.state.selectedTab==='people'} 
               onPress={() => this.setState({selectedTab: 'people'})} >
            <Text>People</Text>
          </Button>
          <Button last active ={this.state.selectedTab==='tvshows'} 
               onPress={() => this.setState({selectedTab: 'tvshows'})} >
            <Text>TV Shows</Text>
          </Button>
        </Segment>
        


        <Content padder>
        {this.renderSelectedTab()}
        </Content>
      </Container>
    );
  }
}