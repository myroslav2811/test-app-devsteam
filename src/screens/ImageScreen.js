import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import { ImageBlurLoading } from '../components/ImageBlurLoading'

export const ImageScreen = ({ route, toggleTab }) => {
  const { item } = route.params
  return (
    <TouchableOpacity style={styles.container} onPress={toggleTab} >
      <ImageBlurLoading
        withIndicator
        thumbnailSource={{ uri: item.urls.thumb }}
        source={{ uri: item.urls.full }}
        style={styles.image}
        indicatorColor='#fff'
      />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
    backgroundColor: '#000'
  },
  indicatorStyle: {

  }
})