import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import { screenNames } from '../../navigation'
import ExamplesOrArticlesScreen from '../screens/ExamplesOrArticlesScreen'
import ListOfSubjects from '../screens/ListOfSubjects'


const Stack=createStackNavigator()

export const getNavigationContainer=()=>{
  return(
    <NavigationContainer >
      <Stack.Navigator initialRouteName={screenNames.ExamplesOrArticlesScreen}>
        <Stack.Screen name={screenNames.ExamplesOrArticlesScreen} component={ExamplesOrArticlesScreen} />
        <Stack.Screen name={screenNames.ListOfSubjects} component={ListOfSubjects} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
