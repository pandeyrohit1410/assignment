import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, Pressable } from 'react-native';
import Inputfield from '../../OtherComponents/Inputfield/Inputfield';
import ButtonComponent from '../../OtherComponents/ButtonComponent/ButtonComponent';
import { useNavigation } from '@react-navigation/native';


const { height, width } = Dimensions.get('window');

const WelcomeScreenComponent = () => {
    const [name, setName] = useState('');
    const navigation = useNavigation();
    const handleHomeScreen = () => {
        navigation.navigate('homescreen', { name });
    };
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Inputfield label={"Name"} value={name} onChangeText={setName} />
                <ButtonComponent name={"Get Started"} onPress={() => handleHomeScreen()} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    wrapper: {
        height: height / 4,
        width: width - 50,
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#D14580',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        elevation: 8,
    },


});

export default WelcomeScreenComponent;
