import { Dimensions, StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react'

const { width } = Dimensions.get('window');

const ButtonComponent = ({ name, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.button_text}>{name}</Text>
            </View>
        </Pressable>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    button: {
        width: width - 70,
        height: 50,
        backgroundColor: '#00BF36',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 5,
        marginTop: 20,
    },
    button_text: {
        color: '#fff',
        fontSize: 15,
    },
})