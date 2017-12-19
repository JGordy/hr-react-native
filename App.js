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
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameList: {
    marginTop: 50,
  }
});
