import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Footer from '../components/Footer';

export default class Ratings extends Component {

    render() {
        return (
            <View style={styles.screen}>
                <Text style={styles.title}>Badges</Text>
                <View style={styles.list}>
                    <FlatList
                        data={[{icon: 'bottle-wine', name: 'First Bottle'}, {icon: 'account', name: 'Account Created'}, {icon: 'account-plus', name: 'First Friend'}, {icon: 'account-multiple-plus', name: 'Make 10 Friends'}, {icon: 'star-half', name: 'First Rating'}]}
                        numColumns={3}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                onPress={() => {}}
                                style={styles.badge}>
                                <MaterialCommunityIcons
                                    name={item.icon}
                                    style={styles.icon}
                                />
                                <Text style={styles.badgeText}>{item.name}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
                <Footer navigation={this.props.navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#EEE7DC'
    },
    title: {
        fontSize: 24,
        alignContent: 'flex-start',
        margin: '5%'
    },
    list: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        marginHorizontal: '1%'
    },
    badge: {
        height: 110,
        width: '29%',
        backgroundColor: 'white',
        margin: '1.8%',
        justifyContent: 'center'
    },
    badgeText: {
        textAlign: 'center',
        maxWidth: '98%',
        fontSize: 12
    },
    icon: {
        fontSize: 65,
        alignSelf: 'center'
    }
});