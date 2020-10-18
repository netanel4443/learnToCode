import chatApp from './chatApp'
import { SubjectDetails } from '../../data/SubjectDetails'
import genericRecyclerView from './genericRecyclerView'

export const androidExamples=
[
  {
    subject:chatApp,
    language:'kotlin',
    subjectName:'Chat App'
  },
 {
    subject:genericRecyclerView,
    language:'kotlin',
    subjectName:'Generic RecyclerView'
  },
]

export const toMap=()=>{
  const tmpSubjectMap=new Map<string,SubjectDetails>()
  androidExamples.forEach((subject,index)=>{
    tmpSubjectMap.set(subject.subjectName,subject)
  })
  return tmpSubjectMap
}


 