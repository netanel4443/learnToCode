import { ActivityIndicator, Modal, StyleSheet, Text, View } from "react-native";
import React from 'react'

interface Props{
  isVisible:boolean
}

function LoadingSpinnerModal({isVisible}:Props) {
  return (
    <Modal
     visible={isVisible}
     transparent={true}> 
    <View style={{height:'40%',backgroundColor:'white'}}>
      <ActivityIndicator size="large" color="#7289da"/>
    </View>
    </Modal>
  )
}


export default LoadingSpinnerModal
