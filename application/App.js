/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropsChild from './propsChild';

class App extends Component {
  state = {
    sampleText: 'Hello World',
    sampleBoolean: false,
    sampleNum: 0,
  };

  inputText = () => {
    this.state.sampleBoolean ? 
      <Text>sampleBoolean is true</Text>
    : 
      <Text>sampleBoolean is false</Text>
  };

  changeState = () => {
    if (!this.state.sampleBoolean) {
      this.setState({
        sampleText: 'changeState - true',
        sampleBoolean: true,
      });
    } else {
      this.setState({
        sampleText: 'changeState - false',
        sampleBoolean: false,
      });
    }
  };

  onAdd = () => {
    this.setState(prevState => {
      return {
        sampleNum: prevState.sampleNum + 1,
      };
    });
  };

  styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 320,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

  render() {
    return (
      <View style={this.styles.sectionContainer}>
        <PropsChild sampleText={this.state.sampleText} changeState={this.changeState}/>
      </View>
    );
  }
}

export default App;
