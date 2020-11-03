import React, { ReactElement } from 'react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { render } from '@testing-library/react-native'


export const renderPageWithReduxProvider=(element:JSX.Element)=>{
  const mockStore=configureMockStore([thunk])

  const store=mockStore()
  render(
    <Provider store={store}>
      {element}
    </Provider>
  )
 
}