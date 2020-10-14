import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ListRenderItemInfo, ActionSheetIOS } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../actions/homeActions'
import { RootState } from '../reducers/rootReducer'
import { StackNavigationProp } from '@react-navigation/stack'
import { screenNames } from '../navigation'



interface Props {
  navigation: StackNavigationProp<any>
}
const ListOfSubjects = ({navigation}:Props) => {

  const dispatch = useDispatch()
  const mainTopic:[{subject:string,language:string,subjectName:string}] = useSelector((state:RootState) => state.homeReducer.mainTopic)
  
  useEffect(() => {
    dispatch(action.getMainTopic())
  }, [])

  const getAllSubjectNames=(item:ListRenderItemInfo<{subject: string; language: string; subjectName: string;}>):any=>{
  return (
    // <View   style={styles.subjectContainer}>
      <TouchableOpacity 
      style={styles.subjectContainer}
        onPress={()=>{
          dispatch(action.passMainTopicArticle(item.item.subject))
          navigation.navigate(screenNames.CodeArea)
         }
        }>  
        <Text style={styles.subjectName}>{item.item.subjectName}</Text>
      </TouchableOpacity>
    // </View>
      
    )
  }
  
  
  return (
    <View style={styles.main}>
      <FlatList
        data={mainTopic}
        renderItem={item=>getAllSubjectNames(item)}
        keyExtractor={item=>item.subjectName}
        // numColumns={2}
      />
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
