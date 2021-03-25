/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {

  state = {
    sampleText: 'Hello World',
    sampleBoolean: false
  }

  inputText = () => {
    this.state.sampleText ?
      <Text>sampleBoolean is true</Text>
    :
      <Text>sampleBoolean is false</Text>
  }

  render() {
    return (
      <View>
        <Text>{this.state.sampleText}</Text>
      </View>
    )
  }
}

export default App;