import { StackNavigationProp } from '@react-navigation/stack'

export default (props?:any):any=>{
  return{
    navigation:{
      navigate:jest.fn(),
      goBack:jest.fn()
    }
  }
}