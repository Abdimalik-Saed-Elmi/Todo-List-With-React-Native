import { ScrollView, View,  } from 'react-native'
import React from 'react'
import Flatcard from '@/components/Flatcard'
import Secondflat from '@/components/Secondflat'
import Realcard from '@/components/Realcard'
import Profile from '@/components/Profile'


export default function index() {
  return (
    <View>
      <ScrollView>
      <Flatcard />
      <Secondflat />
      <Profile />
      <Realcard />
      </ScrollView>
     
    </View>
  )
}