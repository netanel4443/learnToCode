import chatApp from './chatApp'
import { SubjectDetails } from '../../data/SubjectDetails'

export const androidExamples=
[
  {
    subject:chatApp,
    language:'kotlin',
    subjectName:'Chat App'
  },
]

export const toMap=()=>{
  const tmpSubjectMap=new Map<string,SubjectDetails>()
  androidExamples.forEach((subject,index)=>{
    tmpSubjectMap.set(subject.subjectName,subject)
  })
  return tmpSubjectMap
}


 