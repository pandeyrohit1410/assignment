import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';
import Image from 'react-native-vector-icons/Foundation';
import LinearGradient from 'react-native-linear-gradient';

const PrizeComponent = ({ prize, winners, winPrize }) => {
    return (
        <View style={styles.middle}>
            <View style={styles.middle_container}>
                <Text style={styles.total_prize}>{`Total Prize ₹${prize}Cr`}</Text>
                <Icon name="angle-down" size={13} color="#666666" style={styles.down_icon} />
            </View>
            <View style={styles.middle_container}>
                <Icon name="trophy" size={14} color="#F8B64C" style={styles.down_icon} />
                <Text style={styles.winners}>{`${winners}% Winners`}</Text>
            </View>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                colors={['#D14580', '#5287D8']}
                style={styles.linearGradient}>
                <Image name="graph-bar" size={15} color="white" />
                <Text style={styles.win_1cr}>{`Win ${winPrize}Cr`}</Text>
                <Icon name="angle-right" size={11} color="white" style={styles.down_icon} />
            </LinearGradient>
        </View>
    )
}

export default PrizeComponent

const styles = StyleSheet.create({
    middle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginLeft: 6,
    },
    middle_container: {
        flexDirection: 'row',
        gap: 4,
        marginTop: 5,
    },
    down_icon: {
        marginTop: 2,
    },
    total_prize: {
        fontSize: 10.3,
        fontWeight: '500',
        color: '#666666',
        fontFamily: 'Roboto',
        marginLeft: 5,
    },
    winners: {
        fontSize: 10.3,
        fontWeight: '500',
        color: '#666666',
        fontFamily: 'Roboto',
    },
    linearGradient: {
        height: 30,
        width: 90,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        flexDirection: 'row',
        gap: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    win_1cr: {
        fontSize: 10.3,
        fontWeight: '500',
        color: 'white',
        fontFamily: 'Roboto',
    },
})