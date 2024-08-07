import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { JsStack } from '../../features/JsStack'
import { TransitionPresets } from '@react-navigation/stack'

export default function ModalsLayout() {
  return (
    <JsStack>
         <JsStack.Screen
          name="modal"
          options={{
            ...TransitionPresets.ModalPresentationIOS,
            presentation: "modal",
            headerShown: true,
            gestureEnabled: true
            
          }}
        />
    </JsStack>
  )
}