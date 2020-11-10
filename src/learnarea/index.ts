  import androidTopic from '../android/index'
import { SubjectDetails } from '../data/SubjectDetails'
  import kotlinTopic from './kotlin/index'
  
  enum topics{
  kotlin='kotlin',
  android='android',
}

const mainLearnMap=new Map<string,Map<string,Map<string,SubjectDetails>>>()
mainLearnMap.set(topics.android,androidTopic)
mainLearnMap.set(topics.kotlin,kotlinTopic)

export default topics