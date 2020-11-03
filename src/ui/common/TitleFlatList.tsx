import React from 'react'
import { View, Text, VirtualizedList, SectionList, ListRenderItemInfo, StyleSheet } from 'react-native'
import { initialWindowMetrics } from 'react-native-safe-area-context'

interface Props{
  items:Map<string,[]>
}

const TitleFlatList = ({items}:Props) => {


  const getItemCount = () => {
    return items.size
  }
  
  const Item = (item:ListRenderItemInfo<{key: string;value: [] | undefined}>)=> {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item}</Text>
      </View>
    );
  }
  const getItem = (data:string, index:number) => {
   return {
    key:data,
    value:items.get(data)
   }
  }
  
  return (
    <View>
      <VirtualizedList
        data={items}
        renderItem={(item) => <Item item={item} />}
        keyExtractor={item => item.key}
        getItemCount={getItemCount}
        getItem={getItem}
      />
    </View>
  )
}

const styles=StyleSheet.create({
  title:{
    minHeight:40,
    width:'100%',
    textAlign:'center',
  },
  item:{
    minHeight:50,
    width:'100%',
    textAlign:'center'
  }

})

export default TitleFlatList
