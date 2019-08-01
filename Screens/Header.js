import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const Headerbar = () => (

<View>
<Text style={styles.textTitle}>
Movies App
</Text>

</View>

)

const styles = StyleSheet.create({
  textTitle: {
    color: 'black',
    textAlign:'center',
    fontSize: 20,
    marginTop:15,
    fontWeight: 'bold'
    
  },
})

export default Headerbar
