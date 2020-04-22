import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import settings from '../images/settings.png';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.screen}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={styles.item}>
                        <Image source={settings} style={styles.image} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        height: '10%',
        width: '100%',
        backgroundColor: 'white'
    },
    item: {
        height: '100%',
        width: '20%',
        // backgroundColor: state.selected == 'Group' ? '#3A9C1C' : '#54B948'
        justifyContent: 'center'
    },
    image: {
        height: '45%',
        width: '45%',
        borderRadius: 30,
        marginTop: '20%',
        marginLeft: '20%'
    },
    text: {
        fontSize: 12,
    }
});