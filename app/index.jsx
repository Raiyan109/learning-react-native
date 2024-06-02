import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import ImageViewer from '../components/ImageViewer'
import Button from '../components/Button'
import * as ImagePicker from 'expo-image-picker'
import CircleButton from '../components/CircleButton'
import IconButton from '../components/IconButton'
import EmojiPicker from '../components/EmojiPicker'
import EmojiList from '../components/EmojiList'
import EmojiSticker from '../components/EmojiSticker'

const bg = require('../assets/images/background-image.png')

const App = () => {
    const [selectedImg, setSelectedImg] = useState(null)
    const [addOptions, setAddOptions] = useState(false)
    // state for open/close emoji modal
    const [isModalVisible, setIsModalVisible] = useState(false)
    // state for emoji list show
    const [pickedEmoji, setPickedEmoji] = useState(null);
    // Function for image picker
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1
        })
        if (!result.canceled) {
            setSelectedImg(result.assets[0].uri);
            // setSelectedImg(result.assets)
            setAddOptions(true)
        }
        else {
            alert('You have not choose any image!')
        }
    }

    // Function for add image
    const onReset = () => {
        setAddOptions(false);
    };

    const onAddSticker = () => {
        setIsModalVisible(true)
    };

    const onSaveImageAsync = async () => {
        // we will implement this later
    };

    // To close emoji picker modal
    const onModalClose = () => {
        setIsModalVisible(false)
    }
    return (
        <View style={styles.container}>
            <Text className='text-4xl text-purple-400'>Raiyan Kabir </Text>
            <View style={styles.imageContainer}>
                <ImageViewer selectedImg={selectedImg} bg={bg} />
                {pickedEmoji &&
                    <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
                }
            </View>
            {/* Button for image picker */}
            {addOptions ? (
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <IconButton icon="refresh" label="Reset" onPress={onReset} />
                        <CircleButton onPress={onAddSticker} />
                        <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                    </View>
                </View>
            ) : (
                <View>
                    <Button label='Choose a photo' theme='primary' onPress={pickImage} />
                    <Button label='Use this photo' onPress={() => setAddOptions(true)} />
                </View>
            )}
            <EmojiPicker onClose={onModalClose} isVisible={isModalVisible}>
                <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
            </EmojiPicker>
            {/* <Link href={'/profile'} style={{ color: 'red' }}>Go to Profile</Link> */}
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
    optionsContainer: {
        position: 'absolute',
        bottom: 80,
    },
    optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
}) 