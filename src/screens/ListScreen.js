import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import { ImageList } from '../components/ImageList'

export const ListScreen = ({ navigation }) => {
  return (
    <ImageList navigation={navigation} />
  )
}


const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: 'bold',
    fontSize: 25
  }
})