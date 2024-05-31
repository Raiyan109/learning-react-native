import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


const bg = require('../assets/images/background-image.png')

export default function ImageViewer() {
    return (
        <View>
            <Image
                source={bg}
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