import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Logo from 'react-native-vector-icons/MaterialCommunityIcons';
import LableComponent from '../../OtherComponents/LableComponent/LableComponent';
import PrizeComponent from '../../OtherComponents/PrizeComponent/PrizeComponent';
import BottomComponent from '../../OtherComponents/BottomComponent/BottomComponent';
import FooterComponent from '../../OtherComponents/Footer/FooterComponent';
import ModalComponent from '../../OtherComponents/ModalComponent/ModalComponent';

const { height, width } = Dimensions.get('window')

const HomeScreenComponet = ({ name }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <>
      {modalVisible && <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} />}
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Logo name="arrow-left" size={30} color="#F3F3F7" onPress={() => handleBack()} />
          <Text style={styles.top_name}>{'Welcome'} {name}</Text>
        </View>
        <View style={styles.card_container}>
          <View style={styles.mega_container}>
            <View style={styles.mega}>
              <Text style={styles.mega_text}>{`Mega Contest`}</Text>
            </View>
            <View style={styles.dis_container}>
              <Text style={styles.dis_text}>{`Discount ends in 10:05:45`}</Text>
              <Text style={styles.rupee}>{`₹60`}</Text>
            </View>
          </View>
          <View style={styles.prise_container}>
            <View >
              <LableComponent grade={"1ST"} prize={"50 Lakhs"} newPrize={"1.01 Cr"} name={name} />
            </View>
            <Pressable style={styles.prise} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.prise_text}>{`₹55`}</Text>
            </Pressable>
          </View>
          <PrizeComponent prize={"2.01"} winPrize={"1"} winners={"40"} />
          <BottomComponent team={"1123"} totleTeam={"4000"} verified={"100%"} winners={"3"} users={"12"} />
        </View>
        <FooterComponent />
      </View>
    </>
  )
}

export default HomeScreenComponet

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
  card_container: {
    height: height / 3.09,
    width: width - 30,
    marginTop: 50,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    elevation: 8,
  },
  mega_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  mega: {
    height: 35,
    width: 120,
    backgroundColor: '#D9F1FE',
    padding: 5,
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  mega_text: {
    fontSize: 12,
    fontWeight: '900',
    color: '#306999',
    fontFamily: 'Roboto',
    alignSelf: 'center',
  },
  dis_container: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 5,
  },
  dis_text: {
    fontSize: 12,
    fontWeight: '500',
    color: '#306999',
  },
  rupee: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333333',
    textDecorationLine: 'line-through',
    textDecorationColor: '#333333',
  },
  prise_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
  },
  prise: {
    height: 40,
    marginTop: 3,
    width: 100,
    backgroundColor: '#00BF36',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  prise_text: {
    fontSize: 16,
    fontWeight: '900',
    color: '#F3F3F7',
    fontFamily: 'Roboto',
    alignSelf: 'center',
  },
})