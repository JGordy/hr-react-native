import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameList from './src/containers/GameList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Shake your phone to open the developer menu.</Text>
        <GameList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
