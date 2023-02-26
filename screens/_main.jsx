import React from "react"
import { View } from "react-native"
import { Ionicons, Feather } from '@expo/vector-icons'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Chat, More, People, Search } from "../pages/bottom-tab"
import styles from "../styles/main.style"

const Tab = createBottomTabNavigator()
function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{tabBarStyle: styles.bottomTab, headerShown: false, tabBarShowLabel: false}} initialRouteName="Chat">
            <Tab.Screen name="People" component={People} options={{tabBarIcon: () => <Ionicons name="person-outline" size={24} color="black" />}}/>
            <Tab.Screen name="Chat" component={Chat} options={{tabBarIcon: () => <Ionicons name="chatbubble" size={24} color="black" />}}/>
            <Tab.Screen name="Search" component={Search} options={{tabBarIcon: () => <Ionicons name="search-outline" size={24} color="black" />}}/>
            <Tab.Screen name="More" component={More} options={{tabBarIcon: () => <Feather name="more-horizontal" size={24} color="black" />}}/>
        </Tab.Navigator>
    )
}

export default function Main() {
    return (
            <View style={styles.view}>
                <BottomTab/>
            </View>
    )
}


