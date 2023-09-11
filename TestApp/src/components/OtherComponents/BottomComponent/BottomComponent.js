import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Logo from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';

const BottomComponent = ({ team, totleTeam, verified, winners, users }) => {
  return (
    <View style={styles.middle}>
      <View>
        <Text style={styles.total_prize}>{`${team}/${totleTeam} teams`}</Text>
        <LinearGradient
          start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
          colors={['#FFB84F', '#FA547C']} style={styles.linearGradient}></LinearGradient>
      </View>
      <View style={styles.middle_wrapper}>
        <View style={styles.middle_container}>
          <Logo name="shield-check" size={21} color="#0E7DDC" style={styles.shield_icon} />
          <Text style={styles.hundred}>{verified}</Text>
        </View>
        <View style={styles.middle_container}>
          <Logo name="lightning-bolt" size={20} color="#666666" style={styles.light_icon} />
          <Text style={styles.winners}>{winners}</Text>
        </View>
        <View style={styles.middle_container}>
          <Icon name="user-group" size={13} color="#666666" style={styles.user_icon} />
          <Text style={styles.winners}>{users}</Text>
        </View>
      </View>
    </View>
  )
}

export default BottomComponent

const styles = StyleSheet.create({
  middle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  linearGradient: {
    height: 4,
    width: 140,
    borderRadius: 50,
    marginTop: 16.5,
  },
  middle_wrapper: {
    flexDirection: 'row',
    gap: 15,
  },
  middle_container: {
    flexDirection: 'row',
    gap: 2,
  },
  shield_icon: {
  },
  light_icon: {
  },
  user_icon: {
    marginTop: 5,
  },
  total_prize: {
    fontSize: 12,
    fontWeight: '500',
    color: '#333333',
    fontFamily: 'Roboto',
  },
  winners: {
    fontSize: 14,
    color: '#666666',
    fontFamily: 'Roboto',
  },
  hundred: {
    fontSize: 12,
    fontWeight: '500',
    color: '#0E7DDC',
    fontFamily: 'Roboto',
  },
})