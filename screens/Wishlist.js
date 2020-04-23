import React, { Component } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Footer from '../components/Footer';
import Header from '../components/Header';

import elijah_craig_small_batch_bourbon from '../images/elijah_craig_small_batch_bourbon.jpg';

export default class Wishlist extends Component {

    render() {
        const bottles = [{label: elijah_craig_small_batch_bourbon, distillery: 'Heaven Hill', name: 'Elijah Craig Small Batch Bourbon', location: 'United States of America', rating: 4.2, price: '$20.00'}]
        if (bottles.length == 0) {
            return (
                <View style={styles.noneScreen}>
                    <Text style={styles.noneTextUpper}>No wines in your Wishlist</Text>
                    <View
                        style={{
                            borderBottomColor: 'grey',
                            borderBottomWidth: 1,
                            marginVertical: '3%',
                            width: '80%',
                            height: '2%'
                        }}
                    ></View>
                    <Text style={styles.noneTextLower}>Add bottles to your Wishlist to keep track of what you'd like to try</Text>
                    <Footer navigation={this.props.navigation} />
                </View>
            )
        }
        else {
            return (
                <View style={styles.screen}>
                    <Header />
                    <ScrollView style={styles.scroll}>
                        <TextInput style={styles.search}>Search</TextInput>
                        <FlatList
                            data={bottles}
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
                    </ScrollView>
                    <Footer navigation={this.props.navigation} />
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    noneTextUpper: {
        textAlign: 'center',
        fontSize: 20,
        width: '80%'
    },
    noneTextLower: {
        textAlign: 'center',
        fontSize: 15,
        width: '80%',
        color: 'grey'
    },
    noneScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEE7DC',
    },
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#EEE7DC',
    },
    scroll: {
        width: '100%'
    },
    search: {
        height: 35,
        textAlign: 'center',
        fontSize: 18,
        margin: '4%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#DCDCDC'
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
        fontWeight: 'bold'
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