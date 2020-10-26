import { AdEventType, FirebaseAdMobTypes, InterstitialAd, TestIds } from '@react-native-firebase/admob';
import { consoleErrorIfDev, consoleLogIfDev } from '../../../utils/console';
import { adsConsentStatus } from './handleEEALocation';


let unSubscribe:Function | undefined
let interstitial:FirebaseAdMobTypes.InterstitialAd | undefined
let canShowAdsToEEAOrUnknown=false //will change after first handleEEALocation executes
const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-8194360858461012/5268221123';

export const initAndSubscribeForEvents=(canShowAds:boolean)=>{
   // console.log(adsConsentStatus)
    canShowAdsToEEAOrUnknown=canShowAds
    interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
    requestNonPersonalizedAdsOnly: adsConsentStatus,
})

 interstitial?.load()//first time load, happens once

 unSubscribe=interstitial.onAdEvent((type,error)=>{

  if (type === AdEventType.CLOSED) {
    interstitial?.load();//load for next time
  }
})

}


export const showInterstitialAd=async()=>{
  if(canShowAdsToEEAOrUnknown){
    consoleLogIfDev(interstitial?.loaded)
    if(interstitial?.loaded){
      try{
      await interstitial.show()
        
      }catch(e){consoleErrorIfDev(e)}
    }
  }
}

export const removeInterstitialAdListener=()=>{ 
  unSubscribe && unSubscribe() 
}