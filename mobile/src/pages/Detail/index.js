import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/blueberries.png';

import styles from './styles';

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();

    const order = route.params.order;
    const message = `Hi ${order.name}! I am reaching out because I would like to buy your ${order.title}, with the cost of ${Intl.NumberFormat('pt-PT', {style: 'currency', currency: 'EUR'}).format(order.value)}`;

    function navigateBack() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Batch Name: ${order.title}`,
            recipients: [order.email],
            body: message
        });
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${order.whatsapp}&text=${message}`);
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
                <Text style={styles.orderValue}>{order.name} from {order.city} - {order.postalCode}</Text>

                <Text style={styles.orderProperty}>Batch:</Text>
                <Text style={styles.orderValue}>{order.title}</Text>

                <Text style={styles.orderProperty}>Value:</Text>
                <Text style={styles.orderValue}>
                    {Intl.NumberFormat('pt-PT', {
                        style: 'currency',
                        currency: 'EUR'
                    }).format(order.value)}
                </Text>
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