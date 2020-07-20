import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const App = () => {
  return (
    <View style={styles.wrapper}>
      <Text>Hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App
