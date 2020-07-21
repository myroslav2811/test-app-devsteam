import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FlatList, View, ActivityIndicator, StyleSheet } from 'react-native'

import { fetchImages } from '../store/actions/imagesActions'
import { ImageItem } from './ImageItem'

export const ImageList = ({ navigation }) => {
    const dispatch = useDispatch()
    const { images, loading } = useSelector(state => state.images)
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(fetchImages())
    }, [])

    const loadMore = () => {
        if (!loading) {
            setPage(page + 1)
            dispatch(fetchImages(page))
        }
    }

    const openImage = (item) => {
        navigation.navigate('Image', { item })
    }

    const RenderFooter = () => {
        return (<View style={styles.loader}>
            <ActivityIndicator size='large' color='#000' />
        </View>
        )
    }

    return (
        <FlatList
            data={images}
            renderItem={(({ item }) => (<ImageItem item={item} openImageHandler={openImage} />))}
            keyExtractor={(_, index) => index.toString()}
            initialNumToRender={10}
            numColumns={2}
            onEndReached={loadMore}
            ListFooterComponent={RenderFooter} 
            />

    )

}

const styles = StyleSheet.create({
    loader: {
        paddingVertical: 10,
        alignItems: 'center'
    }
})