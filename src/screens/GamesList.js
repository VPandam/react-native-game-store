import React from 'react'
import { games } from '../data/games'
import GameItem from '../components/GameItem'
import { StyleSheet, FlatList, View } from 'react-native'
import constants from 'expo-constants'
import theme from '../theme'
const GamesList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        contentContainerStyle={styles.item}
        data={games}
        numColumns='2'
        renderItem={(item) => {
          return (
            <GameItem {...item.item} />
          )
        }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: constants.statusBarHeight,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.primaryColor,
    overflow: 'scroll'
  },
  header: {
    backgroundColor: '#999',
    paddingTop: 15,
    paddingBottom: 5,
    paddingHorizontal: 20
  },
  list: {
    flexDirection: 'column',
    paddingHorizontal: 20
  },
  item: {
    alignItems: 'center'
  }

})

export default GamesList
