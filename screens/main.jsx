import React from "react"
import { View, Text, Button, StyleSheet, Image } from "react-native"
import { EvilIcons, MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons'
import kakaoLogo from '../assets/kakao-logo.png'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Chat, More, People, Search } from "../bottom-tab/bottom-tab"

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'white',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        width: '100%',
        // borderWidth: 1
    },
    image: {
        height: 48,
        width: 48,
        borderRadius: 18
    },
    alert: {
        backgroundColor: '#e54c00',
        display: 'flex',
        alignItems: 'center',   
        justifyContent: 'center',
        textAlign: 'center',
        height: 24,
        width: 24,
        color: 'white',
        borderRadius: 100
    },
    bottomTab: {
        width: 400,
        // borderWidth: 1,
        color: 'red'
    }
})


const Tab = createBottomTabNavigator()

function BottomTab() {
    return (
        <Tab.Navigator screenOptions={{tabBarStyle: styles.bottomTab}}>
            <Tab.Screen name="People" component={People} options={{tabBarIcon: () => <Ionicons name="person-outline" size={24} color="black" />}}/>
            <Tab.Screen name="Chat" component={Chat} options={{tabBarIcon: () => <Ionicons name="chatbubble" size={24} color="black" />}}/>
            <Tab.Screen name="Search" component={Search} options={{tabBarIcon: () => <Ionicons name="search-outline" size={24} color="black" />}}/>
            <Tab.Screen name="More" component={More} options={{tabBarIcon: () => <Feather name="more-horizontal" size={24} color="black" />}}/>
            {/* <Tab.Screen name="Search" component={Search}/> */}
            {/* <Tab.Screen name="More" component={More}/> */}
        </Tab.Navigator>
    )
}



export default function Main({navigation}) {
    return (
        <View style={styles.view}>
            <BottomTab/>

        </View>
    )
}


