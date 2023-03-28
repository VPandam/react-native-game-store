import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-native'
import { ScrollView, View, StyleSheet } from 'react-native'
import { addListenerToBackButton } from '../functions/functions'
import { games } from '../data/games'
import StyledText from '../components/StyledText'
import HorizontalCarousel from '../components/GameDetail/HorizontalCarousel'
import GameGenre from '../components/GameDetail/GameGenre'
import GameDetailHeader from '../components/GameDetail/GameDetailHeader'

const GameDetail = () => {
  const navigate = useNavigate()
  useEffect(() => {
    return addListenerToBackButton(navigate)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const params = useParams()
  const id = params.id
  const {
    name,
    company,
    genre,
    price,
    images,
    imageHead,
    description
  } = games.filter((game) => game.id === parseInt(id))[0]
  return (
    <ScrollView>
      <View style={styles.container}>
        <GameDetailHeader
          company={company}
          imageHead={imageHead}
          price={price} name={name} styles={styles}
        />
        <GameGenre genre={genre} styles={styles} />
        <HorizontalCarousel images={images} styles={styles} />
        <View style={styles.description}>
          <StyledText>{description}</StyledText>
        </View>
      </View>
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1
  },
  headerContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10
  },
  imageHead: {
    height: 200,
    width: 150,
    borderRadius: 5
  },
  genreContainer: { flexDirection: 'row', flexWrap: 'wrap' },
  images: {
    width: 300,
    height: 200
  },
  list: {
    paddingVertical: 10
  },
  contentList: {
    gap: 5
  },
  description: {
    marginTop: 10
  }
})

export default GameDetail
