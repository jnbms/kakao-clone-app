import { View, Text, Button, StyleSheet, Image } from "react-native"
import { EvilIcons, MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons'
import kakaoLogo from '../assets/kakao-logo.png'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import { Chat, More, People, Search } from "../bottom-tab/bottom-tab"

// 중복 주의
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
        borderWidth: 1,
        color: 'red'
    }
})


function People() {
    return (
        <View>
            <View style={styles.row}>
                <Text style={styles.title}>Chats</Text>
                {/* 제목과의 구분이 필요하다. */}
                <EvilIcons name="search" size={24} color="black" />
                <MaterialCommunityIcons name="chat-plus-outline" size={24} color="black" />
                <Ionicons name="musical-notes-outline" size={24} color="black" />
                <Ionicons name="md-settings-outline" size={24} color="black" />
            </View>

            <View style={styles.row}>
                <Image source={kakaoLogo} style={styles.image}/>
                <View>
                    <Text>KakaoTalk</Text>
                    <Text>Please check My Kakao Account Info</Text>
                </View>
                <View>
                    <Text>21:22</Text>
                    <Text style={styles.alert}>1</Text>
                </View>

            </View>
        </View>
    )
}

function Search() {
    return (
        <Text></Text>
    )
}

function Chat() {
    return (
        <Text></Text>
    )
}

function More() {
    return (
        <Text></Text>
    )
}

export {People, Search, Chat, More}