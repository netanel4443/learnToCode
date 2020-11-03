import 'react-native-gesture-handler'; // had to be at the top
import SplashScreen from 'react-native-splash-screen' // splashscreen

import React from 'react'
import CodeArea from './src/ui/screens/CodeArea'
import {applyMiddleware, createStore} from 'redux'
import rootReducer, { rootReducerr } from './src/reducers/rootReducer'
import { Provider } from 'react-redux';
import ListOfSubjects from './src/ui/screens/ListOfSubjects'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {screenNames} from './src/navigation/index'
import thunk from 'redux-thunk';
import ExamplesOrArticlesScreen from './src/ui/screens/ExamplesOrArticlesScreen'
import BannerAdmob from './src/ui/common/admob/BannerAdmob';
import { handleEEAOrUnknown } from './src/ui/common/admob/handleEEALocation';
import {useState,useEffect} from 'react'
import * as interestitialAd from './src/ui/common/admob/InterstitialAdAdmob'

const store=createStore(rootReducer,applyMiddleware(thunk))
const Stack = createStackNavigator();

const App=()=>{
  const [canShowAds, setCanShowAds] = useState(false)// don't show until we get conset answer
  
  useEffect(() => {
    SplashScreen.hide();

    async function getConsetState() {
      setCanShowAds( await handleEEAOrUnknown())
    }
    getConsetState()
    
  }, [])

  useEffect(() => {
    interestitialAd.initAndSubscribeForEvents(canShowAds)
  return () => {
    interestitialAd.removeInterstitialAdListener()
  }
  }, [canShowAds])

 
  const screenOptions={ headerShown:null}//apply for all screens
 
  return(
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions} initialRouteName={screenNames.ExamplesOrArticlesScreen}>
        <Stack.Screen name={screenNames.ExamplesOrArticlesScreen} component={ExamplesOrArticlesScreen} />
        <Stack.Screen name={screenNames.ListOfSubjects} component={ListOfSubjects} />
        <Stack.Screen name={screenNames.CodeArea} component={CodeArea} />
      </Stack.Navigator>
      </NavigationContainer>
      {canShowAds===true? <BannerAdmob/>:null }
    </Provider>
  )

}

export default App
