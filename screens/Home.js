import React, { Component } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Footer from '../components/Footer';
import Header from '../components/Header';

import elijah_craig_small_batch_bourbon from '../images/elijah_craig_small_batch_bourbon.jpg';

export default class Home extends Component {

    state = {
        selectedTab: 'Friends'
    }

    render() {

        const posts = [{profile_pic: elijah_craig_small_batch_bourbon, name: 'Mitch McCurry', caption: 'Love this!'}]
        return (
            <View style={styles.screen}>
                <Header />
                    <FlatList
                        data={posts}
                        renderItem={({ item }) =>
                            <TouchableOpacity
                                // onPress={() => Alert.alert('Post')}
                                style={styles.list}>
                                
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
    }
});