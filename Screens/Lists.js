import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon,Item,Input, Title, Segment, Content, Text } from 'native-base';
import Popularmovies from './ListScreens/PopularMovies'
import Toprated from './ListScreens/Toprated'
import Upcoming from './ListScreens/Upcoming'

export default class Lists extends Component {


  state =
  {
    selectedTab:'upcoming'
  }
  
  
  
    renderSelectedTab () {
      switch (this.state.selectedTab) {
        case 'upcoming':
          return (<Upcoming />);
          break;
        case 'popular':
          return (<Popularmovies />);
          break;
        case 'toprated':
          return (<Toprated />);
          break;
        default:
      }
    }
  

    
  render() {
    return (
      <Container>
        
        <Segment >
          <Button first active ={this.state.selectedTab==='upcoming'} 
               onPress={() => this.setState({selectedTab: 'upcoming'})} >
            <Text>Upcoming</Text>
          </Button>
          <Button active ={this.state.selectedTab==='popular'} 
               onPress={() => this.setState({selectedTab: 'popular'})} >
            <Text>Popular</Text>
          </Button>
          <Button last active ={this.state.selectedTab==='toprated'} 
               onPress={() => this.setState({selectedTab: 'toprated'})} >
            <Text>Top Rated</Text>
          </Button>
        </Segment>
        


        <Content padder>
        {this.renderSelectedTab()}
        </Content>
      </Container>
    );
  }
}