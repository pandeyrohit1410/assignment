import React from 'react'
import HomeScreenComponet from '../../components/ScreenComponents/HomeScreenComponet/HomeScreenComponet'
import { useRoute } from '@react-navigation/native';

const HomeScreen = () => {
    const route = useRoute();
    const name = route.params.name;
  return (
    <HomeScreenComponet name={name}/>
  )
}

export default HomeScreen
