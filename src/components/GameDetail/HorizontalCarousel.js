import React from 'react'
import { FlatList, Image } from 'react-native'

const HorizontalCarousel = ({ images, styles }) => {
  return (
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
  )
}

export default HorizontalCarousel
