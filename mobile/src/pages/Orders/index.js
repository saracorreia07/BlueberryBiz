import React from 'react';
import { View, Image, Text } from 'react-native';

import logoImg from '../../assets/minilogo.png';

import styles from './styles';

export default function Orders() {
    return (
        <View style={styles.container}>
            <View style={styles.header}></View>
            <Image source={logoImg} />
            <Text style={styles.headerText}>
                Total of <Text style={styles.headerTextBold}>0 batches</Text>.
            </Text>

            <Text styles={styles.title}>Welcome!</Text>
            <Text style={styles.description}>Pick one of the batches below and get the freshest fruit while helping your local farmers!</Text>
        </View>
    );
};