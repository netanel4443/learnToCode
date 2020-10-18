import { SubjectDetails } from "../data/SubjectDetails";
import * as articlesIndex from './articles/index'
import * as androidExamples from './examples/index'

const androidTopic=new Map<string, Map<string, SubjectDetails>>()
const articles=articlesIndex.toMap()
const examples=androidExamples.toMap()
console.log(articles.keys())
androidTopic.set("Articles",articles)
androidTopic.set("Examples",examples)

export default androidTopic
