import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 22,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 46,
        color: '#2c114f',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 14,
        lineHeight: 24,
        color: '#737380'
    },

    orderList: {
        marginTop: 32,
    },

    order: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#aaa7c7',
        marginBottom: 16
    }
});