import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    order: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#aaa7c7',
        marginBottom: 16,
        marginTop: 48
    },

    orderProperty: {
        fontSize: 14,
        color: '#2c114f',
        fontWeight: 'bold',
        marginTop: 24
    },

    orderValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#FFFFFF'
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#aaa7c7',
        marginBottom: 16
    },

    blueberryTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#2c114f',
        lineHeight: 30
    },

    blueberryDescription: {
        fontSize: 15,
        color: '#FFFFFF',
        marginTop: 16
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    action: {
        backgroundColor: '#2c114f',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
         color: '#FFFFFF',
         fontSize: 15,
         fontWeight: 'bold'
    }
});