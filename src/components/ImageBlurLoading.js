import React, { useState } from 'react';
import {
    View,
    Animated,
    ActivityIndicator,
    StyleSheet
} from 'react-native';

export const ImageBlurLoading = (props) => {


    const [imgAnim, setImgAnim] = useState(new Animated.Value(0))
    const [thumbnailAnim, setThumbnailAnim] = useState(new Animated.Value(0))
    const [isLoading, setIsLoading] = useState(true)


    const handleThumbnailLoad = () => {
        setIsLoading(false)
        Animated.timing(thumbnailAnim, {
            toValue: 1,
            useNativeDriver: true
        }).start()
    }
    const onImageLoad = () => {
        setIsLoading(false)
        Animated.timing(imgAnim, {
            toValue: 1,
            useNativeDriver: true
        }).start()
    }



    const {
        withIndicator,
        thumbnailSource,
        source,
        style,
        indicatorColor
    } = props
    return (
        <View style={[styles.container, style]}>
            <Animated.Image
                {...props}
                source={thumbnailSource}
                style={[style, { opacity: thumbnailAnim }]}
                onLoad={handleThumbnailLoad}
                blurRadius={1}
            />
            <Animated.Image
                {...props}
                source={source}
                style={[styles.imageOverlay, style, { opacity: imgAnim }]}
                onLoad={onImageLoad}
            />
            {
                withIndicator &&
                isLoading &&
                <View style={[styles.imageOverlay, styles.centerSection]}>
                    <ActivityIndicator color={indicatorColor} />
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
    },
    imageOverlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    centerSection: {
        justifyContent: 'center',
        alignItems: 'center',
    }
});