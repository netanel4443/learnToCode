import { ActivityIndicator } from 'react-native'
import { act } from 'react-test-renderer'
import * as types from '../actions/actionTypes/homeActionTypes'

const initialState={
mainTopic:[],
splitedArticle:[],
isLoading:false,
chosenArticle:''
}

export default (state=initialState,action:any)=>{
  switch(action.type){
   case types.GET_MAIN_TOPIC:
     return{
       ...state,
        mainTopic: action.payload
     }
   case types.GET_CHOSEN_ARTICLE:
     return{
       ...state,
       chosenArticle:action.payload
     }  
   case types.GET_MAIN_TOPIC_ARTICLE:
   
     return{
      ...state,
      splitedArticle:action.payload
     }
     case types.SHOW_OR_HIDE_LOADING_SPINNER:
      return{
        ...state,
        isLoading:action.payload
      }      
    default: return state
  }
}