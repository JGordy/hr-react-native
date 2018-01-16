import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'

export default class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  componentWillMount() {
    fetch('https://house-rules-jgwrbs.herokuapp.com/api/gameList')
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({games: data});
    })
  }

  render () {
    console.log("Games: ", this.state.games);
    let gameList = this.state.games.map((game) => {
      return (
        <View key={game.id} style={styles.gameItem}>
          <Text style={styles.gameTitle}>
            {game.title}
          </Text>
          <Text style={styles.gameInfo}>
            {game.alternates.length} ways to play!
          </Text>
        </View>
      )
    })

    return (
      <ScrollView>
        {gameList}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  gameItem: {
    borderColor: '#d6d7da',
    borderRadius: 4,
    borderWidth: 0.5,
    flex: 1,
    flexDirection: 'row',
    height: 75,
    justifyContent: 'space-between',
    margin: 5,
    padding: 5,
    width: 400,
  },
  gameTitle: {
    color: 'gray',
    fontSize: 22,
  },
  gameInfo: {
    color: 'darkgray',
  }
})
