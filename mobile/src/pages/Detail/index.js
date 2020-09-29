import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/blueberries.png';

import styles from './styles';

export default function Detail() {

    const navigation = useNavigation();
    const message = 'Hi! I am reaching out because I would like to buy your fruit!';

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Batch Name: 500gr of fresh blueberries',
            recipients: ['sara.dsc@hotmail.com'],
            body: message
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=932337758&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#2c114f" />
                </TouchableOpacity>
            </View >

            <View style={styles.order}>
                <Text style={[styles.orderProperty, { marginTop: 0 }]}>Company:</Text>
                <Text style={styles.orderValue}>BATATA</Text>

                <Text style={styles.orderProperty}>Batch:</Text>
                <Text style={styles.orderValue}>Marvelous blueberries </Text>

                <Text style={styles.orderProperty}>Value:</Text>
                <Text style={styles.orderValue}>5,00€</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.blueberryTitle}>Pick up your blueberries!</Text>
                <Text style={styles.blueberryTitle}>Help your local company!</Text>

                <Text style={styles.blueberryDescription}>Contact them:</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};