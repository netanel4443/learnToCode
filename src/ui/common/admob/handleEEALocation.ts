import { AdsConsent, AdsConsentDebugGeography, AdsConsentStatus } from '@react-native-firebase/admob';
import { consoleErrorIfDev } from '../../../utils/console';

export let adsConsentStatus=false

export const handleEEAOrUnknown=async()=>{
  let locationInEeaOrUnknown=true//before getting true location assume is in EEA or unknown
 
  try{
    //  await AdsConsent.setDebugGeography(AdsConsentDebugGeography.EEA); //for debugging

    const consentInfo = await AdsConsent.requestInfoUpdate(['pub-8194360858461012']);
    locationInEeaOrUnknown=consentInfo.isRequestLocationInEeaOrUnknown//get true location
    // console.log(consentInfo)
    // console.log('before'+await AdsConsent.getStatus())
     if (
      consentInfo.isRequestLocationInEeaOrUnknown &&
      consentInfo.status === AdsConsentStatus.UNKNOWN
    ) {
      const formResult = await AdsConsent.showForm({
        privacyPolicy: 'https://invertase.io/privacy-policy',
        withPersonalizedAds: true,
        withNonPersonalizedAds: true,
      });
      const status=formResult.status
      await AdsConsent.setStatus(status); 
    }
  }
  catch(e){
    consoleErrorIfDev(e)
  }
  const status=await AdsConsent.getStatus()
  // console.log('after'+ status)
  adsConsentStatus=status===AdsConsentStatus.NON_PERSONALIZED?true:false
  // if status is known and location is EEA or unknown - show ads.
  // if locations is not EEA or unknown - show ads.
  // Otherwise-don't show ads
  return (status!==AdsConsentStatus.UNKNOWN && locationInEeaOrUnknown) || (!locationInEeaOrUnknown)
 
}