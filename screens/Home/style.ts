import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#383535'
    },
    title: {
        color: '#fff',
        fontSize: 26,
        textAlign: 'center',
        marginTop: 24
    },
    score: {
        flexDirection: 'row',
        marginTop: 20
    },
    right: {
        paddingLeft: 10,
        color: '#4f8ff0',
        fontSize: 20
    },
    wrong: {
        color: '#eb0c56',
        marginLeft: 170,
        fontSize: 20
    },
    points: {
        color: '#fff',
        marginLeft: 24,
        fontSize: 20
    },
    btnSort: {
        height: 48,
        borderRadius: 5,
        marginStart: 70,
        marginEnd: 70,
        marginTop: 20,
        backgroundColor: '#1c6feb',
        alignItems: 'center',
        justifyContent: 'center' 
    },
    txtBtnSort: {
        color: '#fff',
        fontSize: 20
    },
    horizontalLine: {
        height: 1,
        backgroundColor: 'gray',
        marginTop: 15,
        marginHorizontal: 10
    },
    label: {
        fontSize: 22,
        color: '#fff',
        marginTop: 35,
        marginLeft: 30
    },
    equation: {
        flexDirection: 'row',
        gap: 30
    },
    equationComponents: {
        height: 56,
        width: 70,
        borderRadius: 5,
        marginTop: 20,
        marginLeft:30,
        backgroundColor: '#4f8ff0',
        alignItems: 'center',
        justifyContent: 'center'
    },
    equationComponentsText: {
        color: '#fff',
        fontSize: 24
    },
    inputAnswer: {
        height: 56,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#8f177d',
        fontSize: 24,
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 100
    },
    btnValidate: {
        height: 56,
        backgroundColor: '#34ab24',
        marginTop: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: 30
    },
    btnNewGame: {
        height: 56,
        backgroundColor: '#c42814',
        marginTop: 140,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: 55
    }

})