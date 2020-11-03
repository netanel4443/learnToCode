import { RootState } from "../reducers/rootReducer"

export const splitedArticleSelector = ((state:RootState) => state.homeReducer.splitedArticle)
export const chosenArticleSelector = ((state:RootState) => state.homeReducer.chosenArticle)
