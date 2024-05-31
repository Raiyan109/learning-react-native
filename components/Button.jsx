import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button({ label, theme }) {
    if (theme === 'primary') {
        return (
            <View style={styles.buttonContainer}>
                <Pressable style={[styles.button, { backgroundColor: 'pink' }]} onPress={() => alert('Button pressed')}>
                    <Text style={[styles.buttonLabel, { color: 'black' }]}>{label}</Text>
                </Pressable>
            </View>
        )
    }

    return (
        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => alert('Button pressed')}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 68,
        marginHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
    },
    button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'purple'
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    },
});