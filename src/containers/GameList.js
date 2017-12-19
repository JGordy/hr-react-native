import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'

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
        <Text
        keyExtractor={game => game.id}
        >{game.title}</Text>
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

  }
})
