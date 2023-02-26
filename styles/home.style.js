import { StyleSheet } from "react-native"

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
        columnGap: 100,
    },
    subTitle: {
        color: 'gray'
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
        margin: 4,
    },

    comment: {
        marginTop: 12
    }
})
export default styles