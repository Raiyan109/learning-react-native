import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const bg = require('../assets/images/background-image.png')

export default function ImageViewer({ selectedImg }) {
    // const imageSource = selectedImage  ? { uri: selectedImage } : placeholderImageSource;
    const imgView = selectedImg ? selectedImg : bg;
    return (
        <View>
            <Image
                source={imgView}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 440,
        borderRadius: 18,
    },

})