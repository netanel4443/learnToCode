export class TopicBuilder{
  private topic:string
  private articleOrExample:string
  private subject:string

  constructor(){
    this.topic=''
    this.articleOrExample=''
    this.subject=''
  }
  
  setTopic(topic:string){
    this.topic=topic
  }
  setArticleOrExample(articleOrExample:string){
    this.articleOrExample=articleOrExample
  }
  setSubject(subject:string){
    this.subject=subject
  }
  getTopic():string{
    return this.topic
  }
  getArticleOrExample():string{
    return this.articleOrExample
  }
  getSubject():string{
    return this.subject
  }

}