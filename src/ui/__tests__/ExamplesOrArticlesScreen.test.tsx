import { act, fireEvent ,render, waitFor } from '@testing-library/react-native';
import React from 'react'
import * as redux from 'react-redux'
import { Provider, useSelector } from 'react-redux'
import { getNavigationContainer } from '../common/NavigationScreensContainer';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store'

const mockStore=configureMockStore([thunk])
 const store=mockStore()

const spy=jest.spyOn(redux,'useSelector')
spy.mockReturnValue(['Toast'])

it('should navigate to ListOfSubjects screen',async()=>{

    const component = (
   <Provider store={store}>
    {getNavigationContainer()}
   </Provider>
  );

  const wrapper = render(component);
  const commonFlatListItem=wrapper.getByTestId('Articles')
  expect(commonFlatListItem).toBeTruthy()

 act(()=>{
      fireEvent.press(commonFlatListItem)
 })

console.log(store.getState())
 await act(async()=>{
  const nextPage=await waitFor(()=>wrapper.queryByTestId('Toast'))
   
  expect(nextPage).toBeTruthy()
 })
})