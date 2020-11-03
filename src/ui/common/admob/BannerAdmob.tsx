import React from 'react'
import { View, Text } from 'react-native'
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'
import {adsConsentStatus} from '../admob/handleEEALocation'

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-8194360858461012/5697991180';

const BannerAdmob = () => {
  // console.log(`adsConsentStatus ${adsConsentStatus}`)
  return (
    <View style={{alignSelf:'center',position:'absolute',bottom:0}}>
     <BannerAd
      unitId={TestIds.BANNER}
      size={BannerAdSize.BANNER}
            
      requestOptions={{
        requestNonPersonalizedAdsOnly: adsConsentStatus,
        
      }}
    />
     </View>
  )
}

export default BannerAdmob
