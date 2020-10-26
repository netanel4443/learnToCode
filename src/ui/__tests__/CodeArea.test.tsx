import {render} from '@testing-library/react-native'
import renderer from 'react-test-renderer'
import CodeArea from '../screens/CodeArea'
import React from 'react'
import * as redux from 'react-redux'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore=configureStore()

const store=mockStore()

const spy=jest.spyOn(redux,'useSelector')
spy.mockReturnValue({splitedArticle:['test','rferf']})
spy.mockReturnValue({chosenArticle:'Toast'})


const wrapper=renderer.create(<Provider store={store}><CodeArea/></Provider>).toJSON()

test('if renders correctly',(cb)=>{
  expect(wrapper).toMatchSnapshot();
  
})
 
