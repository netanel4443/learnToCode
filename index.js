import 'react-native-gesture-handler'; // had to be at the top

import React from 'react'
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import CodeArea from './src/CodeArea'
import {applyMiddleware, createStore} from 'redux'
import rootReducer from './src/reducers/rootReducer'
import { Provider } from 'react-redux';
import ListOfSubjects from './src/screens/ListOfSubjects'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {screenNames} from './src/navigation/index'
import thunk from 'redux-thunk';


const store=createStore(rootReducer,applyMiddleware(thunk))
const Stack = createStackNavigator();

const app=()=>{
  const screenOptions={ headerShown:null}//apply for all screens
  return(
    <Provider store={store}>
      <NavigationContainer  >
      <Stack.Navigator screenOptions={screenOptions} initialRouteName={screenNames.ListOfSubjects}>
        <Stack.Screen name={screenNames.ListOfSubjects} component={ListOfSubjects} />
        <Stack.Screen name={screenNames.CodeArea} component={CodeArea} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )

}

AppRegistry.registerComponent(appName, () => app);
