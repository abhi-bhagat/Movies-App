import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, Image } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base'

const { height } = Dimensions.get('window')

class Toprated extends Component {
    state = {
        results: [],
        screenHeight: 0
    }

    onContentSizeChange = (contentWidth, contentHeight) => {
        this.setState({ screenHeight: contentHeight });
    }

    componentDidMount = async() => {
        const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=8367b1854dccedcfc9001204de735470&language=en-US&page=1`

        fetch(url)
            .then(data => data.json())
                .then(data => {
                    this.setState({
                        results: data.results
                    })
                })
    }

    render() {
        const scrollEnabled = this.state.screenHeight > height;

        return (
            <ScrollView
                scrollEnabled={scrollEnabled}
                onContentSizeChange={this.onContentSizeChange}
                style={{padding: 10, maxWidth: '100%', marginBottom: 210}}
            >
                <View style={styles.container}>
                    {this.state.results.slice(0, 10).map((result, i) => {
                        return (
                           





                            <View key={i} >
                                

                                <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.Title}>{result.title}</Text>
                  
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: `https://image.tmdb.org/t/p/original/${result.poster_path}`}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              
              <Body>
              <Text numberOfLines={4}>{result.overview}</Text>
              </Body>
              
            </CardItem>
          </Card>



                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 5,
    }
})

export default Toprated