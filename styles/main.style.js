import { StyleSheet, StatusBar, Dimensions } from "react-native"

const styles = StyleSheet.create({
    view: {
        marginTop:StatusBar.currentHeight,
        flex: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
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
        overflow: "hidden",
        borderRadius: "100%"
    },
    bottomTab: {
        width: Dimensions.get('window').width,
        backgroundColor: 'white'
    }
})
export default styles