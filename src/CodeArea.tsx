import React, { useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter'; 
import { dark} from 'react-syntax-highlighter/styles/hljs';
import HTMLView from 'react-native-htmlview';
import { useSelector } from 'react-redux';
import { RootState } from './reducers/rootReducer';

const splitBetweenTextAndCode=()=>{
  const article:[] = useSelector((state:RootState) => state.homeReducer.article)

  const elementsArr:any[]=[]

  article.forEach((textOrCode,index)=>{
  
   if(index%2!==0){
    elementsArr.push(
      <SyntaxHighlighter
        style={dark}
        customStyle={{marginLeft:3,marginRight:3,borderRadius:3}}
        language='kotlin'
        fontSize={15}
        highlighter={"hljs"}
        wrapLongLines
      >
        {textOrCode}
      </SyntaxHighlighter>
    )
   }
   else{
    elementsArr.push(
      <View style={{margin:10}}>
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

const CodeArea = () => {
 
  return (
    <View style={{flex:1,backgroundColor:'#e6e6e6'}}>
      <ScrollView>
       {splitBetweenTextAndCode()}
      </ScrollView>
    </View>
    
  )
}

const htmlStyles=StyleSheet.create({
  p:{
    fontSize:15,
    fontFamily:'serif',
    lineHeight:25
  }
})

export default CodeArea
