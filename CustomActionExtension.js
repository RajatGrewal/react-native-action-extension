import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  NativeModules
} from 'react-native';
var RCTActionExtension = NativeModules.ActionExtension

export default class ActionExtensionScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hello from our Action Extension!</Text>
        <Button
          title = "Close Action Extension"
          accessibilityLabel = "Click this button to go back to the parent app"
          color = "#841584"
          onPress = {this.closeExtension}
        />
      </View>
    )
  }

  closeExtension(){
    //Calling the done method declared in ActionViewController.m using NativeModules
    console.log("Button is pressed");
    RCTActionExtension.done()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  }
});
