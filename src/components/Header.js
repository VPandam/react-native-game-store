import React from 'react'
import { useNavigate } from 'react-router-native'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import HouseImage from '../../assets/Home.png'
import theme from '../theme'

const Header = () => {
  const navigate = useNavigate()
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigate('')}>
        <Image style={{ height: 30, width: 30 }} source={HouseImage} />
      </TouchableOpacity>
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
