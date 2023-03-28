import React from 'react'
import { StyleSheet, View } from 'react-native'
import constants from 'expo-constants'
import GamesList from './screens/GamesList'
import GameDetail from './screens/GameDetail'
import theme from './theme'

import { NativeRouter, Route, Routes } from 'react-router-native'
import Header from './components/Header'

const Main = () => {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Header />
        <Routes>
          <Route exact path='' element={<GamesList />} />
          <Route path='/detail/:id' element={<GameDetail />} />
        </Routes>
      </View>
    </NativeRouter>
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
  list: {
    flexDirection: 'column',
    paddingHorizontal: 20
  },
  item: {
    alignItems: 'center'
  }

})

export default Main
