import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import logoImg from '../../assets/minilogo.png';

import styles from './styles';

export default function Orders() {

    const navigation = useNavigation();
    
    function navigateToDetail() {
        navigation.navigate('Detail');
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total of <Text style={styles.headerTextBold}>0 batches</Text>.
                </Text>
            </View >

            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.description}>Pick one of the batches below and get the freshest fruit while helping your local farmers!</Text>

            <FlatList
                data={[1, 2, 3]}
                style={styles.orderList}
                keyExtractor={order => String(order)}
                showsVerticalScrollIndicator={false}
                renderItem={() => (
                    <View style={styles.order}>
                        <Text style={styles.orderProperty}>Company:</Text>
                        <Text style={styles.orderValue}>BATATA</Text>

                        <Text style={styles.orderProperty}>Batch:</Text>
                        <Text style={styles.orderValue}>Marvelous blueberries </Text>

                        <Text style={styles.orderProperty}>Value:</Text>
                        <Text style={styles.orderValue}>5,00€</Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={navigateToDetail}
                        >
                            <Text style={styles.detailsButtonText}>See more details</Text>
                            <Feather name="arrow-right" size={16} color="#2c114f" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};