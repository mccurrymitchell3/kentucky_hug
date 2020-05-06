import React, { Component } from 'react';
import { Alert, FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Footer from '../components/Footer';
import Header from '../components/Header';
import credentials from '../credentials';

import elijah_craig_small_batch_bourbon from '../images/bourbon/elijah_craig_small_batch_bourbon.jpg';

export default class Home extends Component {

    state = {
        username: this.props.navigation.state.params.username,
        notifications: []
    }

    componentDidMount() {
        this.renderFriendRequests(this.state.username);
    }

    renderFriendRequests(username) {
        let friendRequests = [];
        fetch('http://' + credentials.ipAddr + ':3000/get_friend_requests?username=' + username, {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((responseJson) => {
            let users = [];
            for (var i = 0; i < responseJson.length; i++) {
                users.push(responseJson[i].username);
            }
            this.getUsers(users, friendRequests);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    getUsers(users, friendRequests) {
        if (users.length == 0) {
            this.setState({notifications: []})
        } else {
            users.forEach(username => {
                fetch('http://' + credentials.ipAddr + ':3000/get_user_by_username?username=' + username, {
                    method: 'GET'
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    let user = {
                        username: responseJson[0].username,
                        firstName: responseJson[0].first_name,
                        lastName: responseJson[0].last_name
                    };
                    friendRequests.push(user);
                    this.setState({notifications: friendRequests})
                })
                .catch((error) => {
                    console.error(error);
                });
            })
        }
    }

    addFriend(username, friend_username) {
        fetch('http://' + credentials.ipAddr + ':3000/add_friend', {
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
            Alert.alert('Success', 'Friend added');
        })
        .catch((error) => {
            console.error(error);
        });
    }

    removeFriendRequest(username, friend_username) {
        fetch('http://' + credentials.ipAddr + ':3000/remove_friend_request', {
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
        .then(() => {
            this.renderFriendRequests(friend_username);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <View style={styles.screen}>
                <Header />
                    <FlatList
                        data={this.state.notifications}
                        extraData={this.state}
                        renderItem={({ item }) =>
                            <View style={styles.list}>
                                <Image source={item.profile_pic} style={styles.image} />
                                <View>
                                    <Text style={styles.name}>{item.firstName} {item.lastName}</Text>
                                    <Text style={styles.mutuals}>{item.mutuals} mutual friends</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => {
                                        this.addFriend(item.username, this.state.username);
                                        this.removeFriendRequest(item.username, this.state.username);
                                    }}
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