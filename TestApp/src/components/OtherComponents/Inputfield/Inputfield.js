import React from 'react';
import { Dimensions, StyleSheet, View, TextInput, Animated } from 'react-native';


const { width } = Dimensions.get('window');
const Inputfield = ({ label, value, onChangeText }) => {
    return (
        <View>
            <TextInput placeholder={label} style={styles.input} value={value} onChangeText={onChangeText} />
        </View>
    );
}

export default Inputfield

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#BDBCDB',
        padding: 10,
        width: width - 70,
        height: 50,
        alignSelf: 'center',
        borderRadius: 5,
    },

})