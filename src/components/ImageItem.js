import React from 'react'
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native'

export const ImageItem = ({ item, openImageHandler }) => {
    const onPressHandler = () => {
        openImageHandler(item)
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPressHandler}>
            <ImageBackground source={{ uri: item.urls.small }} style={styles.image} >
                <View style={styles.textWrapper}>
                    <Text style={styles.imageAuthor}>{item.user.username}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 5,
        borderBottomWidth: 1,
        flex: 1 / 2,
        aspectRatio: 1
    },
    image: {
        resizeMode: 'cover',
        flex: 1
    },
    imageAuthor: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#fff'
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'flex-end'
    }
})