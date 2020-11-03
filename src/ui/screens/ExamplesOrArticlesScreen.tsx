import React, { useCallback, useEffect } from 'react'
import { View, StyleSheet, Text} from 'react-native'
import * as action from '../../actions/homeActions'
import { StackNavigationProp } from '@react-navigation/stack'
import { screenNames } from '../../navigation'
import CommonFlatList from '../../ui/common/CommonFlatList'


interface Props {
  navigation: StackNavigationProp<any>
}

const ExamplesOrArticlesScreen = ({navigation}:Props) => {
 
  const mainTopic:string[] =['Articles','Examples']

  const onItemPress=useCallback(
    (item:string)=>{
      action.setExampleOrArticleChoice(item)
      navigation.navigate(screenNames.ListOfSubjects)
   },
    [],
  )

  return (
    <View style={styles.main}>
      <CommonFlatList itemList={mainTopic} pressAction={onItemPress}/>
    </View>
  )
}

const styles=StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#1e2124', 
  },
})

export default ExamplesOrArticlesScreen
