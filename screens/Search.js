import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Ratings extends Component {

    render() {
        return (
            <View style={styles.screen}>
                <Header />
                    <TextInput style={styles.search}>Search</TextInput>
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