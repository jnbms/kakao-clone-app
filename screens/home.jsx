import React from "react"
import { SafeAreaView, StyleSheet, View, Text, TextInput, Button, Pressable } from "react-native"

// 1. StyleSheet 아닌 모듈화 생각해보기
// 2. flex item의 간격 설정
const styles = StyleSheet.create({
    view: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
    },
    title: {
        fontSize: 24,
        margin: 24,
        marginTop: 100,
        columnGap: 100
    },
    subTitle: {
        color: 'gray',
        // marginBottom: 24    
    },
    inp: {
        fontSize: 16,
        height: 48,
        borderBottomWidth: 1,
        width: 360,
        borderBottomColor: 'lightgray',
    },
    button: {
        backgroundColor: '#F6F6F6',
        paddingVertical: 12,
        width: 360,
        alignItems: 'center',
        borderRadius: 4,
        margin: 4
    },
    buttonText: {
        fontSize: 16
    },
    comment: {
        marginTop: 12
    }
})

// flatList로 완성해야합니다.
export default function Home({ navigation }) {

    return (
        <SafeAreaView style={styles.view}>
                <Text style={styles.title}>Welcome to KakaoTalk</Text>
                <Text style={styles.subTitle}>If you have a Kakao Acount,</Text>
                <Text style={styles.subTitle}>log in with your email or phone number.</Text>
                <TextInput style={styles.inp} placeholder="Email or phone number" placeholderTextColor='gray'/>
                <TextInput style={styles.inp} placeholder="Password" placeholderTextColor='gray'/>
                {/* <Text>ASD</Text> */}
                <Pressable style={styles.button} onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.buttonText}>Log In</Text>
                </Pressable>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </Pressable>
                <Text style={styles.comment}>Find Kakao Account or Password</Text>
        </SafeAreaView>
    )
}