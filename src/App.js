import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { View, StyleSheet } from 'react-native'

import { ImageScreen } from './screens/ImageScreen'
import { ListScreen } from './screens/ListScreen'
import store from './store'

const Stack = createStackNavigator()

const headerBackground = () => (
  <View style={styles.header} />
)

const App = () => {
  const [hideTab, setHideTab] = useState(true)

  const toggleTab = () => {
    setHideTab(!hideTab)
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Images"
            component={ListScreen} />
          <Stack.Screen name="Image"
            options={({ route }) => ({
              title: route.params.item.id,
              headerBackground,
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerTransparent: true,
              headerShown: hideTab
            })} >
            {(props) => <ImageScreen {...props} toggleTab={toggleTab} />}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    opacity: 0.4,
    height: '100%'
  }
})

export default App
