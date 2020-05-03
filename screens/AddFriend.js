import React, { Component } from 'react';
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import credentials from '../credentials';
import Footer from '../components/Footer';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

import elijah_craig_small_batch_bourbon from '../images/bourbon/elijah_craig_small_batch_bourbon.jpg';

export default class AddFriend extends Component {

    hello() {Alert.alert('Success', 'Test');}

    requestFriend(username, friend_username) {
        fetch('http://' + credentials.ipAddr + ':3000/request_friend', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                friend_username: friend_username
            }),
        })
        .then((response) => {
            Alert.alert('Success', 'Friend request sent');
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {

        const suggestions = [{profile_pic: elijah_craig_small_batch_bourbon, name: 'Madison Hicks', username: 'Madison', mutuals: 9}, {profile_pic: elijah_craig_small_batch_bourbon, name: 'Madison Hicks', username: 'madisonhicks1213', mutuals: 10}]

        return (
            <View style={styles.screen}>
                <Header />
                <SearchBar />
                    <FlatList
                        data={suggestions}
                        renderItem={({ item }) =>
                            <View style={styles.list}>
                                <Image source={item.profile_pic} style={styles.image} />
                                <View>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.mutuals}>{item.mutuals} mutual friends</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => this.requestFriend('Mmccurry3', item.username)}
                                    style={styles.add}>
                                        <Text style={styles.addText}>Add</Text>
                                </TouchableOpacity>
                            </View>
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
        backgroundColor: '#EEE7DC'
    },
    list: {
        height: 80,
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        alignItems: 'center'
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 50,
        margin: 10
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        width: 180
    },
    mutuals: {

    },
    add: {
        height: 40,
        width: 90,
        backgroundColor: '#6495ED',
        borderRadius: 30,
        position: 'absolute',
        right: 15
    },
    addText: {
        color: 'white',
        textAlign: 'center',
        lineHeight: 40,
        fontSize: 18
    }
});