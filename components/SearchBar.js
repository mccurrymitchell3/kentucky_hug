import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.screen}>
                <TextInput style={styles.search}>Search</TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'row',
        height: '10%',
        width: '100%'
    },
    search: {
        height: 35,
        width: '90%',
        textAlign: 'center',
        fontSize: 18,
        margin: '4%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#DCDCDC'
    }
});