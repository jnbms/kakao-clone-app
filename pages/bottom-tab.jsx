import { View, Text, Image, FlatList } from "react-native"
import { EvilIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { useNavigation, useTheme } from "@react-navigation/native"
import styles from "../styles/bottom-tab.style"
// 이미지 처리 방법 고려하기
import kakaoLogo from '../assets/kakao-logo.png'
import chattings from "../data/chats.json"

const People = () => <View></View>
const Search = () => <View></View>
const More = () => <View></View>

function Chat() {
    const navigation = useNavigation()
    return (
        <View>
            <View style={styles.header}>
                <Text style={styles.title} onPress={() => navigation.navigate('Home')} >Chats</Text>
                <View style={styles.iconContainer}>
                    <EvilIcons name="search" size={28} color="black" />
                    <MaterialCommunityIcons name="chat-plus-outline" size={28} color="black" />
                    <Ionicons name="musical-notes-outline" size={28} color="black" />
                    <Ionicons name="md-settings-outline" size={28} color="black" />
                </View>
            </View>
            <FlatList
                style={styles.flatlist}
                data={chattings}
                renderItem={({item}) =>
                    <View style={styles.row}>
                        <Image source={kakaoLogo} style={styles.image}/>
                        <View>
                            <Text style={styles.subTitle}>{item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
                        <View style={styles.notificationColumn}>
                            <Text style={styles.description}>{item.date}</Text>
                            { !item.isconfirmed ? <Text style={styles.alert}/> : <Text style={styles.alert}>{item.isconfirmed}</Text> }
                        </View>
                    </View>
                }
                keyExtractor={(_,index) => index}
            />
        </View>
    )
}

export {People, Search, Chat, More}