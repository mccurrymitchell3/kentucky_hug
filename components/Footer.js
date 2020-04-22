import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import profile_icon from '../images/profile_icon.png';

export default class Footer extends Component {

    render() {
        return (
            <View style={styles.screen}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.item}>
                        <Image source={profile_icon} style={styles.image} />
                        <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.item}>
                        <Image source={profile_icon} style={styles.image} />
                        <Text style={styles.text}>Search</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('Scan')}}
                    style={styles.item}>
                        <Ionicons name="ios-camera" size={45} style={{ marginTop: -5, marginBottom: -10 }} />
                        <Text style={styles.text}>Scan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.item}>
                        <Image source={profile_icon} style={styles.image} />
                        <Text style={styles.text}>Feed</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('Profile')}}
                    style={styles.item}>
                        <Image source={profile_icon} style={styles.image} />
                        <Text style={styles.text}>Profile</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        height: '8%',
        width: '100%',
        backgroundColor: 'white'
    },
    item: {
        height: '100%',
        width: '20%',
        // backgroundColor: state.selected == 'Group' ? '#3A9C1C' : '#54B948'
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: '60%',
        width: '40%',
        borderRadius: 30
    },
    text: {
        fontSize: 12
    }
});