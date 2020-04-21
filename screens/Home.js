import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import barrels from '../images/barrels.jpg';

export default class Home extends Component {

    render() {

        return (
            <View style={styles.screen}>
                <ImageBackground source={barrels} style={styles.image}>
                    <Text style={styles.title}>Kentucky{'\n'}Hug</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Home')}>
                            <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    title: {
        marginTop: '30%',
        marginBottom: '65%',
        fontSize: 60,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Chalkduster',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowRadius: 5
    },
    button: {
        height: '8%',
        width: '55%',
        backgroundColor: '#C9623C',
        alignSelf: 'center',
        borderRadius: 30,
        margin: 10
    },
    buttonText: {
        fontSize: 20,
        marginTop: '5%',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'Chalkduster',
        fontWeight: 'bold'
    }
});