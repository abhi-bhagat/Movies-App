import React, { Component } from 'react';
import { Image } from 'react-native';
import axios from 'axios';
import { StyleSheet, View, ScrollView, Dimensions } from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
const {height} = Dimensions.get('window')

export default class Playing extends Component {


    state = {

        results: [],
        screenHeight:0
       }
      
      onContentSizeChange = (contentHeight) =>
      {
      
        this.setState({screenHeight:contentHeight});
      }
      
       componentDidMount = async() => 
       {
         const randomMovie = Math.ceil(Math.random()*10)
      
         const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=8367b1854dccedcfc9001204de735470&language=en-US&page=${randomMovie}`
      
         axios
         .get(url)
         .then(data => {
           this.setState({
             results:data.data.results
           })
         })
      
       }
      
      
      render()
      {
        const scrollEnabled = this.state.screenHeight > height 
       return(
         
      
         <ScrollView scrollEnabled={scrollEnabled}
         onContentSizeChange={this.onContentSizeChange}
         style={{padding: 10, maxWidth: '100%'}}>
            
            <View>
                {this.state.results.slice(0 ,1).map((result, i) =>  {
                  return (
      
                  <View key={i} >
      
                      
      
                     







                      <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri:`https://image.tmdb.org/t/p/w500/${result.poster_path}`}} />
                <Body>
                  <Text>{result.title}</Text>
                  <Text note>{result.release_date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri:`https://image.tmdb.org/t/p/w500/${result.poster_path}`}} style={{height: 200, width: '100%', flex: 1}}/>
                <Text>
                Popularity:<Text>{Math.round((result.popularity)/10)}%</Text>
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              
            </CardItem>
          </Card>
                    <View >
                        
                        <Text>
                          Movie description
                        </Text>
      
                        <Text>
                        {result.overview}
                        </Text>
      
                      </View>
                  </View>
      
      
      
           
        )
        } ) }
                  
            </View>
      
      
      
                
      </ScrollView>
                )
      
               
                    }

}