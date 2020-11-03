import {NativeModules} from 'react-native'
import {} from '@react-native-firebase/admob'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('@react-native-firebase/admob',()=>{
  const mockComponent = require('react-native/jest/mockComponent');
  return mockComponent('@react-native-firebase/admob');
})

/**
 * Set up Enzyme to mount to DOM, simulate events,
 * and inspect the DOM in tests.
 */
Enzyme.configure({ adapter: new Adapter() });