import * as types from './actionTypes/homeActionTypes'
import {androidArticles} from '../android/articles/index'
import { TopicBuilder } from '../data/TopicBuilder'
import androidTopic from '../android/index'
const SPLIT_CHAR="$$"

const topicBuilder=new TopicBuilder()

export const getMainTopic=()=>{
  return{
    type:types.GET_MAIN_TOPIC,
    payload:androidArticles
  }
}

export const passMainTopicArticle=(article:string)=>async(dispatch:any)=>{
  let splitedArticle:string[]=[]
  
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

export const setExampleOrArticleChoice=(optionChosen:string)=>{
  topicBuilder.setArticleOrExample(optionChosen)
}

export const setChosenSubject=(chosenSubject:string)=>{
 topicBuilder.setSubject(chosenSubject)
 const articlesOrExamples=androidTopic.get(topicBuilder.getArticleOrExample())?.get(topicBuilder.getSubject())?.subject

  return{
    type:types.GET_CHOSEN_ARTICLE,
    payload:articlesOrExamples
  }
}

export const getExamplesOrArticleSubjects=()=>{
  const tmpArray:string[]=[]
  androidTopic.get(topicBuilder.getArticleOrExample())?.forEach((value,key)=>{
    tmpArray.push(key)
  })
 
  return{
    type:types.GET_ARTICLES_OR_EXAMPLES_LIST,
    payload:tmpArray
  }
}
