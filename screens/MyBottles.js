import React, { Component } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import Footer from '../components/Footer';
import Header from '../components/Header';

import profile_icon from '../images/profile_icon.png';

export default class MyBottles extends Component {

    render() {
        const bottles = [{label: profile_icon, name: 'Elijah Craig', type: 'Bourbon', location: 'USA', rating: 4.2, price: '$20.00'}, {label: profile_icon, name: 'Elijah Craig', type: 'Bourbon', location: 'USA', rating: 4.2, price: '$20.00'}, {label: profile_icon, name: 'Elijah Craig', type: 'Bourbon', location: 'USA', rating: 4.2, price: '$20.00'}, {label: profile_icon, name: 'Elijah Craig', type: 'Bourbon', location: 'USA', rating: 4.2, price: '$20.00'}, {label: profile_icon, name: 'Elijah Craig', type: 'Bourbon', location: 'USA', rating: 4.2, price: '$20.00'}]
        return (
            <View style={styles.screen}>
                <Header />
                <ScrollView style={styles.scroll}>
                    <TextInput style={styles.search}>Search</TextInput>
                    <FlatList
                            data={bottles}
                            renderItem={({ item }) =>
                                <TouchableOpacity
                                    onPress={() => Alert.alert('Bottle')}
                                    style={styles.list}>
                                    <Image source={item.label} style={styles.image}></Image>
                                    <View style={styles.text}>
                                        <Text style={styles.name}>{item.name}</Text>
                                        <Text style={styles.name}>{item.type}</Text>
                                        <Text style={styles.name}>{item.location}</Text>
                                        <View style={styles.text2}>
                                            <Text style={styles.name}>{item.rating}</Text>
                                            <Text style={styles.name}>{item.price}</Text>
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

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#875445'
    },
    scroll: {
        width: '100%'
    },
    search: {
        height: '5%',
        textAlign: 'center',
        fontSize: 18,
        margin: '4%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30
    },
    list: {
        height: 120,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        height: 120,
        width: '50%'
    },
    text2: {
        flexDirection: 'row'
    },
    name: {
        fontSize: 15,
        margin: 5
    },
    image: {
        height: '90%',
        width: '20%'
    }
});