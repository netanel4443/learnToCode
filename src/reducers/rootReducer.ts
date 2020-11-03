import {combineReducers, ReducersMapObject} from 'redux'
import { IState } from '.'
import homeReducer from './homeReducer'


const rootReducer=combineReducers({
  homeReducer:homeReducer
})

export type RootState=ReturnType<typeof rootReducer>

export default rootReducer



const reducers: ReducersMapObject = {
  
 homeReducer:homeReducer
};

export const rootReducerr = combineReducers<IState>(reducers);
export type RootStatee=ReturnType<typeof rootReducerr>