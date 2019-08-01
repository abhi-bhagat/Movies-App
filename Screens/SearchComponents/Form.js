import React, { Component } from 'react'
import { View, TextInput, StyleSheet, Keyboard } from 'react-native'

class Form extends Component {
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          this._keyboardDidShow,
        )
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          this._keyboardDidHide,
        )
      }
    
    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    
      _keyboardDidShow() {
        console.log('Keyboard Shown');
      }
    
      _keyboardDidHide() {
        console.log('Keyboard Hidden');
      }

    render() {
        return(
            <View style={styles.container}>
                <TextInput 
                    style={styles.searchBox}
                    placeholder = 'search'
                    placeholderTextColor = '#000'
                    onSubmitEditing={Keyboard.dismiss}
                    onEndEditing={this.props.onSubmit}
                    onChangeText={this.props.onChangeText}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBox: {
        width: 300,
        height: 40,
        backgroundColor: 'lightblue',
        marginTop: 10,
        borderRadius: 25,
        paddingLeft: 20,
    }
})

export default Form