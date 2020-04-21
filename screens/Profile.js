import React, { Component } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import profile_background from '../images/profile_background.jpg';
import profile_icon from '../images/profile_icon.png';

export default class Profile extends Component {

    render() {
        return (
            <View style={styles.screen}>
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
                    <TouchableOpacity style={styles.list}>
                        <Text style={styles.listText}>My Bottles</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.list}>
                        <Text style={styles.listText}>Ratings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.list}>
                        <Text style={styles.listText}>Wishlist</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.list}>
                        <Text style={styles.listText}>Achievements</Text>
                    </TouchableOpacity>
                </View>
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
    background: {
        height: '100%',
        width: '100%',
        alignItems: 'center'
    },
    profile_pic: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginTop: '35%'
    },
    profileTop: {
        height: '30%',
        width: '100%'
    },
    profileList: {
        height: '40%',
        width: '100%',
        marginTop: '30%'

    },
    name: {
        fontSize: 20,
        color: 'white',
        margin: 5,
        textAlign: 'center'
    },
    list: {
        height: '25%',
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#875445',
        borderWidth: 1
    },
    listText: {
        fontSize: 16,
        marginTop: '3%',
        marginLeft: '5%'
    }
});