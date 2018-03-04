import { AppRegistry } from 'react-native';
import {StackNavigator} from 'react-navigation';

import LoginPage from './src/screens/LoginPage'
import RegisterPage from './src/screens/RegisterPage'

const App = StackNavigator({
  Login: {screen: LoginPage},
  Register: {screen: RegisterPage}
})

AppRegistry.registerComponent('BibleReader', () => App);
