import React, { useCallback, useEffect, useMemo } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, ListRenderItemInfo, ActionSheetIOS, ViewPropTypes, ViewProps } from 'react-native'

interface Props<T> {
  pressAction(item:T):void
  itemList:T[]

}
const CommonFlatList= <T extends string>({pressAction,itemList}:Props<T>) => {

  const getAllSubjectNames=useCallback((item:ListRenderItemInfo<T>)=>{
      return (
          <TouchableOpacity
            testID={item.item}
            style={styles.subjectContainer}
            onPress={()=>{ pressAction(item.item)}
            }>  
            <Text style={styles.subjectName}>{item.item}</Text>
          </TouchableOpacity>      
        )
  }
  ,[])

  return (
    <View style={styles.main}>
      <FlatList
        data={itemList}
        renderItem={getAllSubjectNames}
        keyExtractor={(item,index)=>index.toString()}
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

export default CommonFlatList
