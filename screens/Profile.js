import React, { Component } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import profile_background from '../images/profile_background.jpg';
import profile_icon from '../images/profile_icon.png';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Profile extends Component {

    render() {
        return (
            <View style={styles.screen}>
                <Header />
                <ScrollView style={styles.scroll}>
                    <View style={styles.profileTop}>
                        <ImageBackground
                            source={profile_background}
                            style={styles.background}
                            blurRadius={0}>
                                <Image source={profile_icon} style={styles.profile_pic}/>
                                <Text style={styles.name}>Mitch McCurry</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.profileList}>
                        <TouchableOpacity
                        style={styles.list}
                        onPress={() => this.props.navigation.navigate('MyBottles')}>
                            <MaterialCommunityIcons
                                name="bottle-wine"
                                style={styles.icon}
                            />
                            <Text style={styles.listText}>My Bottles</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.list}
                        onPress={() => this.props.navigation.navigate('Ratings')}>
                            <MaterialCommunityIcons
                                name="star-half"
                                style={styles.icon}
                            />
                            <Text style={styles.listText}>Ratings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.list}
                        onPress={() => this.props.navigation.navigate('Wishlist')}>
                            <MaterialCommunityIcons
                                name="format-list-bulleted"
                                style={styles.icon}
                            />
                            <Text style={styles.listText}>Wishlist</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.list}
                        onPress={() => this.props.navigation.navigate('Notifications')}>
                            <MaterialCommunityIcons
                                name="bell"
                                style={styles.icon}
                            />
                            <Text style={styles.listText}>Notifications</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.list}
                        onPress={() => this.props.navigation.navigate('Achievements')}>
                            <MaterialCommunityIcons
                                name="medal"
                                style={styles.icon}
                            />
                            <Text style={styles.listText}>Achievements</Text>
                        </TouchableOpacity>
                    </View>
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
    background: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    profile_pic: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginTop: '40%'
    },
    profileTop: {
        height: '40%',
        width: '100%'
    },
    profileList: {
        height: '40%',
        width: '100%',
        marginTop: '28%'
    },
    name: {
        fontSize: 20,
        color: 'black',
        margin: 5,
        textAlign: 'center'
    },
    list: {
        flexDirection: 'row',
        height: '25%',
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#EEE7DC',
        borderWidth: 1,
        alignItems: 'center'
    },
    listText: {
        fontSize: 16
    },
    icon: {
        fontSize: 30,
        marginHorizontal: '1%',
        width: '7%'
    }
});