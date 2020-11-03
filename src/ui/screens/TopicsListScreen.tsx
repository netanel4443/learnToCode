import React, { useCallback, useEffect } from 'react'
import { View,  StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import * as action from '../../actions/homeActions'
import { RootState } from '../../reducers/rootReducer'
import { StackNavigationProp } from '@react-navigation/stack'
import {  RouteProp } from '@react-navigation/native'
import { screenNames } from '../../navigation'
import CommonFlatList from '../../ui/common/CommonFlatList'

interface Props {
  navigation: StackNavigationProp<any>
  route:RouteProp<any>

}
const TopicsListScreen = ({navigation,route}:Props) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(action.getMainTopic())
  }, [])
  const mainTopic:[] = useSelector((state:RootState) => state.homeReducer.mainTopic)

 
  const onItemPress=useCallback((item:string)=>{
      navigation.push(screenNames.ListOfSubjects,{item})
  },[])
  

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

export default TopicsListScreen
