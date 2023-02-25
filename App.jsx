import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Main } from './screens'

const Stack = createNativeStackNavigator()
const BasicTheme = {
  ...DefaultTheme,
  colors: {
    // primary: 'rgb(255, 45, 85)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    // border: 'rgb(199, 199, 204)',
    // notification: 'rgb(255, 69, 58)',
  }
}
export default function App() {
  return (
    <NavigationContainer theme={BasicTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Main' component={Main}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}