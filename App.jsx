import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Main } from './screens'

const Stack = createNativeStackNavigator()
const BasicTheme = {
  ...DefaultTheme,
  colors: {
    primary: 'rgb(0, 0, 0)',
    secondary: 'rgb(160, 160, 160)',
    notification: 'rgb(255, 0, 0)',
    background: 'rgb(255, 255, 255)',
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