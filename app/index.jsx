import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import ImageViewer from '../components/ImageViewer'
import Button from '../components/Button'
import * as ImagePicker from 'expo-image-picker'
import CircleButton from '../components/CircleButton'
import IconButton from '../components/IconButton'
import EmojiPicker from '../components/EmojiPicker'
import EmojiList from '../components/EmojiList'
import EmojiSticker from '../components/EmojiSticker'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import * as MediaLibrary from 'expo-media-library'
import { captureRef } from 'react-native-view-shot'

const bg = require('../assets/images/background-image.png')

const App = () => {
    const [selectedImg, setSelectedImg] = useState(null)
    const [addOptions, setAddOptions] = useState(false)
    // state for open/close emoji modal
    const [isModalVisible, setIsModalVisible] = useState(false)
    // state for emoji list show
    const [pickedEmoji, setPickedEmoji] = useState(null);
    // state for request permission
    const [status, requestPermission] = MediaLibrary.usePermissions()

    // ref for screenshot
    const imageRef = useRef()

    // check request permission is null
    if (status === null) {
        requestPermission()
    }
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

    // Saving the screenshot
    const onSaveImageAsync = async () => {
        try {
            const localUri = await captureRef(imageRef, {
                height: 440,
                quality: 1
            })
            await MediaLibrary.saveToLibraryAsync(localUri)
            if (localUri) {
                alert('Screenshot saved!')
            }
        } catch (error) {
            console.log(error);
        }
    };

    // To close emoji picker modal
    const onModalClose = () => {
        setIsModalVisible(false)
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <View style={styles.imageContainer}>
                <View ref={imageRef} collapsable={false}>
                    <ImageViewer selectedImg={selectedImg} bg={bg} />
                    {pickedEmoji &&
                        <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
                    }
                </View>
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
        </GestureHandlerRootView>
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