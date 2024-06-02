import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EmojiSticker({ imageSize, stickerSource }) {
    return (
        <View style={{ top: -350 }}>
            <Image
                source={stickerSource}
                resizeMode="contain"
                style={{ width: imageSize, height: imageSize }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})