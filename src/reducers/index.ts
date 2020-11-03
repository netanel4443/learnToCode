export interface IState{
  home:IHomeReducerState
}

export interface IHomeReducerState{
  mainTopic:[],
  splitedArticle:[],
  isLoading:boolean,
  chosenArticle:string,
  articlesOrExamplesNames:string[]
}