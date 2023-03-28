import React from 'react'
import { useParams } from 'react-router-native'
import StyledText from '../components/StyledText'
import { ScrollView, View, Image, StyleSheet, FlatList } from 'react-native'
import { games } from '../data/games'

const GameDetail = () => {
  const params = useParams()
  const id = params.id
  const { name, company, genre, price, images, imageHead, description } = games.filter((game) => game.id === parseInt(id))[0]
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image style={styles.imageHead} source={{ uri: imageHead }} />
          <View>
            <StyledText>{name}</StyledText>
            <StyledText>{company}</StyledText>
            <StyledText color='yellow'>{`${price}€`}</StyledText>
          </View>
        </View>
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
        <FlatList
          horizontal
          data={images}
          style={styles.list}
          contentContainerStyle={styles.contentList}
          renderItem={(({ item: image }) => <Image
            style={styles.images}
            source={{ uri: image }}
                                            />)}
        />
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
