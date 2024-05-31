import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import ImageViewer from '../components/ImageViewer'
import Button from '../components/Button'

const bg = require('../assets/images/background-image.png')
const App = () => {

    return (
        <View style={styles.container}>
            <Text className='text-4xl text-purple-400'>Raiyan Kabir </Text>
            <View style={styles.imageContainer}>
                <ImageViewer />
            </View>
            <Button label='Choose a photo' theme='primary' />
            <Button label='Use this photo' />

            <Link href={'/profile'} style={{ color: 'red' }}>Go to Profile</Link>
            <StatusBar style='light' backgroundColor='purple' />
        </View>
    )
}

export default App

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#25292e',
        color: '#fff'
    },
    imageContainer: {
        flex: 1,
        paddingTop: 58,
    },
}) 