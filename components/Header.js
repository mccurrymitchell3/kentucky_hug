import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.screen}></View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        height: '6%',
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: 0
    }
});