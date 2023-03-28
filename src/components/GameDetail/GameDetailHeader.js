import React from 'react'
import { View, Image } from 'react-native'
import StyledText from '../StyledText'

const GameDetailHeader = ({ styles, imageHead, name, company, price }) => {
  return (
    <View style={styles.headerContainer}>
      <Image style={styles.imageHead} source={{ uri: imageHead }} />
      <View>
        <StyledText>{name}</StyledText>
        <StyledText>{company}</StyledText>
        <StyledText color='yellow'>{`${price}€`}</StyledText>
      </View>
    </View>
  )
}

export default GameDetailHeader
