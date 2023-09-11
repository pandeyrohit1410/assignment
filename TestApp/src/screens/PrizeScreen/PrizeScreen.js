import React from 'react'
import PrizeScreenComponent from '../../components/ScreenComponents/PrizeScreenComponent/PrizeScreenComponent'
import { useRoute } from '@react-navigation/native';


const PrizeScreen = () => {
    const route = useRoute();
    const name = route.params.name;
  return (
    <PrizeScreenComponent name={name}/>
  )
}

export default PrizeScreen
