import * as types from './actionTypes/homeActionTypes'
import {androidSubjects} from '../articles/index'
const SPLIT_CHAR='$'

export const getMainTopic=()=>{
  return{
    type:types.GET_MAIN_TOPIC,
    payload:androidSubjects
  }
}

export const passMainTopicArticle=(article:string)=>async(dispatch:any)=>{
  let splitedArticle:string[]=[]
  console.log(article.length)
  if(article.length!==0){
    return(
      splitedArticle= await new  Promise<string[]>(resolve => resolve(article.split(SPLIT_CHAR))),
      dispatch({ 
        type:types.GET_MAIN_TOPIC_ARTICLE,
        payload:splitedArticle
      })
    )
  }
  dispatch({ 
    type:types.GET_MAIN_TOPIC_ARTICLE,
    payload:splitedArticle
  })
 
}

export const showOrHideLoadingSpinner=(visibility:boolean)=>{
  return{
    type:types.SHOW_OR_HIDE_LOADING_SPINNER,
    payload:visibility
  }
}
export const getChosenArticle=(chosenArticle:string)=>{
  return{
    type:types.GET_CHOSEN_ARTICLE,
    payload:chosenArticle
  }
}