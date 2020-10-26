import ExamplesOrArticlesScreen from '../screens/ExamplesOrArticlesScreen';
import { fireEvent ,render, waitFor } from '@testing-library/react-native';
import React from 'react'
import propsWithNavigation from '../../testHelpers/propsWithNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { screenNames } from '../../navigation';
import CodeArea from '../screens/CodeArea';
import ListOfSubjects from '../screens/ListOfSubjects';
import { createStackNavigator } from '@react-navigation/stack';
import * as redux from 'react-redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore=configureStore()

const store=mockStore()

const props=propsWithNavigation()
// const wrapper=render(<ExamplesOrArticlesScreen {...props}/>)

// it('should navigate to ListOfSubjects page',async()=>{
// const commonFlatListItem= wrapper.getByTestId('Articles')
//   fireEvent.press(commonFlatListItem)//testing if navigation succeed
//   const nextPage=await waitFor(()=>wrapper.queryByText('fakeTest'))
//   expect(nextPage).toBeTruthy()
// })

it('another way of navigation',async()=>{

  const screenOptions={ headerShown:null}//apply for all screens
  const Stack = createStackNavigator();
  const spy=jest.spyOn(redux,'useSelector')
  spy.mockReturnValue({articlesOrExamplesNames:['Toast','intents']})

  const component = (
    <Provider store={store}>
   <NavigationContainer >
   <Stack.Navigator initialRouteName={screenNames.ExamplesOrArticlesScreen}>
        <Stack.Screen name={screenNames.ExamplesOrArticlesScreen} component={ExamplesOrArticlesScreen} />
        <Stack.Screen name={screenNames.ListOfSubjects} component={ListOfSubjects} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );

  const wrapper = render(component);
  const commonFlatListItem= wrapper.getByTestId('Articles')
  expect(commonFlatListItem).toBeTruthy()
  fireEvent.press(commonFlatListItem)
  const nextPage=await waitFor(()=>wrapper.queryByTestId('listOfSubject'))
  expect(nextPage).toBeTruthy()
})


