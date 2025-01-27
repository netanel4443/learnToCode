import { Reducer } from 'redux'
import { IHomeReducerState, IState } from '.'
import * as types from '../actions/actionTypes/homeActionTypes'
import { SubjectDetails } from '../data/SubjectDetails'

const initialState:IHomeReducerState={
  mainTopic:[],
  splitedArticle:[],
  isLoading:false,
  chosenArticle:'',
  articlesOrExamplesNames:[]
}

 const homeReducer:Reducer<IHomeReducerState>=(state=initialState,action:any)=>{
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
   case types.GET_SPLITED_MAIN_TOPIC_ARTICLE:
   
     return{
      ...state,
      splitedArticle:action.payload
     }
     case types.SHOW_OR_HIDE_LOADING_SPINNER:
      return{
        ...state,
        isLoading:action.payload
      }   
   case types.GET_ARTICLES_OR_EXAMPLES_LIST:
     return{
       ...state,
       articlesOrExamplesNames:action.payload
     }      
    default: return state
  }
}
export default homeReducer