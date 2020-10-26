import chatApp from './chatApp'
import { SubjectDetails } from '../../data/SubjectDetails'
import genericRecyclerView from './genericRecyclerView'
import covid19App from './covid19App'
import splashScreen from './splashScreen'

export const androidExamples=
[
  {
    subject:chatApp,
    language:'kiotlin',
    subjectName:'Chat app'
  },
  {
    subject:genericRecyclerView,
    language:'kotlin',
    subjectName:'Generic recyclerView'
  },
  {
    subject:covid19App,
    language:'kotlin',
    subjectName:'Covid-19 app'
  },
{
    subject:splashScreen,
    language:'kotlin',
    subjectName:'Splash screen'
  },
]

export const toMap=()=>{
  const tmpSubjectMap=new Map<string,SubjectDetails>()
  androidExamples.forEach((subject,index)=>{
    tmpSubjectMap.set(subject.subjectName,subject)
  })
  return tmpSubjectMap
}


 