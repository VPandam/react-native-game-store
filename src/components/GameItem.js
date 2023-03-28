import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import StyledText from './StyledText'
import { Link } from 'react-router-native'

const GameItem = ({ name, imageHead, id }) => {
  const numColumns = 2
  const windowWidth = Dimensions.get('window').width
  const itemWidth = (windowWidth - 50 - (numColumns - 1) * 10) / numColumns
  return (
    <View style={{ ...styles.container, width: itemWidth }}>
      <Link to={`/detail/${id}`}>
        <View>
          <Image style={{ ...styles.imageHead, width: itemWidth }} source={{ uri: imageHead }} />
          <StyledText>{name}</StyledText>
        </View>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center'

  },
  imageHead: {
    height: 230,
    marginBottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    resizeMode: 'cover'
  }
})

export default GameItem
