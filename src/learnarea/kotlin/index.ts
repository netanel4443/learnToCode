import { SubjectDetails } from "../../data/SubjectDetails";
import * as kotlinArticles from "./articles";

const kotlinTopic=new Map<string,Map<string,SubjectDetails>>()
kotlinTopic.set("articles",kotlinArticles.toMap())

export default kotlinTopic