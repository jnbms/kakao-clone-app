import React from "react"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView, View, Text, TextInput, Pressable} from "react-native"
import styles from "../styles/home.style"

export default function Home() {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.view}>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.title}>Welcome to KakaoTalk</Text>
                    <Text style={styles.subTitle}>If you have a Kakao Acount,</Text>
                    <Text style={styles.subTitle}>log in with your email or phone number.</Text>
                </View>

                <View style={{margin: 24}}>
                    <TextInput style={styles.inp} placeholder="Email or phone number" placeholderTextColor='gray'/>
                    <TextInput style={styles.inp} placeholder="Password" placeholderTextColor='gray'/>
                </View>

                <View style={{margin: 12}}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('Main')}>
                        <Text>log in</Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text>sign in</Text>
                    </Pressable>
                </View>

                <View>
                    <Text style={styles.comment}>Find Kakao Account or Password</Text>
                </View>
        </SafeAreaView>
    )
}