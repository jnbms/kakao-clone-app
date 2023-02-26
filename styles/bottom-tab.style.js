import { StyleSheet } from "react-native"
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
        borderWidth: 1,
        color: 'red'
    },
    iconContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 200
    },
    subTitle: {fontWeight: 'bold', fontSize: 16},
    flatlist: {flexGrow: 0},
    description: {color:'gray'},
    notificationColumn: {display:'flex',alignItems:'flex-end'}
})
export default styles