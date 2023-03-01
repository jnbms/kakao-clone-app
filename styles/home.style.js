import { Dimensions, StyleSheet } from "react-native"

const deviceWidth = Dimensions.get('window').width
const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 24,
        marginTop: deviceHeight * 0.1,
    },
    subTitle: {
        color: 'gray'
    },
    inp: {
        borderBottomColor: 'lightgray',
        fontSize: 16,
        height: 48,
        // flex: 0.17,
        borderBottomWidth: 1,
        width: deviceWidth * 0.9,
    },
    button: {
        backgroundColor: '#F6F6F6',
        width: deviceWidth * 0.9,
        paddingVertical: 12,
        alignItems: 'center',
        borderRadius: 4,
        margin: 4,
    },

    comment: {
        // marginTop: 12
    }
})
export default styles