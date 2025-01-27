import intents from './intent'
import alertDialog from './alertDialog'
import activityLifecycle from './activityLifecycle'
import toast from './toast'
import fragment from './fragment'
import service from './service'
import liveData from './liveData'
import viewModel from './viewModel'
import { SubjectDetails } from '../../data/SubjectDetails'
import { sub } from 'react-native-reanimated'

export const androidArticles=
[
  {
    subject:intents,
    language:'kotlin',
    subjectName:'intents'
  },
  {
    subject:alertDialog,
    language:'kotlin',
    subjectName:'Alert Dialog'
  },
  {
    subject:activityLifecycle,
    language:'kotlin',
    subjectName:'Activity & Lifecycle'
  },
  {
    subject:fragment,
    language:'kotlin',
    subjectName:'Fragment & Lifecycle'
  },
  {
    subject:service,
    language:'kotlin',
    subjectName:'Service & Lifecycle'
  },
  {
    subject:viewModel,
    language:'kotlin',
    subjectName:'ViewModel'
  },
  {
    subject:liveData,
    language:'kotlin',
    subjectName:'LiveData'
  },
  {
    subject: toast,
    language:'kotlin',
    subjectName:'Toast'
  },
]

export const toMap=()=>{
  const tmpSubjectMap=new Map<string,SubjectDetails>()
  androidArticles.forEach((subject,index)=>{
    tmpSubjectMap.set(subject.subjectName,subject)
  })
  return tmpSubjectMap
}


 