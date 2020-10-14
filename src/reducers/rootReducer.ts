import {combineReducers} from 'redux'
import homeReducer from './homeReducer'


const rootReducer=combineReducers({
  homeReducer:homeReducer
})

export type RootState=ReturnType<typeof rootReducer>

export default rootReducer