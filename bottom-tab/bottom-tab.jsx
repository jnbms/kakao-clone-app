import { View, Text, Button, StyleSheet, Image, FlatList } from "react-native"
import { EvilIcons, MaterialCommunityIcons, Ionicons, Feather } from '@expo/vector-icons'
import kakaoLogo from '../assets/kakao-logo.png'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
// import { Chat, More, People, Search } from "../bottom-tab/bottom-tab"


const chats = [
    {
        // data가 입력될 때, 좀 더 올바른 표현 필요
        date: '21:21',
        title: 'KakaoTalk',
        description: 'Please check My Kakao Account Info',
        isconfirmed: false
    }
]


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
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // flex 값을 이용하도록 변경하기
        height: 70,
        padding: 10
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 80, 
        // marginHorizontal: 12
        // borderWidth: 1
    },
    image: {
        height: 52,
        width: 52,
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
        borderRadius: 100,
        marginTop: 4
    },
    bottomTab: {
        // width: 400,
        borderWidth: 1,
        color: 'red'
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'space-around',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 200
    },
    icon: {
        
    }
})


function People() {
    return (
        <View>
        </View>
    )
}

function Search() {
    return (
        <Text></Text>
    )
}

// 일일히 네이게이션을 추가해줘야하는 문제
function Chat({navigation}) {
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title} onPress={() => navigation.navigate('Home')} >Chats</Text>
                {/* 제목과의 구분이 필요하다. */}
                <View style={styles.iconContainer}>
                    <EvilIcons name="search" size={32} color="black" />
                    <MaterialCommunityIcons name="chat-plus-outline" size={32} color="black" />
                    <Ionicons name="musical-notes-outline" size={32} color="black" />
                    <Ionicons name="md-settings-outline" size={32} color="black" />
                </View>
            </View>
            {/* message card */}
            
            <FlatList
                style={{flexGrow: 0}}
                data={chats}
                renderItem={({item}) => 
                    <View style={styles.row}>
                        <Image source={kakaoLogo} style={styles.image}/>
                        <View>
                            <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.title}</Text>
                            <Text style={{color:'gray'}}>{item.description}</Text>
                        </View>
                        <View style={{display:'flex',alignItems:'flex-end'}}>
                            <Text style={{color:'gray'}}>{item.date}</Text>
                            { !item.isconfirmed && <Text style={styles.alert}>1</Text> }
                        </View>
                    </View>
                }
                keyExtractor={(_,index) => index}
            />
            


        </View>
    )
}

function More() {
    return (
        <Text></Text>
    )
}


export {People, Search, Chat, More}