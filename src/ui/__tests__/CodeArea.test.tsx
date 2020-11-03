import renderer from 'react-test-renderer'
import CodeArea from '../screens/CodeArea'
import React from 'react'
import * as redux from 'react-redux'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { render } from '@testing-library/react-native'
import thunk from 'redux-thunk'

const mockStore=configureMockStore([thunk])

const store=mockStore()

const spy=jest.spyOn(redux,'useSelector')
//mockReturnValueOnce for multiple useSelectors
spy.mockReturnValueOnce(['fake one','fake two'])
spy.mockReturnValueOnce('Toast')

const wrapper=render(<Provider store={store}><CodeArea/></Provider>)

it('should draw these text on screen',()=>{
  expect(wrapper.getByText('fake one')).toBeTruthy()
  expect(wrapper.getByText('fake two')).toBeTruthy()
})






 
