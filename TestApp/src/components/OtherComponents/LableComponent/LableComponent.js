import { Dimensions, StyleSheet, View, Text, Pressable } from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome6';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const LableComponent = ({ grade, prize, newPrize, name }) => {
  const navigation = useNavigation();
  const handlePrizeScreen = () => {
    navigation.navigate('prizescreen', { name });
  };
  return (
    <>
      <Pressable style={styles.container} onPress={handlePrizeScreen}>
        <View style={styles.prize}>
          <Icon name="arrow-trend-up" size={19} color="#00BF36" style={styles.icon} />
          <Text style={styles.first_prise}>{`${grade} PRIZE`}</Text>
        </View>
        <Text style={styles.rupee}>{`₹${prize}`}</Text>
        <View style={styles.rupee_container}>
          <Text style={styles.rupeeTow}>{`₹${newPrize}`}</Text>
          <Icon name="angle-down" size={15} color="#666666" style={styles.down_icon} />
        </View>
      </Pressable>
    </>
  )
}

export default LableComponent

const styles = StyleSheet.create({
  container: {
    width: width - 180,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#E0DFE8',
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: 8,
  },
  rupee: {
    fontSize: 13,
    fontWeight: '500',
    color: '#666666',
    textDecorationLine: 'line-through',
    textDecorationColor: '#333333',
  },
  rupeeTow: {
    fontSize: 18,
    fontWeight: '900',
    color: '#333333',
    fontFamily: 'Roboto',
  },
  rupee_container: {
    flexDirection: 'row',
    gap: 4,
  },
  down_icon: {
    marginTop: 9,
  },
  prize: {
    width: 107,
    backgroundColor: 'white',
    flexDirection: 'row',
    gap: 5,
    position: 'absolute',
    top: -14,
    left: 14,
  },
  icon: {
    marginTop: 4,
  },
  first_prise: {
    fontSize: 14,
    fontWeight: '900',
    color: '#666666',
    fontFamily: 'Roboto',
  },
});