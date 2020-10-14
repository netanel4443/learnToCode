import * as types from '../actions/actionTypes/homeActionTypes'

const initialState={
mainTopic:[],
article:[]
}

export default (state=initialState,action:any)=>{
  switch(action.type){
   case types.GET_MAIN_TOPIC:
     return{
       ...state,
        mainTopic: action.payload
     }
   case types.PASS_MAIN_TOPIC_ARTICLE:
     return{
      ...state,
      article:action.payload
     }     
    default: return state
  }
}