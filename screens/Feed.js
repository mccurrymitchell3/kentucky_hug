import React, { Component } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Footer from '../components/Footer';
import Header from '../components/Header';

import elijah_craig_small_batch_bourbon from '../images/bourbon/elijah_craig_small_batch_bourbon.jpg';
import kentucky_bourbon_festival from '../images/kentucky_bourbon_festival.png'

export default class Feed extends Component {

    state = {
        selectedTab: 'Friends',
        friendsFeed: [{profile_pic: elijah_craig_small_batch_bourbon, name: 'Mitch McCurry', description: 'rated a bourbon', photo: elijah_craig_small_batch_bourbon, caption: 'Love this!'}],
        eventsFeed: [{profile_pic: elijah_craig_small_batch_bourbon, name: 'Kentucky Bourbon Festival', description: '', photo: kentucky_bourbon_festival, caption: 'Come try the best bourbons in the world!'}],
        groupsFeed: [{profile_pic: elijah_craig_small_batch_bourbon, name: 'Mitch McCurry', description: 'rated a bourbon', photo: elijah_craig_small_batch_bourbon, Fcaption: 'Love this!'}]
    }

    loadFeed = () => {
        if (this.state.selectedTab == 'Friends') {
            return this.state.friendsFeed
        } else if (this.state.selectedTab == 'Events') {
            return this.state.eventsFeed
        } else {
            return this.state.groupsFeed
        }
    }

    // renderFriends(username) {
    //     fetch('http://' + credentials.ipAddr + ':3000/get_friends?username=' + user_id, {
    //         method: 'GET'
    //     }).then((response) => response.json())
    //         .then((responseJson) => {
    //             feed = []
    //             for (var i = 0; i < responseJson.length; i++) {
    //                 var datetime = new Date(responseJson[i].time);
    //                 var post = {
    //                     name: responseJson[i].firstName + ' ' + responseJson[i].lastName,
    //                     picture: this.getProfilePic(responseJson[i].firstName),
    //                     timeStamp: datetime.toLocaleString(),
    //                     caption: responseJson[i].caption
    //                 }
    //                 feed.push(post);
    //             }

    //             this.setState({ friendsFeed: feed });
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    render() {
        return (
            <View style={styles.screen}>
                <Header />
                <View style={styles.tabs}>
                    <TouchableOpacity
                        onPress={() => this.setState({selectedTab: 'Friends'})}
                        style={{
                            width: '33%',
                            height: '230%',
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            backgroundColor: this.state.selectedTab == 'Friends' ? 'white' : '#EEE7DC'
                        }}>
                        <Text style={styles.tabText}>Friends</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({selectedTab: 'Events'})}
                        style={{
                            width: '33%',
                            borderRightColor: 'black',
                            borderRightWidth: 1,
                            borderLeftColor: 'black',
                            borderLeftWidth: 1,
                            height: '230%',
                            backgroundColor: this.state.selectedTab == 'Events' ? 'white' : '#EEE7DC'
                        }}>
                        <Text style={styles.tabText}>Events</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.setState({selectedTab: 'Groups'})}
                        style={{
                            width: '33%',
                            height: '230%',
                            borderTopRightRadius: 10,
                            borderBottomRightRadius: 10,
                            backgroundColor: this.state.selectedTab == 'Groups' ? 'white' : '#EEE7DC'
                        }}>
                        <Text style={styles.tabText}>Groups</Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scroll}>
                    <FlatList
                        data={this.loadFeed()}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                // onPress={() => Alert.alert('Post')}
                                style={styles.list}>
                                <View style={styles.profile}>
                                    <Image source={item.profile_pic} style={styles.profile_picture} />
                                    <Text style={styles.name}>{item.name} {item.description}</Text>
                                </View>
                                <Image source={item.photo} style={styles.image}/>
                                <Text style={styles.caption}>{item.caption}</Text>
                                
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
        backgroundColor: '#EEE7DC'
    },
    scroll: {
        width: '100%'
    },
    list: {
        height: 280,
        width: '100%',
        marginBottom: '1%',
        backgroundColor: 'white'
    },
    tabs: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        height: '5%',
        width: '80%',
        justifyContent: 'space-between',
        marginTop: '3%',
        marginBottom: '3%'
    },
    tabText: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        marginTop: '7%'
    },
    profile_picture: {
        height: 40,
        width: 40,
        borderRadius: 30,
        marginRight: 10
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 15
    },
    name: {
        fontSize: 18,
        marginRight: 5
    },
    image: {
        height: 170,
        width: '90%',
        borderRadius: 10,
        alignSelf: 'center'
    },
    caption: {
        margin: 10
    }
});