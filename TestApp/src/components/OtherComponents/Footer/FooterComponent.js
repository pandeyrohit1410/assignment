import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';


const { width } = Dimensions.get('window')

const FooterComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Icon name="arrow-trend-up" size={16} color="white" />
      </View>
      <Text style={styles.text}>{`Biggest prizes guaranteed / IPL tagline`}</Text>
    </View>
  )
}

export default FooterComponent

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: width - 30,
    alignSelf: 'center',
    backgroundColor: '#D9F1FE',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 5 },
    shadowOpacity: 0.9,
    elevation: 10,
    flexDirection: 'row',
    gap: 7,
    alignItems: 'center',
    borderStyle: 'dotted',
  },
  logo: {
    height: 30,
    width: 30,
    backgroundColor: '#333333',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
  },
  text: {
    fontSize: 13,
    fontWeight: '900',
    color: '#333333',
    fontFamily: 'Roboto',
  },
})