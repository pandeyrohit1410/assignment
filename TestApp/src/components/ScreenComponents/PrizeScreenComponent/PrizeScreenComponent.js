import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Logo from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window')

const PrizeScreenComponent = ({ name }) => {
    const navigation = useNavigation();
    const handleBack = () => {
        navigation.goBack();
    };
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Logo name="arrow-left" size={30} color="#F3F3F7" onPress={() => handleBack()} />
                <Text style={styles.top_name}>{'Hello'} {name}</Text>
            </View>
            <View style={styles.prize}>
                <Text style={styles.prize_text}>{`This is Prize Screen`}</Text>
            </View>
        </View>
    )
}

export default PrizeScreenComponent

const styles = StyleSheet.create({
    container: {
        height: height,
        width: width,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    wrapper: {
        width: width,
        height: 70,
        backgroundColor: '#391976',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        padding: 10,
    },
    top_name: {
        fontSize: 17,
        fontWeight: '900',
        color: '#F3F3F7',
        fontFamily: 'Roboto',
    },
    prize: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    prize_text: {
        fontSize: 17,
        fontWeight: '900',
        color: '#333333',
        fontFamily: 'Roboto',
    },
})