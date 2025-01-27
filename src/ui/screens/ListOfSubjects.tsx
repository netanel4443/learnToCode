import React, { useCallback, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ListRenderItemInfo, ActionSheetIOS } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../actions/homeActions'
import { RootState } from '../../reducers/rootReducer'
import { StackNavigationProp } from '@react-navigation/stack'
import { screenNames } from '../../navigation'
import CommonFlatList from '../../ui/common/CommonFlatList'
import { articlesOrExamplesNamesSelector } from '../../selectors/homeSelector'

interface Props {
  navigation: StackNavigationProp<any>
}
const ListOfSubjects = ({navigation}:Props) => {

  const dispatch = useDispatch()
  const articlesOrExamplesNames= useSelector(articlesOrExamplesNamesSelector)
 
  useEffect(() => {
    dispatch(action.getExamplesOrArticleSubjects())
  }, [])

  const onItemPress=useCallback((item:string)=>{
         navigation.navigate(screenNames.CodeArea)
        dispatch(action.setChosenSubject(item))
  },[])
  

  return (
    <View testID='listOfSubject' style={styles.main}>
      <CommonFlatList itemList={articlesOrExamplesNames} pressAction={onItemPress}/>
    </View>
  )
}

const styles=StyleSheet.create({
  main:{
    flex:1,
    backgroundColor:'#1e2124',
   
  },
  subjectContainer:{
    height:70,
    borderRadius:5,
    justifyContent:'center',
    // margin:5,
    backgroundColor:'#282b30',
    borderWidth:0.5
  },
  subjectName:{
    fontSize:15,
    fontFamily:'serif',
    marginEnd:5,
    // color:'#7289da',
    color:'white',
    alignSelf:'center'
    
  },
})

export default ListOfSubjects
