import React, { useCallback, useEffect } from 'react'
import { View,  ScrollView, StyleSheet, ActivityIndicator, Text, } from 'react-native'
import SyntaxHighlighter from 'react-native-syntax-highlighter'; 
import { dark} from 'react-syntax-highlighter/styles/hljs';
import HTMLView from 'react-native-htmlview';
import { useDispatch, useSelector } from 'react-redux';
import * as action from '../../actions/homeActions'
import { showInterstitialAd } from '../../ui/common/admob/InterstitialAdAdmob';
import { chosenArticleSelector, splitedArticleSelector } from '../../selectors/CodeAreaSelector';

const CodeArea = () => {
  const splitedArticle = useSelector(splitedArticleSelector)
  const chosenArticle = useSelector(chosenArticleSelector)

  const dispatch = useDispatch()

  useEffect(() => {
   
       dispatch(action.passSplitedMainTopicArticle(chosenArticle))
    return () => {
      dispatch(action.passSplitedMainTopicArticle(''))//reset article length in order to show actionindicator next time this screen loads
      // showInterstitialAd()
    }
  }, [])

  const splitBetweenTextAndCode= useCallback(() => {
      const elementsArr:any[]=[]

      Array.from(splitedArticle).forEach((textOrCode,index)=>{
   
       if(index%2!==0){
        elementsArr.push(
          <SyntaxHighlighter
            key={index}
            style={dark}
            customStyle={{}}
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
    },
    [splitedArticle]
  )

  return (
    
    <View style={{flex:1,backgroundColor:'#e6e6e6',flexDirection:'column'}}>
      {splitedArticle.length==0
        ? (<ActivityIndicator style={styles.indicator}  size='large' color={'#000'}/>)
        : (<ScrollView>{splitBetweenTextAndCode()}</ScrollView> )     
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
