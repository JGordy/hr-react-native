import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GameList from './src/containers/GameList';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GameList style={styles.gameList} />
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
  },
  gameList: {
    marginTop: 50,
  }
});
