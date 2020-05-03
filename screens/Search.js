import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
const credentials = require('../credentials');

import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

export default class Ratings extends Component {

    state = {
        bottles: []
    }

    getBottles() {
        fetch('http://' + credentials.ipAddr + ':3000/get_bottles', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState(() => (
                {
                    bottles: responseJson
                }
            ))
            console.log(responseJson);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {

        this.getBottles();

        return (
            <View style={styles.screen}>
                <Header />
                    <SearchBar />
                    <FlatList
                        data={this.state.bottles}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                // onPress={() => Alert.alert('Bottle')}
                                style={styles.list}>
                                <Image source={item.label} style={styles.image}></Image>
                                <View style={styles.text}>
                                    <View style={styles.top}>
                                        <Text style={styles.distillery}>{item.distillery}</Text>
                                        <Text style={styles.name}>{item.name}</Text>
                                    </View>
                                    <View style={styles.bottom}>
                                        <View style={styles.location}>
                                            <MaterialIcons name="location-on" style={styles.locationIcon} />
                                            <Text style={styles.locationText}>{item.location}</Text>
                                        </View>
                                        <View style={styles.text2}>
                                            <View style={styles.group}>
                                                <Ionicons name="md-star" style={styles.icon} />
                                                <Text style={styles.rating}>{item.rating}</Text>
                                            </View>
                                            <View style={styles.group}>
                                                <Ionicons name="md-pricetag" style={styles.icon} />
                                                <Text style={styles.price}>{item.price}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                <Footer navigation={this.props.navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EEE7DC'
    },
    list: {
        height: 120,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: '1%',
        backgroundColor: 'white'
    },
    text: {
        height: '80%',
        width: '80%',
        justifyContent: 'space-between'
    },
    text2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginLeft: '5%'
    },
    top: {
        justifyContent: 'flex-start'
    },
    bottom: {
        justifyContent: 'flex-end'
    },
    group: {
        flexDirection: 'row'
    },
    location: {
        flexDirection: 'row',
        marginLeft: '5%',
        alignItems: 'center'
    },
    distillery: {
        fontSize: 13,
        margin: 4,
        marginLeft: '6%'
    },
    name: {
        fontSize: 15,
        marginLeft: '6%',
        fontWeight: 'bold',
        width: '80%',
        height: 37
    },
    locationIcon: {
        fontSize: 17,
        color: 'grey'
    },
    locationText: {
        fontSize: 12,
        margin: 4
    },
    rating: {
        fontSize: 12,
        margin: 4
    },
    price: {
        fontSize: 12,
        margin: 4
    },
    image: {
        height: '80%',
        width: '20%',
        marginLeft: '5%'
    },
    icon: {
        fontSize: 20,
        color: 'grey'
    }
});