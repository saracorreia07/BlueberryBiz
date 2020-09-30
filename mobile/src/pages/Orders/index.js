import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/blueberries.png';

import styles from './styles';

export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    function navigateToDetail(order) {
        navigation.navigate('Detail', { order });
    }

    async function loadOrders() {
        if (loading) {
            return;
        }

        if (total > 0 && orders.length === total) {
            return;
        }

        setLoading(true);

        const response = await api.get('orders', {
            params: { page }
        });

        setOrders([...orders, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadOrders();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total of <Text style={styles.headerTextBold}>{total} batches</Text>.
                </Text>
            </View >

            <Text style={styles.title}>Welcome!</Text>
            <Text style={styles.description}>Pick one of the batches below and get the freshest fruit while helping your local farmers!</Text>

            <FlatList
                data={orders}
                style={styles.orderList}
                keyExtractor={order => String(order.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadOrders}
                onEndReachedThreshold={0.2} 
                renderItem={({ item: order }) => (
                    <View style={styles.order}>
                        <Text style={styles.orderProperty}>Company:</Text>
                        <Text style={styles.orderValue}>{order.name}</Text>

                        <Text style={styles.orderProperty}>Batch:</Text>
                        <Text style={styles.orderValue}>{order.title}</Text>

                        <Text style={styles.orderProperty}>Value:</Text>
                        <Text style={styles.orderValue}>
                            {Intl.NumberFormat('pt-PT', {
                                style: 'currency',
                                currency: 'EUR'
                            }).format(order.value)}
                        </Text>

                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(order)}
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