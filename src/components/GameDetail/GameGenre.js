import React from 'react'
import { View } from 'react-native'
import StyledText from '../StyledText'

const GameGenre = ({ styles, genre }) => {
  return (
    <View style={styles.genreContainer}>
      {genre?.map((genreItem, key) => {
        return (
          <View key={key} style={{ flexDirection: 'row' }}>
            {key === 0 ? null : <StyledText bold fontSize={25}> · </StyledText>}
            <StyledText>{genreItem}</StyledText>
          </View>
        )
      })}
    </View>
  )
}

export default GameGenre
