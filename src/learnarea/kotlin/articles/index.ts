import { SubjectDetails } from '../../../data/SubjectDetails'
import properties from './properties'
import visibilitymodifies from './visibilitymodifiers'

export const kotlinArticles=[
  {
    subject:properties,
    language:'kotlin',
    subjectName:'intents'
  },
  {
    subject:visibilitymodifies,
    language:'kotlin',
    subjectName:'intents'
  },
]

export const toMap=()=>{
  const tmpSubjectMap=new Map<string,SubjectDetails>()
  kotlinArticles.forEach((subject,index)=>{
    tmpSubjectMap.set(subject.subjectName,subject)
  })
  return tmpSubjectMap
}