import React from 'react';
import { View } from 'react-native';

import logoImg from '../../assets/minilogo.png';

import styles from './styles';

export default function Detail() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />


            </View >
        </View>
    );
};