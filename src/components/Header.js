import React from 'react'
import { Link } from 'react-router-native'
import { View, StyleSheet, Image } from 'react-native'
import HouseImage from '../data/Home.png'
import theme from '../theme'

const Header = () => {
  return (
    <View style={styles.header}>
      <Link to=''><Image style={{ height: 30, width: 30 }} source={HouseImage} /></Link>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: theme.colors.secondaryColor,
    padding: 15,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
})
export default Header
