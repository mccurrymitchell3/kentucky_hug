import React, { Component } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Footer from '../components/Footer';
import Header from '../components/Header';

import elijah_craig_small_batch_bourbon from '../images/elijah_craig_small_batch_bourbon.jpg';

export default class Feed extends Component {

    state = {
        selectedTab: 'Friends'
    }

    render() {

        const posts = [{profile_pic: elijah_craig_small_batch_bourbon, name: 'Mitch McCurry', caption: 'Love this!'}]
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
                        data={posts}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                // onPress={() => Alert.alert('Post')}
                                style={styles.list}>
                                
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
        height: 230,
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
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
    }
});