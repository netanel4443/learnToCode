import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ListRenderItemInfo, ActionSheetIOS } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../actions/homeActions'
import { RootState } from '../reducers/rootReducer'
import { StackNavigationProp } from '@react-navigation/stack'
import { screenNames } from '../navigation'
import LoadingSpinnerModal from '../ui/LoadingSpinnerModal'

interface Props {
  navigation: StackNavigationProp<any>
}
const ListOfSubjects = ({navigation}:Props) => {

  const dispatch = useDispatch()
  const mainTopic:[{subject:string,language:string,subjectName:string}] = useSelector((state:RootState) => state.homeReducer.mainTopic)
  const isLoading= useSelector((state:RootState) => state.homeReducer.isLoading)
 
  useEffect(() => {
    dispatch(action.getMainTopic())
  }, [])

  const getAllSubjectNames=(item:ListRenderItemInfo<{subject: string; language: string; subjectName: string;}>):any=>{
  return (
 
      <TouchableOpacity 
      style={styles.subjectContainer}
        onPress={()=>{
          navigation.navigate(screenNames.CodeArea)
            dispatch(action.getChosenArticle(item.item.subject))
         }
        }>  
        <Text style={styles.subjectName}>{item.item.subjectName}</Text>
      </TouchableOpacity>      
    )
  }

  return (
    <View style={styles.main}>
      <FlatList
        data={mainTopic}
        renderItem={item=>getAllSubjectNames(item)}
        keyExtractor={item=>item.subjectName}
      />
      <LoadingSpinnerModal isVisible={isLoading}/>
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
