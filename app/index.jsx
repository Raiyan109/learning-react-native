import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import ImageViewer from '../components/ImageViewer'
import Button from '../components/Button'
import * as ImagePicker from 'expo-image-picker'

const bg = require('../assets/images/background-image.png')
const App = () => {
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1
        })
        if (!result.canceled) {
            console.log(result);
        }
        else {
            alert('You have not choose any image!')
        }
    }
    return (
        <View style={styles.container}>
            <Text className='text-4xl text-purple-400'>Raiyan Kabir </Text>
            <View style={styles.imageContainer}>
                <ImageViewer />
            </View>
            {/* Button for image picker */}
            <Button label='Choose a photo' theme='primary' onPress={pickImage} />
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