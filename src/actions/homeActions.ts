import * as types from './actionTypes/homeActionTypes'
import {androidSubjects, SPLIT_CHAR} from '../articles/index'

export const getMainTopic=()=>{
  return{
    type:types.GET_MAIN_TOPIC,
    payload:androidSubjects
  }
}

export const passMainTopicArticle=(article:string)=>{
  const splitedArticle=article.split(SPLIT_CHAR)
  console.log(splitedArticle)
  return{
    type:types.PASS_MAIN_TOPIC_ARTICLE,
    payload:splitedArticle
  }

}