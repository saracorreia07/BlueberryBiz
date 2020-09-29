import React from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/minilogo.png';

import styles from './styles';

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={() => { }}>
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
                    <TouchableOpacity style={styles.action} onPress={() => { }}>
                        <Text style={styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.action} onPress={() => { }}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};