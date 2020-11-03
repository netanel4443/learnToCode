import * as action from '../homeActions'
import * as types from '../actionTypes/homeActionTypes'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { androidArticles } from '../../android/articles'
import androidTopic from '../../android'

const mockStore=configureMockStore([thunk])

const SPLIT_CHAR='$$'

describe('Actions to get chosen subject',()=>{
  test('if we get the proper chosen subject',()=>{
    const store = mockStore()
    action.setExampleOrArticleChoice('Articles')
    store.dispatch(action.setChosenSubject('Toast'))
    const payload=androidTopic.get('Articles')!.get('Toast')!.subject
    const expectedActions=[{type:types.GET_CHOSEN_ARTICLE,payload}]
    expect(store.getActions()).toEqual(expectedActions)

  })

  test('if articles is splited or empty',()=>{
    const store = mockStore()
    const payload=['some string','some words']
    const expectedActions=[{type:types.GET_SPLITED_MAIN_TOPIC_ARTICLE,payload}]

    return store.dispatch(action.passSplitedMainTopicArticle(`some string${SPLIT_CHAR}some words`)).then(()=>{
       console.log(store.getActions())
        expect(store.getActions()).toEqual(expectedActions)
    })
  })

})