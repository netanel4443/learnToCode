import React, { useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, ActivityIndicator, } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter'; 
import { dark} from 'react-syntax-highlighter/styles/hljs';
import HTMLView from 'react-native-htmlview';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './reducers/rootReducer';
import * as action from './actions/homeActions'


const CodeArea = () => {
  const splitedArticle:[] = useSelector((state:RootState) => state.homeReducer.splitedArticle)
  const chosenArticle:string = useSelector((state:RootState) => state.homeReducer.chosenArticle)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(action.passMainTopicArticle(chosenArticle))
    return () => {
    dispatch(action.passMainTopicArticle(''))//reset article length in order to show actionindicator next time this screen loads
    }
  }, [])

  const splitBetweenTextAndCode=()=>{

    const elementsArr:any[]=[]

    splitedArticle.forEach((textOrCode,index)=>{
    
     if(index%2!==0){
      elementsArr.push(
        <SyntaxHighlighter
          key={index}
          style={dark}
          customStyle={{marginLeft:3,marginRight:3,borderRadius:3}}
          language='kotlin'
          fontSize={15}
          highlighter={"hljs"}
        >
          {textOrCode}
        </SyntaxHighlighter>
      )
     }
     else{
      elementsArr.push(
        <View
        key={index} 
        style={{margin:10}}>
          <HTMLView
            value={`<p>${textOrCode}</p>`}
            stylesheet={htmlStyles}
          />
        </View>
      )
     }
    })
    return elementsArr
  }

  return (
    <View style={{flex:1,backgroundColor:'#e6e6e6',flexDirection:'column'}}>
      {splitedArticle.length==0
        ?
        <ActivityIndicator style={styles.indicator}  size='large' color={'#000'}/>
       :
      <ScrollView>
        {splitBetweenTextAndCode()}
      </ScrollView>
      }
    </View>
  )
}

const styles=StyleSheet.create({
  indicator:{
    marginTop:'auto',
    marginBottom:'auto',
   

  }
})

const htmlStyles=StyleSheet.create({
  p:{
    fontSize:15,
    fontFamily:'serif',
    lineHeight:25
  }
})

export default CodeArea
