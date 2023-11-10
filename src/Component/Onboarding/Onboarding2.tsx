import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import stayle from './stayle'

const Onboarding2 = ({ navigation }: any) => {
  const [loading3, setloading3] = useState(false)
  const [loading1, setloading1] = useState(false)

  const handele = () => {
    setloading3(true)
    setTimeout(() => {
      setloading3(false)
      navigation.navigate('LoginScreen')
    }, 2000)
  }
  const handele1 = () => {
    setloading1(true)
    setTimeout(() => {
      setloading1(false)
      navigation.navigate('RegisterScreen')
    }, 2000)
  }

  return (
    <View style={stayle.container}>
      <View style={stayle.view3}>
       
        <View style={stayle.textview}>
          <Text style={stayle.text1}> Let’s get started!</Text>
          <Text style={stayle.text2}> Login to enjoy the features we’ve provided, and stay healthy!</Text>
        </View>

      </View>
      <View style={stayle.view4}>
        <TouchableOpacity style={stayle.touc} onPress={handele} disabled={loading3}>
          {loading3 ? (
             <ActivityIndicator size='small' color="white" style={{marginTop:'7%'}} />
          ): (
           <Text style = {stayle.text5}> Login</Text> 
          )}
      </TouchableOpacity>
      <TouchableOpacity style={stayle.touc1} onPress={handele1} disabled={loading1}>
      {loading1 ? (
             <ActivityIndicator size='small' color="black" style={{marginTop:'7%'}} />
          ): (
           <Text style = {stayle.text3}> Sing up</Text> 
          )}
      </TouchableOpacity>
    </View>
    </View >
  )
}

export default Onboarding2