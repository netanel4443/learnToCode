import React, { useEffect } from 'react'
import { View, StyleSheet} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../actions/homeActions'
import { StackNavigationProp } from '@react-navigation/stack'
import { screenNames } from '../navigation'
import CommonFlatList from '../ui/common/CommonFlatList'

interface Props {
  navigation: StackNavigationProp<any>
}

const ExamplesOrArticles = ({navigation}:Props) => {

  const dispatch = useDispatch()

  const mainTopic:string[] =['Articles','Examples']

 
  const onItemPress=(item:string)=>{
     action.setExampleOrArticleChoice(item)
      navigation.navigate(screenNames.ListOfSubjects)
  }
  

  return (
    <View style={styles.main}>
      <CommonFlatList itemList={mainTopic} pressAction={(item)=>onItemPress(item)}/>
    </View>
  )
}

const styles=StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#1e2124', 
  },
})

export default ExamplesOrArticles
